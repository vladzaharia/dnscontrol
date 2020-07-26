import { Record } from "../utils/records";
import { Argon, Barium } from "./core";

/**
 * External (zaharia.io) Westin-Docker Services
 */
export const DCExtServices: Record[] = [
    { name: 'asset', description: 'SnipeIt', proxy: true },
    { name: 'irc', description: 'TheLoungs', proxy: true },
    { name: 'network', description: 'Network', proxy: true },
    { name: 'phonesvc', description: "3CX (Legacy)", target: Barium },
];

/**
 * Internal (zhr.one) Westin-Docker Services
 */
export const DCIntServices: Record[] = [
    /* Infrastructure */
    { name: 'proxmox-dc', description: 'Westin Proxmox', target: Argon },
    { name: 'traefik-dc', description: 'Westin Traefik', proxy: true },
    { name: 'portainer-dc', description: 'Westin Portainer', proxy: true },

    /* Internal Services */
    { name: 'dash', description: 'Heimdall', proxy: true },
    { name: 'phone', description: '3CX', target: Barium },
    { name: 'tesla', description: 'TeslaMate' }, 
    { name: 'tesla-gf', description: 'TeslaMate - Grafana' }, 


    /* Warmitup Services */
    { name: 'chat', description: 'Mattermost' },
    { name: 'mrmr', description: 'Mumble' },
];