import { CNAMERecord } from "../utils/cname";

/**
 * External (zaharia.io) Home services
 */
export const HomeExtServices: CNAMERecord[] = [
    { name: 'books', proxy: true }, // Calibre
    { name: 'deluge', proxy: true }, // Deluge
    { name: 'home', proxy: true }, 
    { name: 'media' }, // Ombi
    { name: 'radarr', proxy: true }, // Radarr
    { name: 'sabnzbd', proxy: true }, // SabNZBd
    { name: 'sonarr', proxy: true }, // Sonarr
    { name: 'stats', proxy: true }, // Tautulli
];

/**
 * Internal (zhr.one) Home services
 */
export const HomeIntServices: CNAMERecord[] = [
    /* Infrastructure */
    { name: 'proxmox-home' },
    { name: 'traefik-home', proxy: true },
    { name: 'portainer-home', proxy: true },

    /* Internal Services */
    { name: 'f' }, // OpenFaaS
    { name: 'home' }, // Pritunl VPN
    { name: 'ping' }, // Statping
    { name: 'rd' }, // Guacamole

    /* Experimental Services */
    { name: 'crowd' }, // Atlassian Crowd (2/29)
    { name: 'jira' }, // Atlassian JIRA (2/29)
];
