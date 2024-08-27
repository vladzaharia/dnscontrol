import { Record } from "../../utils/record";

/**
 * Infrastructure
 */
export const InfrastructureRecords: Record[] = [
  /* Infrastructure */
  { name: "router", description: "Router", target: "10.10.0.1", type: "A" },
  { name: "truenas", description: "TrueNAS", target: "10.10.0.10", type: "A" },
  { name: "adguard", description: "Adguard", target: "10.10.2.5", type: "A" },
  { name: "traefik", description: "Traefik" },
  { name: "auth", description: "Authentik" },
  { name: "ztd", description: "Zitadel" },
  { name: "cas", description: "Casdoor" },
  { name: "vault", description: "Hashicorp Vault" },
  { name: "notify", description: "Apprise" },
  { name: "sec", description: "Wazuh", target: "10.11.10.250", type: "A" },
];
