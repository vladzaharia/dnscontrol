import { Record } from "../../utils/record";

/**
 * Townhouse services
 */
export const TownhouseRecords: Record[] = [
  /* Infrastructure */
  { name: "router", type: "A", description: "Router", target: "10.10.0.1" },
  { name: "truenas", type: "A", description: "TrueNAS", target: "10.10.0.10" },
  { name: "vault", description: "Hashicorp Vault" },
  { name: "homevpn", description: "Subspace VPN" },
  { name: "prom", description: "Prometheus" },
  { name: "loki", description: "Loki" },
  { name: "s3", description: "Minio S3" },
  { name: "console.s3", description: "Minio S3" },
  { name: "ipfs", description: "IPFS" },
  { name: "urbit", description: "Urbit" },

  /* Personal Services */
  { name: "cloud", description: "Nextcloud" },
  { name: "docs", description: "Collabora" },
  { name: "ml", description: "Machine Learning", proxy: true },
  { name: "go", description: "Shlink API" },
  { name: "shlink", description: "Shlink UI" },
  { name: "outline", description: "Outline" },

  /* Smart Home */
  { name: "hubitat", description: "Hubitat" },
  { name: "hass", description: "Home Assistant" },
  { name: "hoobs", description: "HOOBS" },

  /* Personal Media Services */
  { name: "books", description: "Calibre" },
  { name: "music", description: "Airsonic" },
  { name: "stash", description: "Stash" },
  { name: "pod", description: "PodGrab Podcasts" },

  /* TeslaMate */
  { name: "tesla", description: "TeslaMate" },
];
