/**
 * Creates records for Office365, including Exchange/Teams/Intune.
 * @param mxDomain Beginning part of MX domain
 * @param dnsValidatorId MS= validation ID
 */
export function CreateMailcowRecords(target: string, certificate: string, dkimKey: string) {
    return [
        MX('@', 0, target),
        CNAME('mail', target),
        CNAME('autoconfig', target),
        CNAME('autodiscover', target),
        SRV('_autodiscover._tcp.mail', 0, 0, 443, target),
        TLSA('_25._tcp.mail', 3, 1, 1, certificate),
        TLSA('_110._tcp.mail', 3, 1, 1, certificate),
        TLSA('_143._tcp.mail', 3, 1, 1, certificate),
        TLSA('_443._tcp.mail', 3, 1, 1, certificate),
        TLSA('_465._tcp.mail', 3, 1, 1, certificate),
        TLSA('_587._tcp.mail', 3, 1, 1, certificate),
        TLSA('_993._tcp.mail', 3, 1, 1, certificate),
        TLSA('_995._tcp.mail', 3, 1, 1, certificate),
        TLSA('_4190._tcp.mail', 3, 1, 1, certificate),
        TXT('dkim._domainkey', `v=DKIM1;k=rsa;t=s;s=email;p=${dkimKey}`),
        // TXT('_dmarc', 'v=DMARC1; p=reject; rua=mailto:postmaster@zhr.one'),
        TXT('@', 'v=spf1 mx ~all'),
    ];
}