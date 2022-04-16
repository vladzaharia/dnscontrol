import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateOffice365Records } from "../records/mail/office365";
import { CreateRecords } from "../utils/record";
import { GGStreamServices } from "../records/ggstream";

console.log("Zone: ggstream.app - GGStream");

D(
  "ggstream.app",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  NO_PURGE,
  /* Basic records */
  CreateRecords("ggstream.app", GGStreamServices),

  /* Office 365 records */
  ...CreateOffice365Records("ggstream-app", "ms10047080"),
  MX("*", 0, "ggstream-app.mail.protection.outlook.com."),
  CNAME(
    "selector1._domainkey",
    "selector1-ggstream-app._domainkey.vladzaharia.onmicrosoft.com."
  ),
  CNAME(
    "selector2._domainkey",
    "selector2-ggstream-app._domainkey.vladzaharia.onmicrosoft.com."
  ),

  /* Domain verification records */
  TXT("@", "z5kq9zxtp10ft5vty3h4rkhv9qfkcbl4"),
  TXT("_github-challenge-ggstream-app", "1847b10155")
);
