#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS_DIR="$ROOT_DIR/assets"

require_tool() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "Erro: '$1' nao esta instalado." >&2
        exit 1
    fi
}

optimize_image() {
    local input="$1"
    local output="$2"

    ffmpeg -y -loglevel error -i "$input" \
        -c:v libwebp \
        -q:v 72 \
        -compression_level 6 \
        "$output"
}

optimize_video() {
    local input="$1"
    local output="$2"

    ffmpeg -y -loglevel error -i "$input" \
        -map 0:v:0 \
        -an \
        -c:v libx264 \
        -preset slow \
        -crf 31 \
        -movflags +faststart \
        -pix_fmt yuv420p \
        "$output"
}

require_tool ffmpeg

optimize_image "$ASSETS_DIR/v1/hero.png" "$ASSETS_DIR/v1/hero.webp"
optimize_image "$ASSETS_DIR/v1/biblia.png" "$ASSETS_DIR/v1/biblia.webp"
optimize_image "$ASSETS_DIR/v1/pastor.png" "$ASSETS_DIR/v1/pastor.webp"
optimize_video "$ASSETS_DIR/Video/Cruz1.mp4" "$ASSETS_DIR/Video/Cruz1-optimized.mp4"

echo "Midias otimizadas:"
stat -c '%n %s bytes' \
    "$ASSETS_DIR/v1/hero.webp" \
    "$ASSETS_DIR/v1/biblia.webp" \
    "$ASSETS_DIR/v1/pastor.webp" \
    "$ASSETS_DIR/Video/Cruz1-optimized.mp4"
