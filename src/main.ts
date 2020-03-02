/**
 * zhr.one DNS Bootstrapper
 */

// Get all zone files in zones/
let context = require.context("./zones/", true, /\.ts$/);

// Import each zone
context.keys().forEach((zone: string) => {
    console.log(`\n--\n\nLoading ${zone}...`);
    context(zone);
});

console.log('\n--\n');