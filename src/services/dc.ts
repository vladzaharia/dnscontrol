// eslint-disable-next-line no-unused-vars
import { Record } from "../utils/records";
import { Argon, Barium } from "./core";

/**
 * External (zaharia.io) DC-Docker Services
 */
export const DCExtServices: Record[] = [
    { name: 'asset', description: 'SnipeIt', proxy: true },
    { name: 'irc', description: 'TheLoungs', proxy: true },
    { name: 'network', description: 'Network', proxy: true },
    { name: 'phonesvc', description: "3CX (Legacy)", target: Barium },
];

/**
 * Internal (zhr.one) DC-Docker Services
 */
export const DCIntServices: Record[] = [
    /* Infrastructure */
    { name: 'proxmox-dc', description: 'DC Proxmox', target: Argon },
    { name: 'traefik-dc', description: 'DC Traefik', proxy: true },
    { name: 'portainer-dc', description: 'DC Portainer', proxy: true },

    /* Internal Services */
    { name: 'dash', description: 'Heimdall', proxy: true },
    { name: 'phone', description: '3CX', target: Barium },

    /* Warmitup Services */
    { name: 'chat', description: 'Mattermost' },
    { name: 'mrmr', description: 'Mumble' },
];