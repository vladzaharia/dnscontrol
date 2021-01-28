import { Record } from "../utils/record";
import { GetHost } from "./core";

/**
 * External (zaharia.io/zhr.one) Home services
 */
export const HomeExtServices: Record[] = [
    { name: 'books', description: 'Calibre', proxy: true },
    { name: 'deluge', description: 'Deluge', proxy: true },
    { name: 'ombi', description: 'Ombi' },
    { name: 'radarr', description: 'Radarr', proxy: true },
    { name: 'sabnzbd', description: 'SabNZBd', proxy: true },
    { name: 'sonarr', description: 'Sonarr', proxy: true },
    { name: 'stats', description: 'Tautulli', proxy: true },
    { name: 'tp', description: 'Teleport' },
    { name: 'games', description: 'Pterodactyl' },
];

/**
 * Internal (zhr.one) Home services
 */
export const HomeIntServices: Record[] = [
    /* Internal Services */
    { name: 'parents', description: 'Parents', target: GetHost('Palladium') },
    { name: 'pdns', description: 'PowerDNS' }, 
];
