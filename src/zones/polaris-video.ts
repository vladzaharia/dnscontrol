import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateFastmailRecords } from "../records/mail/fastmail";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { PolarisVideoServices } from "../records/townhouse/polaris";
import { CreateRecords } from "../utils/record";

const BASE_DOMAIN = "polaris.video";
console.log(`Zone: ${BASE_DOMAIN}`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Service records */
  ...CreateRecords("Polaris Video", PolarisVideoServices),

  /* BetterUptime status */
  ...CreateRecords("status.polaris.video", BetterUptimeRecords),

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN),

  /* Domain verification records */
  TXT("@", "b3c14s9b4ym8wnfrz74db3g0q0425sry")
);
