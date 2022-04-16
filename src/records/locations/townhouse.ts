import { Record } from "../../utils/record";
import { GetHost } from "../core";
import { PolarisVideoServices } from "../services/polaris";

/**
 * Internal (zhr.one) Home services
 */
export const HomeServices: Record[] = [
  /* Infrastructure */
  { name: "ca", description: "zhr.one CA" },
  { name: "id", description: "ID Proxy" },
  { name: "s3", description: "Minio S3" },
  { name: "console.s3", description: "Minio S3" },

  /* Personal Services */
  { name: "cloud", description: "Nextcloud" },
  { name: "ml", description: "Machine Learning" },
  { name: "go", description: "Shlink API" },
  { name: "shlink", description: "Shlink UI" },

  /* Smart Home */
  { name: "hubitat", description: "Hubitat" },
  { name: "hass", description: "Home Assistant" },
  { name: "hoobs", description: "HOOBS" },

  /* Personal Media Services */
  { name: "books", description: "Calibre" },
  { name: "music", description: "Airsonic" },
  { name: "stash", description: "Stash" },

  /* TeslaMate */
  { name: "tesla", description: "TeslaMate" },
  { name: "tesla-gf", description: "TeslaMate - Grafana" },

  /* Parent Redirect */
  { name: "parents", description: "Parents", target: GetHost("Palladium") },
];

export const PolarisHomeServices: Record[] = [...PolarisVideoServices];
