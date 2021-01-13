import { Record } from "../../utils/record";

export const HomelabInfraServices: Record[] = [
	{ name: 'router', description: 'Router', type: 'A', target: '10.10.0.1' },

	/* Unraid */
	{ name: 'idrac', description: 'iDRAC', type: 'A', target: '10.10.0.110' },
	{ name: 'galaxy', description: 'Unraid', type: 'A', target: '10.10.0.10' },	
	{ name: 'pihole', description: 'Pihole', type: 'A', target: '10.10.0.20' },
	{ name: 'backup', description: 'UrBackup', type: 'A', target: '10.10.0.21' },
	{ name: 'netboot', description: 'netboot.xyz', type: 'A', target: '10.10.0.22' },

	/* Rancher */
	{ name: 'rancher', description: 'Rancher Master Container', type: 'A', target: '10.10.0.100' },
	{ name: 'longhorn', description: 'Longhorn UI' },
	{ name: 'traefik', description: 'Traefik' },
	{ name: 'pdns', description: 'PowerDNS API' },
	
	/* Rancher Control/etcd Nodes */
	{ name: 'odin.control.rancher', description: 'Rancher Control - Odin', type: 'A', target: '10.10.0.101' },
	{ name: 'freya.control.rancher', description: 'Rancher Control - Freya', type: 'A', target: '10.10.0.102' },
	
	/* Rancher Worker Nodes */
	{ name: 'thor.worker.rancher', description: 'Rancher Worker - Thor', type: 'A', target: '10.10.0.111' },
	{ name: 'loki.worker.rancher', description: 'Rancher Worker - Loki', type: 'A', target: '10.10.0.112' },
	{ name: 'baldur.worker.rancher', description: 'Rancher Worker - Baldur', type: 'A', target: '10.10.0.113' },
	{ name: 'gaming.worker.rancher', description: 'Rancher Worker - Gaming', type: 'A', target: '10.10.0.121' },
];
