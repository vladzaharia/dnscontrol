import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetCoreRecords, GetPrefix } from "../records/core";
import { CreateFastmailRecords } from "../records/mail/fastmail";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { InfrastructureRecords } from "../records/townhouse/infrastructure";
import { InternalRecords } from "../records/townhouse/internal";
import { MediaServiceRecords } from "../records/townhouse/media-services";
import { ProductivityServiceRecords } from "../records/townhouse/productivity";
import { SmartHomeRecords } from "../records/townhouse/smart-home";
import { CreateRecords } from "../utils/record";

const BASE_DOMAIN = "polaris.rest";
console.log(`Zone: ${BASE_DOMAIN}`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),

  /* Core records */
  ...CreateRecords("Core", GetCoreRecords()),
  IGNORE_NAME("@", "A,CNAME"),

  // DDNS-managed
  IGNORE_NAME(GetPrefix("Helium")),
  IGNORE_NAME("assets"),

  /* Townhouse records */
  ...CreateRecords("Infrastructure", InfrastructureRecords),
  ...CreateRecords("Media Services", MediaServiceRecords),
  ...CreateRecords("Productivity", ProductivityServiceRecords),
  ...CreateRecords("Smart Home", SmartHomeRecords),
  ...CreateRecords("Internal", InternalRecords, "LocalTraefik", ".int"),

  /* KMS */
  SRV("_vlmcs._tcp", 0, 0, 1688, "truenas.polaris.rest."),

  /* BetterUptime status */
  ...CreateRecords("status.polaris.rest", BetterUptimeRecords),

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN)

  /* Domain verification records */
);
