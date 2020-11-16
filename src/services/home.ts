import { Record } from "../utils/record";
import { GetHost } from "./core";

/**
 * External (zaharia.io) Home services
 */
export const HomeExtServices: Record[] = [
    { name: 'books', description: 'Calibre', proxy: true },
    { name: 'deluge', description: 'Deluge', proxy: true },
    { name: 'media', description: 'Ombi' },
    { name: 'parents', description: 'Parents (Legacy)', target: GetHost('Palladium') },
    { name: 'radarr', description: 'Radarr', proxy: true },
    { name: 'sabnzbd', description: 'SabNZBd', proxy: true },
    { name: 'sonarr', description: 'Sonarr', proxy: true },
    { name: 'stats', description: 'Tautulli', proxy: true },
];

/**
 * Internal (zhr.one) Home services
 */
export const HomeIntServices: Record[] = [
    /* Infrastructure */
    { name: 'proxmox-home', description: 'Home Proxmox' },
    { name: 'traefik-home', description: 'Home Traefik', proxy: true },
    { name: 'portainer-home', description: 'Home Portainer', proxy: true },

    /* Internal Services */
    { name: 'ha', description: 'HomeAssistant', proxy: true },
    { name: 'home', description: 'Home Pritunl VPN' },
    { name: 'parents', description: 'Parents', target: GetHost('Palladium') },
    { name: 'ping', description: 'Statping' },
    { name: 'rd', description: 'Guacamole' }, 

    /* Experimental Services */
    { name: 'sync', description: 'SyncLounge' }, // Added 3/18

];
