import {
    SITE_ORIGIN,
    applyTrackingParams,
    buildQrAttribution,
    getRequestContext,
    sanitizeLabel
} from './_lib/attribution.mjs';

export function GET(request) {
    const requestUrl = new URL(request.url);
    const label = sanitizeLabel(requestUrl.searchParams.get('label'), 'qrcode');
    const destination = new URL('/', SITE_ORIGIN);
    const tracking = buildQrAttribution(label);

    applyTrackingParams(destination, tracking);

    console.log(JSON.stringify({
        event: 'qr_visit',
        label,
        destination: `${destination.pathname}${destination.search}`,
        ...getRequestContext(request)
    }));

    return Response.redirect(destination.toString(), 307);
}
