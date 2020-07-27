import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { AzureExtServices } from "../services/azure";
import { WestinExtServices } from "../services/westin";
import { HomeExtServices } from "../services/home";
import { CreateOffice365Records } from "../services/office365";
import { CreateRecords, CreateRecord } from "../utils/record";
import { GetIP } from "../services/core";

console.log('Zone: zaharia.io - External Services');

D('zaharia.io', NoRegistrar, DnsProvider(CloudflareDns),
    /* Infrastructure */
    CreateRecord({ name: '@', type: 'A', target: GetIP('Cobalt') }),

    /* Home records */
    ... CreateRecords('Home', HomeExtServices, 'Helium'),

    /* Westin records */
    ... CreateRecords('Westin', WestinExtServices, 'Cobalt'),

    /* Azure records */
    ... CreateRecords('Azure', AzureExtServices),

    /* Office 365 records */
    ... CreateOffice365Records('zaharia-io', 'ms62227587'),
    MX('*', 0, 'zaharia-io.mail.protection.outlook.com.'),
    CNAME('selector1._domainkey', 'selector1-zaharia-io._domainkey.vladzaharia.onmicrosoft.com.'),
    CNAME('selector2._domainkey', 'selector2-zaharia-io._domainkey.vladzaharia.onmicrosoft.com.'),

    /* Verification records */
    TXT('@', 'google-site-verification=zEcBVYIqvFVmJI5LzySY0MeyqzbZNepoRYYDIPWKh2E'),
    TXT('@', 'google-site-verification=WETSfRG3EQBO5qEqoYSR44ddFko1FK0N2gPZ6oBTqUw'),
    TXT('@', 'google-site-verification=NcAvCR5iStgrG2K5wshIX3B4NNstPUjZIguj-hHgcmE'),
    TXT('@', 'keybase-site-verification=eJxka9pBhTcx2J_ahxec12e_FCSJgc0Jfv51zt6cEn8'),
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA'),
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6')
);