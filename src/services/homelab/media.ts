import { Record } from "../../utils/record";


export const  HomelabMediaServices: Record[] = [
	/* Indexers - Rancher */
	{ name: 'sonarr.media', description: 'Sonarr' },
	{ name: 'radarr.media', description: 'Radarr' },
	{ name: 'sabnzbd.media', description: 'Sabnzbd' },
	{ name: 'books.media', description: 'Calibre Web' },

	/* Media Servers */
	{ name: 'airconnect.media', description: 'AirConnect', type: 'A', target: '10.10.16.101' },
	{ name: 'plex.media', description: 'Plex', type: 'A', target: '10.10.18.100' },
	
	/* Media Stats */
	{ name: 'stats.media', description: 'Tautulli' },
	{ name: 'ombi.media', description: 'Ombi' },
];