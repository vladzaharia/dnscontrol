/**
 * Registrar - None
 * Cloudflare currently not supported as registrar.
 */
export const Registrar = NewRegistrar('none', 'NONE');

/**
 * DNS Provider - Cloudflare
 */
export const CloudflareDns = NewDnsProvider('cloudflare','CLOUDFLAREAPI'); // Cloudflare
