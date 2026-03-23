import * as tidal from '../src';

const results = await tidal.search(tidal.SearchType.tracks, 'liella!');

console.log(results.items);