// Automatically import all zones
let context = require.context("./zones/", true, /\.ts$/);

context.keys().forEach((zone: string) => {
    console.log(`Loading ${zone}.`);
    context(zone);
});