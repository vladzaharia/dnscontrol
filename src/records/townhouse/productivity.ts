import { Record } from "../../utils/record";

/**
 * Productivity services
 */
export const ProductivityServiceRecords: Record[] = [
  { name: "atuin", description: "Atuin Shell History" },
  { name: "cloud", description: "Nextcloud" },
  { name: "office", description: "OnlyOffice" },
  { name: "docs", description: "Paperless-ng" },
  { name: "wiki", description: "Bookstack" },
  { name: "kasm", description: "Kasm" },
  { name: "code", description: "Coder" },
  { name: "*.code", description: "Coder Wildcard" },
  { name: "services", description: "Homepage" },
  { name: "games", description: "Pterodactyl" },
  { name: "games-node", description: "Pterodactyl Wings" },
  { name: "mc", description: "Minecraft Bluemap" },
  { name: "mqtt", description: "Mosquitto mqtt" },
  { name: "fz", description: "FireZone" },
  { name: "nix", description: "Nix cache" },
  { name: "hoard", description: "Hoarder" },
  { name: "chat", description: "Lobe Chat" },
  { name: "chatbot", description: "Chatbot UI", target: "cname.vercel-dns.com.", type: "CNAME" },
  { name: "kiwix", description: "Kiwix", target: "10.11.2.123", type: "A" },
];
