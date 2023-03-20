import { Record } from "../../utils/record";

/**
 * Townhouse services
 */
export const TownhouseRecords: Record[] = [
  /* Infrastructure */
  { name: "router", description: "Router", target: "10.10.0.1", type: "A" },
  { name: "truenas", description: "TrueNAS", target: "10.10.0.10", type: "A" },
  { name: "traefik", description: "Traefik" },
  { name: "auth", description: "Authentik" },
  { name: "vault", description: "Hashicorp Vault" },
  { name: "env", description: "Infisical" },

  /* Personal Services */
  { name: "cloud", description: "Nextcloud" },
  { name: "office", description: "OnlyOffice" },
  { name: "docs", description: "Paperless-ng" },
  { name: "wiki", description: "Bookstack" },
  { name: "kasm", description: "Kasm" },
  { name: "kiwix", description: "Kiwix", target: "10.11.2.123", type: "A" },

  /* Smart Home */
  { name: "hubitat", description: "Hubitat" },
  { name: "hass", description: "Home Assistant" },
  { name: "hoobs", description: "HOOBS" },

  /* Personal Media Services */
  { name: "books", description: "Calibre" },
  { name: "stash", description: "Stash" },
];
