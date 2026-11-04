// Builds evenly spaced land dots for the whole globe. Run with: node scripts/make-globe-dots.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';

const world = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'));
const land = feature(world, world.objects.land);
const dots = [];
const step = 2;

for (let lat = 80; lat >= -58; lat -= step) {
  const lonStep = step / Math.cos((lat * Math.PI) / 180);
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (geoContains(land, [lon, lat])) dots.push([lon, lat].map((value) => Number(value.toFixed(2))));
  }
}

writeFileSync('src/data/globe-dots.json', JSON.stringify(dots));
console.log(`${dots.length} dots`);
