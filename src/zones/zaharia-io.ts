import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateRecord } from "../utils/record";
import { GetIP } from "../records/core";
import {
  CreateCloudflareMailRecords,
  ROUTES_NUM,
} from "../records/mail/cfmail";

console.log("Zone: zaharia.io - Deprecated");

D(
  "zaharia.io",
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Infrastructure */
  CreateRecord({ name: "@", type: "A", target: GetIP("Cobalt") }),

  /* Cloudflare mail records */
  ...CreateCloudflareMailRecords(ROUTES_NUM, [70, 64, 10]),

  /* Verification records */
  TXT(
    "@",
    "google-site-verification=zEcBVYIqvFVmJI5LzySY0MeyqzbZNepoRYYDIPWKh2E"
  ),
  TXT(
    "@",
    "google-site-verification=WETSfRG3EQBO5qEqoYSR44ddFko1FK0N2gPZ6oBTqUw"
  ),
  TXT(
    "@",
    "google-site-verification=NcAvCR5iStgrG2K5wshIX3B4NNstPUjZIguj-hHgcmE"
  ),
  TXT(
    "@",
    "keybase-site-verification=eJxka9pBhTcx2J_ahxec12e_FCSJgc0Jfv51zt6cEn8"
  ),
  TXT(
    "@",
    "atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA"
  ),
  TXT("@", "MS=ms62227587"),
  TXT("@", "krh66c6273yfdhsr7061s77pbtfxm0mm")
);
