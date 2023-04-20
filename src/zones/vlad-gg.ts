import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateFastmailRecords } from "../records/mail/fastmail";
import { BetterUptimeRecords } from "../records/services/betteruptime";
import { NetlifyVladGGRecords } from "../records/services/netlify-vladgg";
import { CreateRecord, CreateRecords } from "../utils/record";

const BASE_DOMAIN = "vlad.gg";
console.log(`Zone: ${BASE_DOMAIN} - New Site`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Basic records */
  ...CreateRecords(BASE_DOMAIN, NetlifyVladGGRecords),
  CreateRecord({ name: "bb", target: "bb-vlad-gg.netlify.app." }),

  /* BetterUptime status */
  ...CreateRecords("status.vlad.gg", BetterUptimeRecords),

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN),
  ...CreateFastmailRecords(`ds.${BASE_DOMAIN}`, "ds"),

  /* Dropshare records */
  //CreateRecord({ name: "_b2939c0fadc2984e462e24c1f5ba199f.drop", target: "_41d2694c3cef6997de96302706a73a96.cvxnfrzvtq.acm-validations.aws." }),
  //CreateRecord({ name: "drop", target: "du8l8g206yjol.cloudfront.net." }),
  //CAA("@", "issue", "amazon.com"),
  IGNORE_NAME("drop"),

  /* Domain verification records */
  TXT("@", "b3c14s9b4ym8wnfrz74db3g0q0425sry"),
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
