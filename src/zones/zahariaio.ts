import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { AzureExtServices } from "../services/azure";
import { Home, Charlie, AzCloudVM, Parents } from "../services/core";
import { DCExtServices } from "../services/dc";
import { HomeExtServices } from "../services/home";
import { CreateOffice365Records } from "../services/office365";
import { CreateCNAMERecords } from "../utils/cname";

D('zaharia.io', NoRegistrar, DnsProvider(CloudflareDns),
    /* Infrastructure */
    A('@', '104.37.168.30'),

    /* Internal services */
    CNAME('parents', Parents),

    /* Home records */
    ... CreateCNAMERecords(HomeExtServices, Home),

    /* DC records */
    ... CreateCNAMERecords(DCExtServices, Charlie),

    /* Azure records */
    ... CreateCNAMERecords(AzureExtServices, AzCloudVM),

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
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA')
);