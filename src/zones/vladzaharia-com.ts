import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import {
  CreateCloudflareMailRecords,
  ROUTES_NUM,
} from "../records/mail/cfmail";

console.log("Zone: vladzaharia.com - Deprecated");

D(
  "vladzaharia.com",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Basic records */
  A("@", "172.66.46.234"),

  /* Cloudflare Mail records */
  ...CreateCloudflareMailRecords(ROUTES_NUM, [72, 15, 91]),

  /* Verification records */
  TXT(
    "@",
    "google-site-verification=O6SHBSQsVM-doi4rNL3r9YSsihG0AGHoy-YVMrJeg0w"
  ),
  TXT(
    "@",
    "google-site-verification=w25j9kvxu2-EN8IEnuBcbPzBDa9ayCj24aVr1PUSxaY"
  ),
  TXT(
    "@",
    "keybase-site-verification=jgh6s9z8DqOxzqUWr8b4p65ydtn0D7STlWfoKfetsio"
  ),
  TXT("@", "MS=ms36958426"),
  TXT("@", "krh66c6273yfdhsr7061s77pbtfxm0mm")
);
