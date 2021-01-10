import { Record } from "../utils/record";

export const TownhouseLocalServices: Record[] = [
    { name: 'router.local', description: 'Router', type: 'A', target: '10.10.0.1'},

    /* VMWare ESXi */
    { name: 'esxi.local', description: 'ESXi Universe - vCenter', type: 'A', target: '10.10.0.100'},
    
    { name: 'universe.local', description: 'ESXi Universe', type: 'A', target: '10.10.0.111'},
    { name: 'andromeda.universe.local', description: 'ESXi Universe - NIC1', type: 'A', target: '10.10.0.111'},
    { name: 'centaurus.universe.local', description: 'ESXi Universe - NIC2', type: 'A', target: '10.10.0.112'},
    { name: 'fornax.universe.local', description: 'ESXi Universe - NIC3', type: 'A', target: '10.10.0.113'},
    { name: 'hydra.universe.local', description: 'ESXi Universe - NIC4', type: 'A', target: '10.10.0.114'},
    { name: 'idrac.universe.local', description: 'ESXi Universe - iDRAC', type: 'A', target: '10.10.0.110'},
    
    { name: 'callisto.local', description: 'ESXi Node - Lenovo', type: 'A', target: '10.10.0.121'},
    { name: 'europa.local', description: 'ESXi Node - SK NUC', type: 'A', target: '10.10.0.122'},
    { name: 'ganymede.local', description: 'ESXi Node - NUC', type: 'A', target: '10.10.0.123'},    
   
    /* Unraid */
    { name: 'galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.10'},
    { name: '10gig.galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.10'},
    { name: '1gig.galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.11'},
    
    /* Nextcloud */
    { name: 'cloud.local', description: 'Nextcloud', type: 'A', target: '10.10.0.20'},
];

export const HomeLocalServices: Record[] = [
    { name: 'router-apt.local', description: 'Router', type: 'A', target: '10.0.1.1'},
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
    
    /* VMWare ESXi */
    { name: 'esxi-apt.local', description: 'vCenter', type: 'A', target: '10.0.11.135'},
    { name: 'esxi-alpha.local', description: 'ESXi Node 1', type: 'A', target: '10.0.11.200'},    
    { name: 'esxi-beta.local', description: 'ESXi Node 2', type: 'A', target: '10.0.11.211'},
    { name: 'esxi-charlie.local', description: 'ESXi Node 3', type: 'A', target: '10.0.11.212'},
    { name: 'esxi-delta.local', description: 'ESXi Node 4', type: 'A', target: '10.0.11.213'},    
   
    /* Rancher (internally accessible) k8s services */
    { name: 'traefik.rancher', description: 'Rancher Traefik', type: 'A', target: '10.0.11.210'},
];
