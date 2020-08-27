import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateOffice365Records } from "../services/office365";
import { CreateRecords } from "../utils/record";
import { WestinSiteServices } from "../services/westin";
import { GGStreamSiteExtServices } from "../services/ggstream";

console.log('Zone: vlad.gg - New Site');

D('vlad.gg', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CreateRecords('vlad.gg', WestinSiteServices, 'Cobalt'),

    ... CreateRecords('vlad.gg - GGStream', GGStreamSiteExtServices),

    /* Office 365 records */
    ... CreateOffice365Records('vlad-gg', 'ms43185050'),
    MX('*', 0, 'vlad-gg.mail.protection.outlook.com.'),
    CNAME('selector1._domainkey', 'selector1-vlad-gg._domainkey.vladzaharia.onmicrosoft.com.'),
    CNAME('selector2._domainkey', 'selector2-vlad-gg._domainkey.vladzaharia.onmicrosoft.com.'),

    /* Domain verification records */
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6')
);
