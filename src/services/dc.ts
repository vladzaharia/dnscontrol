import { CNAMERecord } from "../utils/cname";
import { Alpha, Beta } from "./core";

/**
 * External (zaharia.io) DC-Docker Services
 */
export const DCExtServices: CNAMERecord[] = [
    { name: 'asset', proxy: true }, // SnipeIt
    { name: 'dc', target: Alpha }, // Proxmox (Legacy)
    { name: 'irc', proxy: true }, // TheLounge
    { name: 'network', proxy: true }, // JIT
    { name: 'phonesvc', target: Beta } // 3CX (Legacy)
];

/**
 * Internal (zhr.one) DC-Docker Services
 */
export const DCIntServices: CNAMERecord[] = [
    /* Infrastructure */
    { name: 'proxmox-dc', target: Alpha },
    { name: 'traefik-dc', proxy: true },
    { name: 'portainer-dc', proxy: true },

    /* Internal Services */
    { name: 'dash', proxy: true }, // Heimdall
    { name: 'phone', target: Beta }, // 3CX

    /* Warmitup Services */
    { name: 'chat' }, // Mattermost
    { name: 'mrmr' }, // Mumble
];