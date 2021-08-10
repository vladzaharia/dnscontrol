import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";

console.log('Zone: vlad.gg - New Site');

D('vlad.gg', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CNAME('www', 'vladgg.netlify.app.'),
    A('@', '75.2.60.5'),

    /* HEY for Domains records */
    MX('@', 0, 'work-mx.app.hey.com.'),
    TXT('@', 'v=spf1 include:_spf.hey.com include:spf.protection.outlook.com -all'),
    TXT('_dmarc', 'v=DMARC1; p=none'),
    CNAME('heymail._domainkey', 'heymail._domainkey.hey.com.'),

    /* Domain verification records */
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6'),
    TXT('@', 'verification:RZjHjtRtEzMtsNp12KuUs5GY'),
    TXT('@', 'google-site-verification=KcgCGo0bX44Bv2_u1ylo0QBQJ9yF9SimfZxp7t-RNlk')
);
