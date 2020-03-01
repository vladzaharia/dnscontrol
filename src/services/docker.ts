import { CNAMERecord } from "../utils/cname";

/**
 * External (zaharia.io) DC-Docker Services
 */
export const DockerExtServices: CNAMERecord[] = [
    { name: 'asset', proxy: true }, // SnipeIt
    { name: 'irc', proxy: true }, // TheLounge
    { name: 'network', proxy: true }, // JIT
];

/**
 * Internal (zhr.one) DC-Docker Services
 */
export const DockerIntServices: CNAMERecord[] = [
    /* Infrastructure */
    { name: 'traefik-dc', proxy: true },
    { name: 'portainer-dc', proxy: true },

    /* Internal Services */
    { name: 'dash', proxy: true }, // Heimdall

    /* Warmitup Services */
    { name: 'chat' }, // Mattermost
    { name: 'mrmr' }, // Mumble
];