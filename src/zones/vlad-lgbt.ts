import { CloudflareDnsWithRedirect } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateRecord } from "../utils/record";
import { GetIP } from "../records/core";
import { CreateFastmailRecords } from "../records/mail/fastmail";

const BASE_DOMAIN = "vlad.lgbt";
console.log(`Zone: ${BASE_DOMAIN} - vlad.gg Redirect`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDnsWithRedirect),
  /* Basic records */
  CreateRecord({ name: "@", type: "A", target: GetIP("Helium"), proxy: true }),
  CreateRecord({
    name: "www",
    type: "A",
    target: GetIP("Helium"),
    proxy: true,
  }),

  /* Redirect all to .gg */
  CF_REDIRECT("*vlad.lgbt/*", "https://vlad.gg/$2"),

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN)

  /* Domain verification records */
);
