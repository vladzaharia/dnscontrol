import { Record } from "../../utils/record";

export const PolarisVideoServices: Record[] = [
  /* Infrastructure */
  { name: "auth", description: "Authentik - Polaris" },

  /* Public */
  { name: "media", description: "Reiverr AIO server" },
  { name: "plex", description: "Plex media server" },
  { name: "jellyfin", description: "Jellyfin media server" },
  { name: "request", description: "Overseerr request service" },
  { name: "invite", description: "Wizarr invite management" },

  { name: "xteve", description: "xTeVe IPTV service" },
  { name: "ersatz", description: "Custom IPTV channel service" },
  { name: "logos", description: "IPTV channel logos" },
  { name: "guide", description: "Guide2go hosted guide and images" },

  { name: "stream", description: "Stremio" },
  { name: "proxy.stream", description: "Stremio proxy" },
  { name: "proxy", description: "Stremio proxy" },

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
  { name: "tautulli", description: "Tautulli Stats" },
  { name: "flow", description: "Fileflow Transcoder" },
];
