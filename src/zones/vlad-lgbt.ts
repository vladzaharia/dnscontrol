import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import {
  CreateCloudflareMailRecords,
  ROUTES_NUM,
} from "../records/mail/cfmail";
import { CreateRecord } from "../utils/record";
import { GetIP } from "../records/core";

console.log("Zone: vlad.lgbt - vlad.gg Redirect");

D(
  "vlad.lgbt",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Basic records */
  CreateRecord({ name: "@", type: "A", target: GetIP("Helium"), proxy: true }),
  CreateRecord({ name: "www", type: "A", target: GetIP("Helium"), proxy: true }),
  CF_TEMP_REDIRECT("*vlad.lgbt/*", "https://vlad.gg/$2"),

  /* HEY for Domains records */
  ...CreateCloudflareMailRecords(ROUTES_NUM, [97, 95, 68])

  /* Domain verification records */
);
