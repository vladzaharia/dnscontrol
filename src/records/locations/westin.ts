import { Record } from "../../utils/record";
import { GetHost } from "../core";

/**
 * External (zaharia.io) Westin-Docker Services
 */
export const WestinRecords: Record[] = [
  { name: "phone", description: "3CX (Legacy)", target: GetHost("Barium") },
  { name: "vpn", description: "3CX (Legacy)", target: GetHost("Gallium") },
];
