import { Record } from "../utils/record";
import { GetHost } from "./core";

/**
 * External (zaharia.io/zhr.one) Home services
 */
export const HomeExtServices: Record[] = [
];

/**
 * Internal (zhr.one) Home services
 */
export const HomeIntServices: Record[] = [
    /* Infrastructure */
    { name: 'cockpit', description: 'Cockpit' },
    { name: 'tp', description: 'Teleport' },
    { name: 'ca', description: 'zhr.one CA' },
    { name: 'ca-ssh', description: 'zhr.one SSH CA' },

    /* Cloud */
    { name: 'books', description: 'Calibre' },
    { name: 'ferdi', description: 'Ferdi' },
    { name: 'games', description: 'Pterodactyl' },
    { name: 'gitlab', description: 'Gitlab' },
    { name: 'print', description: 'OctoPrint' },

    /* Media Pipeline */
    { name: 'ombi', description: 'Ombi' },
    { name: 'radarr', description: 'Radarr' },
    { name: 'sonarr', description: 'Sonarr' },

    /* TeslaMate */
    { name: 'tesla', description: 'TeslaMate' }, 
    { name: 'tesla-gf', description: 'TeslaMate - Grafana' }, 

    /* Other Services */
    { name: 'parents', description: 'Parents', target: GetHost('Palladium') },
];
