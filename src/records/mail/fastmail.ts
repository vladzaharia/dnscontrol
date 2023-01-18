import { DNSControlRecord } from "../../utils/record";

/**
 * Creates records for Hey for Domains.
 * @param mxDomain Beginning part of MX domain
 * @param dnsValidatorId MS= validation ID
 */
export function CreateFastmailRecords(domain: string): DNSControlRecord[] {
  return [
    CNAME("mail", "mail.fastmail.com."),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in2-smtp.messagingengine.com."),
    MX("*", 10, "in1-smtp.messagingengine.com."),
    MX("*", 20, "in2-smtp.messagingengine.com."),
    TXT(
      "@",
      "v=spf1 include:spf.messagingengine.com ?all"
    ),
    TXT("_dmarc", "v=DMARC1; p=none"),
    CNAME("fm1._domainkey", `fm1.${domain}.dkim.fmhosted.com.`),
    CNAME("fm2._domainkey", `fm2.${domain}.dkim.fmhosted.com.`),
    CNAME("fm3._domainkey", `fm3.${domain}.dkim.fmhosted.com.`),
  ];
}
