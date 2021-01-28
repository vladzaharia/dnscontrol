import { Record } from "../../utils/record";

export const  HomelabLocalServices: Record[] = [
    /* Unraid */
    { name: 'galaxy', description: 'Unraid', type: 'A', target: '10.10.0.10' },
    { name: '10gig.galaxy', description: 'Unraid', type: 'A', target: '10.10.0.10' },
    { name: '1gig.galaxy', description: 'Unraid', type: 'A', target: '10.10.0.11' },
    
    /* Unraid Services */
    { name: 'cloud', description: 'Nextcloud', type: 'A', target: '10.10.0.200' },
    { name: 'gitlab', description: 'Gitlab', type: 'A', target: '10.10.0.211' },
    { name: 'games', description: 'Games', type: 'A', target: '10.10.0.251' },

    /* Rancher */
    { name: 'rancher', description: 'Rancher Master Container', type: 'A', target: '10.10.0.100' },
       
    /* Rancher Apps */
    { name: 'pdns', description: 'PowerDNS' },
    { name: 'hello', description: 'Hello k8s' },
    { name: 'cost', description: 'Kubecost' },
    { name: 'dash', description: 'Local Dashboard' },
];
