// eslint-disable-next-line no-unused-vars
import { Record } from "../utils/records";

/**
 * External (zaharia.io) Home services
 */
export const HomeExtServices: Record[] = [
    { name: 'books', description: 'Calibre', proxy: true },
    { name: 'deluge', description: 'Deluge', proxy: true },
    { name: 'home', proxy: true }, 
    { name: 'media', description: 'Ombi' },
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
    { name: 'f', description: 'OpenFaaS' },
    { name: 'home', description: 'Home Pritunl VPN' },
    { name: 'ping', description: 'Statping' },
    { name: 'rd', description: 'Guacamole' }, 

    /* Experimental Services */
    { name: 'crowd', description: 'Atlassian Crowd' }, // Added 2/29
    { name: 'jira', description: 'Atlassian JIRA' }, // Added 2/29
];

export const HomeLocalServices: Record[] = [
    { name: 'router.local', type: 'a', description: 'Router', target: '10.0.10.1'},
    { name: 'server.local', type: 'a', description: 'New Server - Windows', target: '10.0.11.250'},
    { name: 'linux.server.local', type: 'a', description: 'New Server - Linux', target: '10.0.11.251'},
    { name: 'nas.local', type: 'a', description: 'NAS', target: '10.0.11.252'},

    /* Home DC */
    { name: 'dc.local', type: 'a', description: 'Home DC (Local)', target: '10.0.11.200'},
    { name: 'docker.dc.local', type: 'a', description: 'Docker', target: '10.0.11.201'},
    { name: 'pihole.dc.local', type: 'a', description: 'Pihole', target: '10.0.11.202'},
    { name: 'pritunl.dc.local', type: 'a', description: 'Pritunl', target: '10.0.11.203'},
    { name: 'openfaas.dc.local', type: 'a', description: 'OpenFaaS', target: '10.0.11.205'},
    { name: 'atlassian.dc.local', type: 'a', description: 'Atlassian', target: '10.0.11.206'},
];
