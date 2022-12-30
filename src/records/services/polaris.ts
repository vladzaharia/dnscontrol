import { Record } from "../../utils/record";

export const PolarisVideoServices: Record[] = [
  /* Infrastructure */
  { name: "auth", description: "Authentik - Polaris" },

  /* Public */
  { name: "media", description: "Plex Media Server" },
  { name: "request", description: "Overseerr Requests" },
  { name: "iptv", description: "IPTV Service (Primary)" },
  { name: "xui", description: "IPTV Service (Backup)" },
  { name: "player", description: "IPTV Player" },

  /* Private */
  { name: "sonarr", description: "Sonarr - TV Indexer", target: "10.12.2.11", type: "A" },
  { name: "radarr", description: "Radarr - Movie Indexer", target: "10.12.2.12", type: "A" },
  { name: "lidarr", description: "Lidarr - Music Indexer" },
  { name: "readarr", description: "Readerr - Book Indexer" },
  { name: "prowlarr", description: "Prowlarr - Meta Indexer", target: "10.12.2.10", type: "A" },

  { name: "sabnzbd", description: "SabNZBd - NZB Downloader", target: "10.12.2.20", type: "A" },
  {
    name: "transmission",
    description: "Transmission - Torrent/File Downloader",
  },
  { name: "bazarr", description: "Bazarr - Subtitle Downloader" },

  { name: "tautulli", description: "Tautulli Stats", target: "10.12.2.40", type: "A" },
  { name: "tdarr", description: "Tdarr transcoder", target: "10.12.2.60", type: "A" },
  
  { name: "ersatz", description: "ErsatzTV Channels" },
];
