import { Record } from "../../utils/record";

export const  HomelabLocalServices: Record[] = [
    { name: 'router.local', description: 'Router', type: 'A', target: '10.10.0.1' },

    /* Unraid */
    { name: 'idrac.local', description: 'iDRAC', type: 'A', target: '10.10.0.110' },
    { name: 'galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.10' },
    { name: '10gig.galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.10' },
    { name: '1gig.galaxy.local', description: 'Unraid', type: 'A', target: '10.10.0.11' },
    
    /* Unraid Services */
    { name: 'dns.local', description: 'UrBackup', type: 'A', target: '10.10.0.20' },
    { name: 'backup.local', description: 'UrBackup', type: 'A', target: '10.10.0.21' },
    { name: 'netboot.local', description: 'netboot.xyz', type: 'A', target: '10.10.0.22' },
    { name: 'cloud.local', description: 'Nextcloud', type: 'A', target: '10.10.0.200' },

    /* Rancher */
    { name: 'rancher.local', description: 'Rancher Master Container', type: 'A', target: '10.10.0.100' },
    
    /* Rancher Control/etcd Nodes */
    { name: 'odin.control.rancher.local', description: 'Rancher Control - Odin', type: 'A', target: '10.10.0.101' },
    { name: 'freya.control.rancher.local', description: 'Rancher Control - Freya', type: 'A', target: '10.10.0.102' },
    
    /* Rancher Worker Nodes */
    { name: 'thor.worker.rancher.local', description: 'Rancher Worker - Thor', type: 'A', target: '10.10.0.111' },
    { name: 'loki.worker.rancher.local', description: 'Rancher Worker - Loki', type: 'A', target: '10.10.0.112' },
    { name: 'baldur.worker.rancher.local', description: 'Rancher Worker - Baldur', type: 'A', target: '10.10.0.113' },
    { name: 'gaming.worker.rancher.local', description: 'Rancher Worker - Gaming', type: 'A', target: '10.10.0.121' },
   
    /* Rancher Core Services */
    { name: 'longhorn.local', description: 'Longhorn UI' },
    { name: 'traefik.local', description: 'Traefik' },
    { name: 'pdns.local', description: 'PowerDNS' },
    { name: 'hello.local', description: 'Hello k8s' },
];