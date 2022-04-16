import { Record } from "../../utils/record";
import { PolarisVideoServices } from "../services/polaris";

/**
 * Townhouse services
 */
export const TownhouseRecords: Record[] = [
  /* Infrastructure */
  { name: "router", type: "A", description: "Router", target: "10.10.0.1" },
  { name: "truenas", type: "A", description: "TrueNAS", target: "10.10.0.10" },
  { name: "ca", description: "zhr.one CA" },
  { name: "id", description: "ID Proxy" },
  { name: "s3", description: "Minio S3" },
  { name: "console.s3", description: "Minio S3" },

  /* Personal Services */
  { name: "cloud", description: "Nextcloud" },
  { name: "ml", description: "Machine Learning", proxy: true },
  { name: "go", description: "Shlink API" },
  { name: "shlink", description: "Shlink UI" },

  /* Smart Home */
  { name: "hubitat", description: "Hubitat" },
  { name: "hass", description: "Home Assistant" },
  { name: "hoobs", description: "HOOBS" },

  /* Personal Media Services */
  { name: "books", description: "Calibre" },
  { name: "music", description: "Airsonic", proxy: true },
  { name: "stash", description: "Stash", proxy: true },

  /* TeslaMate */
  { name: "tesla", description: "TeslaMate" },
];

export const PolarisHomeServices: Record[] = [...PolarisVideoServices];
