import { Record } from "../utils/record";
import { GetHost, GetIP } from "./core";

/**
 * External (zaharia.io) Westin-Docker Services
 */
export const WestinExtServices: Record[] = [
    { name: 'asset', description: 'SnipeIt', proxy: true },
    { name: 'irc', description: 'TheLoungs', proxy: true },
    { name: 'network', description: 'Network', proxy: true },
    { name: 'phonesvc', description: "3CX (Legacy)", target: GetHost('Barium') },
];

/**
 * Site (vlad.gg) Westin-Docker Services
 */
export const WestinSiteServices: Record[] = [
    { name: '@', description: 'Site - Root (IP)', type: 'A', target: GetIP('Cobalt'), proxy: true },
    { name: 'www', description: 'Site - WWW', proxy: true },
];

/**
 * Internal (zhr.one) Westin-Docker Services
 */
export const WestinIntServices: Record[] = [
    /* Infrastructure */
    { name: 'proxmox-dc', description: 'Westin Proxmox', target: GetHost('Argon') },
    { name: 'traefik-dc', description: 'Westin Traefik', proxy: true },
    { name: 'portainer-dc', description: 'Westin Portainer', proxy: true },

    /* Internal Services */
    { name: 'dash', description: 'Heimdall', proxy: true },
    { name: 'phone', description: '3CX', target: GetHost('Barium') },
    { name: 'tesla', description: 'TeslaMate' }, 
    { name: 'tesla-gf', description: 'TeslaMate - Grafana' }, 


    /* Warmitup Services */
    { name: 'chat', description: 'Mattermost' },
    { name: 'mrmr', description: 'Mumble' },
];