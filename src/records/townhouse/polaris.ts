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
  { name: "sonarr", description: "Sonarr - TV Indexer" },
  { name: "radarr", description: "Radarr - Movie Indexer" },
  { name: "lidarr", description: "Lidarr - Music Indexer" },
  { name: "readarr", description: "Readerr - Book Indexer" },
  {
    name: "prowlarr",
    description: "Prowlarr - Meta Indexer",
  },
  {
    name: "sabnzbd",
    description: "SabNZBd - NZB Downloader",
  },
  {
    name: "qbittorrent",
    description: "qBittorrent - Torrent Downloader",
  },
  {
    name: "tdarr",
    description: "Tdarr transcoder",
    target: "10.12.2.60",
    type: "A",
  },
  { name: "tautulli", description: "Tautulli Stats" },
  { name: "ersatz", description: "ErsatzTV Channels" },
];
