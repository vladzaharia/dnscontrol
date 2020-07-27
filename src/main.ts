/**
 * zhr.one DNS Bootstrapper
 */

console.log('Building zones...\n')

// Get all zone files in zones/
const context = require.context("./zones/", true, /\.ts$/);

// Import each zone
context.keys().forEach((zone: string) => {
    console.log(`Loading ${zone}...`);
    context(zone);
    console.log('\n--\n\n');
});

console.log('Running dnscontrol...\n');