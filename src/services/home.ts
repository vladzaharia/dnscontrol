import { Record } from "../utils/record";
import { GetHost } from "./core";

/**
 * External (zaharia.io) Home services
 */
export const HomeExtServices: Record[] = [
    { name: 'books', description: 'Calibre', proxy: true },
    { name: 'deluge', description: 'Deluge', proxy: true },
    { name: 'media', description: 'Ombi' },
    { name: 'parents', description: 'Parents (Legacy)', target: GetHost('Palladium') },
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
    { name: 'ha', description: 'HomeAssistant', proxy: true },
    { name: 'home', description: 'Home Pritunl VPN' },
    { name: 'parents', description: 'Parents', target: GetHost('Palladium') },
    { name: 'ping', description: 'Statping' },
    { name: 'rd', description: 'Guacamole' }, 

    /* Experimental Services */
    { name: 'sync', description: 'SyncLounge' }, // Added 3/18

];

export const HomeLocalServices: Record[] = [
    { name: 'router.local', description: 'Router', type: 'A', target: '10.0.1.1'},
    { name: 'nas.local', description: 'NAS', type: 'A', target: '10.0.11.252'},

    /* Home Westin */
    { name: 'dc.local', description: 'Home Westin (Local)', type: 'A', target: '10.0.11.200'},
    { name: 'docker.dc.local', description: 'Docker', type: 'A', target: '10.0.11.201'},
    { name: 'plex.dc.local', description: 'Plex', type: 'A', target: '10.0.11.202'},
    { name: 'pritunl.dc.local', description: 'Pritunl', type: 'A', target: '10.0.11.203'},
    { name: 'ansible.dc.local', description: 'Pritunl', type: 'A', target: '10.0.11.204'},
    
    /* Hashicorp */
    { name: 'hashicorp.dc.local', description: 'Hashicorp', type: 'A', target: '10.0.11.205'},
    { name: 'vault', description: 'Hashicorp Vault', type: 'A', target: '10.0.11.205'}, 
    { name: 'consul', description: 'Hashicorp Consul', type: 'A', target: '10.0.11.205'}, 
    
    /* Rancher k8s */
    { name: 'rancher.dc.local', description: 'Rancher Master', type: 'A', target: '10.0.11.210'},
    { name: 'alpha.rancher.local', description: 'Rancher Node 1', type: 'A', target: '10.0.11.210'},
    
    /* VMWare ESXi */
    { name: 'esxi.local', description: 'vCenter', type: 'A', target: '10.0.11.135'},
    { name: 'beta.esxi.local', description: 'ESXi Node', type: 'A', target: '10.0.11.211'},
    { name: 'charlie.esxi.local', description: 'ESXi Node', type: 'A', target: '10.0.11.212'},
   
    /* Rancher (internally accessible) k8s services */
    { name: 'traefik.rancher', description: 'Rancher Traefik', type: 'A', target: '10.0.11.210'},
];
