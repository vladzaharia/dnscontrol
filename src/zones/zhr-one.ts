import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetHost, GetCoreRecords, GetPrefix } from "../records/core";
import { WestinRecords } from "../records/locations/westin";
import { TownhouseRecords } from "../records/locations/townhouse";
import { CreateRecords } from "../utils/record";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import {
  CreateCloudflareMailRecords,
  ROUTES_NAMED,
} from "../records/mail/cfmail";
import { TailscaleRecords } from "../records/services/tailscale";

console.log("Zone: zhr.one - Services");

D(
  "zhr.one",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Core records */
  ...CreateRecords("Core", GetCoreRecords()),

  // DDNS-managed
  IGNORE_NAME(GetPrefix("Helium")),

  /* Home records */
  ...CreateRecords("Townhouse", TownhouseRecords, "Helium"),

  /* Westin records */
  ...CreateRecords("Westin", WestinRecords, "Cobalt"),

  /* Tailscale records */
  ...CreateRecords("Tailscale", TailscaleRecords, "Helium"),

  /* BetterUptime status */
  ...CreateRecords("status.zhr.one", BetterUptimeRecords),
  CNAME("uptime.zhr.one", "zhrone-uptime.westus2.cloudapp.azure.com."),

  /* Cloudflare mail records */
  ...CreateCloudflareMailRecords(ROUTES_NAMED, [62, 12, 52]),

  /* 3CX SIP records */
  SRV("_sip._tcp", 20, 1, 5060, GetHost("Barium")),
  SRV("_sip._udp", 20, 1, 5060, GetHost("Barium")),
  SRV("_sip._tls", 20, 1, 5061, GetHost("Barium")),

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
  TXT("@", "krh66c6273yfdhsr7061s77pbtfxm0mm"),
  TXT("_doppler_guRuoPJHEswl0", "B1aF7MgOlLnYKwXH4eGgV4vV7eaAL8Q8")
);
