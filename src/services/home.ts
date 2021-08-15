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
    { name: 'apt', description: 'apt Proxy' },
    { name: 'backup', description: 'Backup' },
    { name: 'ca', description: 'zhr.one CA' },
    { name: 'ca-ssh', description: 'zhr.one SSH CA' },
    { name: 'id', description: 'ID Proxy' },
    { name: 's3', description: 'Minio S3' },
    { name: 'console.s3', description: 'Minio S3' },

    /* Cloud */
    { name: 'ass', description: 'ASS' },
    { name: 'books', description: 'Calibre' },
    { name: 'cloud', description: 'Nextcloud' },
    { name: 'convos', description: 'Convos' },
    { name: 'games', description: 'Pterodactyl' },
    { name: 'gitlab', description: 'Gitlab' },
    { name: 'gitpod', description: 'Gitpod' },
    { name: '*.gitpod', description: 'Gitpod Wildcard' },
    { name: '*.ws.gitpod', description: 'Gitpod WS Wildcard' },
    { name: 'go', description: 'Shlink API' },
    { name: 'shlink', description: 'Shlink UI' },
    { name: 'bin', description: 'Hastebin' },

    /* Smart Home */
    { name: 'hass', description: 'Home Assistant' },
    { name: 'hubitat', description: 'Hubitat' },
    { name: 'print', description: 'OctoPrint' },

    /* Matrix */
    { name: 'element', description: 'Element' },
    { name: 'matrix', description: 'Matrix' },

    /* Media Pipeline */
    { name: 'ombi', description: 'Ombi' },
    { name: 'lidarr', description: 'Lidarr' },
    { name: 'readarr', description: 'Readarr' },
    { name: 'radarr', description: 'Radarr' },
    { name: 'sonarr', description: 'Sonarr' },
    { name: 'jellyfin', description: 'Jellyfin' },
    { name: 'plex', description: 'Plex' },
    { name: 'ariang', description: 'AriaNG' },
    { name: 'aria2', description: 'Aria2 API' },

    /* TeslaMate */
    { name: 'tesla', description: 'TeslaMate' }, 
    { name: 'tesla-gf', description: 'TeslaMate - Grafana' }, 

    /* Other Services */
    { name: 'parents', description: 'Parents', target: GetHost('Palladium') },
];
