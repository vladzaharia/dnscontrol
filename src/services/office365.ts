/**
 * Creates records for Office365, including Exchange/Teams/Intune.
 * @param mxDomain Beginning part of MX domain
 * @param dnsValidatorId MS= validation ID
 */
export function CreateOffice365Records(mxDomain: string, dnsValidatorId: string) {
    return [
        MX('@', 0, `${mxDomain}.mail.protection.outlook.com.`),
        CNAME('autodiscover', 'autodiscover.outlook.com.'),
        CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.'),
        CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.'),
        CNAME('lyncdiscover', 'webdir.online.lync.com.'),
        CNAME('sip', 'sipdir.online.lync.com.'),
        SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.'),
        SRV('_sip._tls', 100, 1, 443, 'sipdir.online.lync.com.'),
        TXT('@', `MS=${dnsValidatorId}`),
        TXT('@', 'v=spf1 include:spf.protection.outlook.com -all')
    ];
}