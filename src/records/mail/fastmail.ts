import { DNSControlRecord } from "../../utils/record";

/**
 * Creates records for Hey for Domains.
 * @param mxDomain Beginning part of MX domain
 * @param dnsValidatorId MS= validation ID
 */
export function CreateFastmailRecords(domain: string): DNSControlRecord[] {
  const isRoot = domain.split(".").length === 2;
  const mailRecord = isRoot ? "mail" : `mail.$[domain}`;
  const rootRecord = isRoot ? "@" : domain;
  const wildcardRecord = isRoot ? "*" : `*.${domain}`;
  const domainKeyRecord = isRoot ? "" : `.${domain}`;
  
  return [
    CNAME(mailRecord, "mail.fastmail.com."),
    MX(rootRecord, 10, "in1-smtp.messagingengine.com."),
    MX(rootRecord, 20, "in2-smtp.messagingengine.com."),
    MX(wildcardRecord, 10, "in1-smtp.messagingengine.com."),
    MX(wildcardRecord, 20, "in2-smtp.messagingengine.com."),
    TXT(
      rootRecord,
      "v=spf1 include:spf.messagingengine.com ?all"
    ),
    TXT("_dmarc", "v=DMARC1; p=none"),
    CNAME(`fm1._domainkey${domainKeyRecord}`, `fm1.${domain}.dkim.fmhosted.com.`),
    CNAME(`fm2._domainkey${domainKeyRecord}`, `fm2.${domain}.dkim.fmhosted.com.`),
    CNAME(`fm3._domainkey${domainKeyRecord}`, `fm3.${domain}.dkim.fmhosted.com.`),
  ];
}
