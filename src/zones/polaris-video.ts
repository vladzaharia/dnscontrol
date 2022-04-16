import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import {
  CreateCloudflareMailRecords,
  ROUTES_NAMED,
} from "../records/mail/cfmail";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { PolarisVideoServices } from "../records/services/polaris";
import { CreateRecords } from "../utils/record";

console.log("Zone: vlad.lgbt - vlad.gg Redirect");

D(
  "polaris.video",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Service records */
  ...CreateRecords("Polaris Video", PolarisVideoServices, "Helium"),

  /* HEY for Domains records */
  ...CreateCloudflareMailRecords(ROUTES_NAMED, [73, 86, 28]),

  /* BetterUptime status */
  ...CreateRecords("status.polaris.video", BetterUptimeRecords)

  /* Domain verification records */
);
