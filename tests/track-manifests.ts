import * as tidal from '../src';

const result = await tidal.trackManifests(
    393068578,
    ['FLAC_HIRES', 'FLAC', 'EAC3_JOC'],
    true,
    'HLS',
    'HTTPS',
    'PLAYBACK'
);

console.log(result);