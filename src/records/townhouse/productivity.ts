import { Record } from "../../utils/record";

/**
 * Productivity services
 */
export const ProductivityServiceRecords: Record[] = [
  { name: "cloud", description: "Nextcloud" },
  { name: "office", description: "OnlyOffice" },
  { name: "docs", description: "Paperless-ng" },
  { name: "wiki", description: "Bookstack" },
  { name: "kasm", description: "Kasm" },
  { name: "code", description: "VS Code" },
  { name: "services", description: "Homepage" },
  { name: "kiwix", description: "Kiwix", target: "10.11.2.123", type: "A" },
];
