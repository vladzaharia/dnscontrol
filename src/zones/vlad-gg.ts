import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateHeyForDomainsRecords } from "../records/mail/hey";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { NetlifyVladGGRecords } from "../records/services/netlify-vladgg";
import { CreateRecords } from "../utils/record";

console.log("Zone: vlad.gg - New Site");

D(
  "vlad.gg",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Basic records */
  ...CreateRecords("vlad.gg", NetlifyVladGGRecords),
  CreateRecord({ name: "bb", target: "vladzaharia.github.io" }),

  /* BetterUptime status */
  ...CreateRecords("status.vlad.gg", BetterUptimeRecords),

  /* HEY for Domains records */
  ...CreateHeyForDomainsRecords(),

  /* Domain verification records */
  TXT("@", "krh66c6273yfdhsr7061s77pbtfxm0mm"),
  TXT("@", "ybqnhr2z5gddd1kxbgdv6873s7ng47v6"),
  TXT("@", "verification:RZjHjtRtEzMtsNp12KuUs5GY"),
  TXT(
    "@",
    "keybase-site-verification=n3qSwDzktIKPqHCuwaKzYV8kp7LK6GBH8JlVRaso8j0"
  ),
  TXT(
    "@",
    "google-site-verification=KcgCGo0bX44Bv2_u1ylo0QBQJ9yF9SimfZxp7t-RNlk"
  ),
  TXT("_doppler_JU1pcFaV58gCB", "PdrzTCEi4G1eMwAB9XnzUp0X6uaMK6zT")
);
