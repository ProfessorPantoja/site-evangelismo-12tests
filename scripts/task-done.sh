#!/usr/bin/env bash

set -euo pipefail

CUSTOM_SOUND="${HOME}/sounds/done.wav"

play_file() {
    local file="$1"

    if command -v paplay >/dev/null 2>&1; then
        paplay "$file"
        return 0
    fi

    if command -v aplay >/dev/null 2>&1; then
        aplay "$file"
        return 0
    fi

    return 1
}

if [[ -f "$CUSTOM_SOUND" ]]; then
    play_file "$CUSTOM_SOUND"
    exit 0
fi

if command -v paplay >/dev/null 2>&1; then
    paplay /usr/share/sounds/LinuxMint/stereo/system-ready.ogg
    sleep 0.18
    paplay /usr/share/sounds/freedesktop/stereo/complete.oga
    exit 0
fi

if command -v canberra-gtk-play >/dev/null 2>&1; then
    canberra-gtk-play -f /usr/share/sounds/LinuxMint/stereo/system-ready.ogg
    sleep 0.18
    canberra-gtk-play -i complete
    exit 0
fi

echo "Nenhum player de audio disponivel." >&2
exit 1
