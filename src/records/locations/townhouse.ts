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

  /* Personal Services */
  { name: "asset", description: "Snipe-It" },
  { name: "cloud", description: "Nextcloud" },
  { name: "docs", description: "Collabora" },
  { name: "hb", description: "HOOBS" },
  { name: "kiwix", type: "A", description: "Kiwix", target: "10.11.2.123" },
  { name: "ml", description: "Machine Learning", proxy: true },
  { name: "outline", description: "Outline" },
  { name: "urbit", description: "Urbit" },

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
