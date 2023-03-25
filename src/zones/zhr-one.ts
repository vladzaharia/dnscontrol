import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetCoreRecords, GetPrefix } from "../records/core";
import { CreateRecords } from "../utils/record";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { TailscaleRecords } from "../records/services/tailscale";
import { CreateFastmailRecords } from "../records/mail/fastmail";
import { InfrastructureRecords } from "../records/townhouse/infrastructure";
import { ProductivityServiceRecords } from "../records/townhouse/productivity";
import { MediaServiceRecords } from "../records/townhouse/media-services";
import { SmartHomeRecords } from "../records/townhouse/smart-home";

const BASE_DOMAIN = "zhr.one";
console.log(`Zone: ${BASE_DOMAIN} - Services`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Core records */
  ...CreateRecords("Core", GetCoreRecords()),

  // DDNS-managed
  IGNORE_NAME(GetPrefix("Helium")),

  /* Townhouse records */
  ...CreateRecords("Infrastructure", InfrastructureRecords, "Helium"),
  ...CreateRecords("Media Services", MediaServiceRecords, "Helium"),
  ...CreateRecords("Productivity", ProductivityServiceRecords, "Helium"),
  ...CreateRecords("Smart Home", SmartHomeRecords, "Helium"),

  /* Tailscale records */
  ...CreateRecords("Tailscale", TailscaleRecords, "Helium"),

  /* BetterUptime status */
  ...CreateRecords("status.zhr.one", BetterUptimeRecords),

  /* Uptime-Kuma */
  CNAME("uptime", "zhrone-uptime.westus2.cloudapp.azure.com."),
  TXT("_dnsauth.uptime", "cnw3xhsqqqlzr50jf9x6crxdk86b2p3t"),

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
