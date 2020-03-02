/**
 * zhr.one DNS Bootstrapper
 */

// Get all zone files in zones/
let context = require.context("./zones/", true, /\.ts$/);

// Import each zone
context.keys().forEach((zone: string) => {
    console.log(`Loading ${zone}.`);
    context(zone);
});