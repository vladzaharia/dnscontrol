import { Record } from "../../utils/record";

export const  HomelabMediaServices: Record[] = [
	/* Indexers - Rancher */
	{ name: 'sonarr', description: 'Sonarr' },
	{ name: 'radarr', description: 'Radarr' },
	{ name: 'sabnzbd', description: 'Sabnzbd' },
	{ name: 'calibre', description: 'Calibre Web' },

	/* Media Servers */
	{ name: 'airconnect', description: 'AirConnect', type: 'A', target: '10.10.16.101' },
	{ name: 'plex', description: 'Plex', type: 'A', target: '10.10.18.100' },
	
	/* Media Stats */
	{ name: 'stats', description: 'Tautulli' },
	{ name: 'ombi', description: 'Ombi' },
];

export default HomelabMediaServices;