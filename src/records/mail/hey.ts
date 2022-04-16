import { DNSControlRecord } from "../../utils/record";

/**
 * Creates records for Hey for Domains.
 * @param mxDomain Beginning part of MX domain
 * @param dnsValidatorId MS= validation ID
 */
export function CreateHeyForDomainsRecords(): DNSControlRecord[] {
  return [
    MX("@", 0, "work-mx.app.hey.com."),
    TXT(
      "@",
      "v=spf1 include:_spf.hey.com include:spf.protection.outlook.com -all"
    ),
    TXT("_dmarc", "v=DMARC1; p=none"),
    CNAME("heymail._domainkey", "heymail._domainkey.hey.com."),
  ];
}
