import { Record } from "../utils/records";
import { Palladium } from "./core";

/**
 * External (zaharia.io) Home services
 */
export const HomeExtServices: Record[] = [
    { name: 'books', description: 'Calibre', proxy: true },
    { name: 'deluge', description: 'Deluge', proxy: true },
    { name: 'home', proxy: true }, 
    { name: 'media', description: 'Ombi' },
    { name: 'parents', description: 'Parents (Legacy)', target: Palladium },
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
    { name: 'vault', description: 'Hashicorp Vault' }, 
    { name: 'consul', description: 'Hashicorp Consul' }, 


    /* Internal Services */
    { name: 'home', description: 'Home Pritunl VPN' },
    { name: 'parents', description: 'Parents', target: Palladium },
    { name: 'ping', description: 'Statping' },
    { name: 'rd', description: 'Guacamole' }, 

    /* Experimental Services */
    { name: 'sync', description: 'SyncLounge' }, // Added 3/18

];

export const HomeLocalServices: Record[] = [
    { name: 'router.local', description: 'Router', type: 'A', target: '10.0.1.1'},
    { name: 'server.local', description: 'New Server - Windows', type: 'A', target: '10.0.11.250'},
    { name: 'linux.server.local', description: 'New Server - Linux', type: 'A', target: '10.0.11.251'},
    { name: 'nas.local', description: 'NAS', type: 'A', target: '10.0.11.252'},

    /* Home DC */
    { name: 'dc.local', description: 'Home DC (Local)', type: 'A', target: '10.0.11.200'},
    { name: 'docker.dc.local', description: 'Docker', type: 'A', target: '10.0.11.201'},
    { name: 'plex.dc.local', description: 'Plex', type: 'A', target: '10.0.11.202'},
    { name: 'pritunl.dc.local', description: 'Pritunl', type: 'A', target: '10.0.11.203'},
    { name: 'hashicorp.dc.local', description: 'Hashicorp', type: 'A', target: '10.0.11.205'},
];
