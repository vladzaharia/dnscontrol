import { DNSControlRecord } from "../../utils/record";

export type Routes =
  | "route1"
  | "route2"
  | "route3"
  | "amir"
  | "isaac"
  | "linda";

export const ROUTES_NUM: Routes[] = ["route1", "route2", "route3"];
export const ROUTES_NAMED: Routes[] = ["amir", "isaac", "linda"];

/**
 * Creates records for Cloudflare Routing
 * @param domainIds Assigned domain IDs
 * @param dnsValidatorId MS= validation ID
 */
export function CreateCloudflareMailRecords(
  routes: Routes[],
  priorities: number[]
): DNSControlRecord[] {
  return [
    MX("@", priorities[0], `${routes[0]}.mx.cloudflare.net.`),
    MX("@", priorities[1], `${routes[1]}.mx.cloudflare.net.`),
    MX("@", priorities[2], `${routes[2]}.mx.cloudflare.net.`),
    TXT("@", "v=spf1 include:_spf.mx.cloudflare.net ~all"),
  ];
}
