import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateFastmailRecords } from "../records/mail/fastmail";

const BASE_DOMAIN = "zaharia.email";
console.log(`Zone: ${BASE_DOMAIN}`);

D(
  BASE_DOMAIN,
  NoRegistrar,
  DnsProvider(CloudflareDns),
  /* Service records */
  

  /* Mail records */
  ...CreateFastmailRecords(BASE_DOMAIN),

  /* Domain verification records */
  
);
