import { CfProxyOn, CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { Charlie } from "../services/core";
import { CreateOffice365Records } from "../services/office365";

D('vladzaharia.com', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),
    CNAME('www', Charlie, CfProxyOn),

    /* Office 365 records */
    ... CreateOffice365Records('vladzaharia-com', 'ms36958426'),
    CNAME('selector1._domainkey', 'selector1-vladzaharia-com._domainkey.vladzaharia.onmicrosoft.com.'),
    CNAME('selector2._domainkey', 'selector2-vladzaharia-com._domainkey.vladzaharia.onmicrosoft.com.'),

    /* Verification records */
    TXT('@', 'google-site-verification=O6SHBSQsVM-doi4rNL3r9YSsihG0AGHoy-YVMrJeg0w'),
    TXT('@', 'google-site-verification=w25j9kvxu2-EN8IEnuBcbPzBDa9ayCj24aVr1PUSxaY'),
    TXT('@', 'keybase-site-verification=jgh6s9z8DqOxzqUWr8b4p65ydtn0D7STlWfoKfetsio'),
);