import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import {
  CreateCloudflareMailRecords,
  ROUTES_NUM,
} from "../records/mail/cfmail";

console.log("Zone: vlad.lgbt - vlad.gg Redirect");

D(
  "vlad.lgbt",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Basic records */
  A("@", "172.66.46.234"),

  /* HEY for Domains records */
  ...CreateCloudflareMailRecords(ROUTES_NUM, [97, 95, 68])

  /* Domain verification records */
);
