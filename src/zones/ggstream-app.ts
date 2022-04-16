import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import {
  CreateCloudflareMailRecords,
  ROUTES_NUM,
} from "../records/mail/cfmail";

console.log("Zone: ggstream.app - GGStream");

D(
  "ggstream.app",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  NO_PURGE,
  /* Basic records */

  /* Office 365 records */
  ...CreateCloudflareMailRecords(ROUTES_NUM, [6, 8, 65]),

  /* Domain verification records */
  TXT("@", "MS=ms10047080"),
  TXT("@", "z5kq9zxtp10ft5vty3h4rkhv9qfkcbl4"),
  TXT("_github-challenge-ggstream-app", "1847b10155")
);
