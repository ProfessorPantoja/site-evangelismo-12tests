export const SITE_ORIGIN = 'https://admpf-evangelismo-2026.vercel.app';
export const REGISTRATION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdJLjQ8vk9opE-63bY7BHtKdkne6OPQ8OK7372x9vPSVEcJPQ/viewform?usp=publish-editor';
export const DEFAULT_CAMPAIGN = 'conscientizacao_evangelistica_2026';

const TRACKING_KEYS = [
    'src',
    'qr_label',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content'
];

export function sanitizeLabel(value, fallback = 'qrcode') {
    if (!value) {
        return fallback;
    }

    const normalized = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 64);

    return normalized || fallback;
}

export function buildQrAttribution(label = 'qrcode') {
    const safeLabel = sanitizeLabel(label);

    return {
        src: 'qrcode',
        qr_label: safeLabel,
        utm_source: 'qrcode',
        utm_medium: 'offline',
        utm_campaign: DEFAULT_CAMPAIGN,
        utm_content: safeLabel
    };
}

export function readTrackingParams(url) {
    const tracking = {};

    TRACKING_KEYS.forEach((key) => {
        const value = url.searchParams.get(key);
        if (value) {
            tracking[key] = sanitizeLabel(value, value);
        }
    });

    return tracking;
}

export function applyTrackingParams(url, tracking) {
    Object.entries(tracking).forEach(([key, value]) => {
        if (value) {
            url.searchParams.set(key, value);
        }
    });

    return url;
}

export function getRequestContext(request) {
    return {
        referer: request.headers.get('referer') || '',
        user_agent: (request.headers.get('user-agent') || '').slice(0, 160),
        country: request.headers.get('x-vercel-ip-country') || '',
        region: request.headers.get('x-vercel-ip-country-region') || '',
        city: request.headers.get('x-vercel-ip-city') || ''
    };
}
