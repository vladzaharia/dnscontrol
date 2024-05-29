import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetCoreRecords, GetPrefix } from "../records/core";
import { CreateRecords } from "../utils/record";
// import { BetterUptimeRecords } from "../records/services/betteruptime";
import { CreateFastmailRecords } from "../records/mail/fastmail";
import { InfrastructureRecords } from "../records/townhouse/infrastructure";
import { ProductivityServiceRecords } from "../records/townhouse/productivity";
import { MediaServiceRecords } from "../records/townhouse/media-services";
import { SmartHomeRecords } from "../records/townhouse/smart-home";
import { InternalRecords } from "../records/townhouse/internal";

const BASE_DOMAIN = "zhr.one";
console.log(`Zone: ${BASE_DOMAIN} - Services`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Core records */
  ...CreateRecords("Core", GetCoreRecords()),
  IGNORE_NAME("@", "A,CNAME,AAAA"),

  // DDNS-managed
  IGNORE_NAME(GetPrefix("Helium")),

  // CF-managed
  IGNORE_NAME("status", "A,CNAME,AAAA"),

  /* Townhouse records */
  ...CreateRecords("Infrastructure", InfrastructureRecords),
  ...CreateRecords("Media Services", MediaServiceRecords),
  ...CreateRecords("Productivity", ProductivityServiceRecords),
  ...CreateRecords("Smart Home", SmartHomeRecords),
  ...CreateRecords("Internal", InternalRecords, "LocalTraefik", ".int"),

  /* BetterUptime status */
  // ...CreateRecords("status.zhr.one", BetterUptimeRecords),

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN),

  /* KMS */
  SRV("_vlmcs._tcp", 0, 0, 1688, "truenas.zhr.one."),

  /* Domain verification records */
  TXT(
    "@",
    "atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA"
  ),
  TXT(
    "@",
    "keybase-site-verification=z79M8GrtyF-25fIHHrUfBlJmPbmcj5sNdIUOjsoIb00"
  ),
  TXT("@", "MS=ms62227587"),
  TXT("@", "MS=ms10317245"),
  TXT("@", "b3c14s9b4ym8wnfrz74db3g0q0425sry"),
  TXT("_doppler_guRuoPJHEswl0", "B1aF7MgOlLnYKwXH4eGgV4vV7eaAL8Q8")
);
