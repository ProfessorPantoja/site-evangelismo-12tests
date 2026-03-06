import {
    REGISTRATION_URL,
    applyTrackingParams,
    getRequestContext,
    readTrackingParams
} from './_lib/attribution.mjs';

export function GET(request) {
    const requestUrl = new URL(request.url);
    const destination = new URL(REGISTRATION_URL);
    const tracking = readTrackingParams(requestUrl);

    applyTrackingParams(destination, tracking);

    console.log(JSON.stringify({
        event: 'registration_click',
        tracking,
        destination: destination.toString(),
        ...getRequestContext(request)
    }));

    return Response.redirect(destination.toString(), 307);
}
