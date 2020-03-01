import { CloudflareDns, CfProxyOn } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { Home, Alpha, Charlie, AzVPN, AzCloudVM, Beta, Parents } from "../services/core";
import { CreateCNAMERecords, CNAMERecord } from "../utils/cname";
import { CreateOffice365Records } from "../services/office365";

const HomeServices: CNAMERecord[] = [
    { name: 'books', proxy: true }, // Calibre
    { name: 'deluge', proxy: true }, // Deluge
    { name: 'home', proxy: true }, 
    { name: 'media' }, // Ombi
    { name: 'radarr', proxy: true }, // Radarr
    { name: 'sabnzbd', proxy: true }, // SabNZBd
    { name: 'sonarr', proxy: true }, // Sonarr
    { name: 'stats', proxy: true }, // Tautulli
];

const DCServices: CNAMERecord[] = [
    { name: 'asset', proxy: true }, // SnipeIt
    { name: 'irc', proxy: true }, // TheLounge
    { name: 'network', proxy: true }, // JIT
];

const CloudVMServices: CNAMERecord[] = [
    { name: 'cloudvm', proxy: true },
    { name: 'cloudvm-int' },
    { name: 'cloudvm-test', proxy: true },
    { name: 'cloudvm-test1', proxy: true },
    { name: 'cloudvm-test2', proxy: true },
];

D('zaharia.io', NoRegistrar, DnsProvider(CloudflareDns),
    /* Infrastructure */
    A('@', '104.37.168.30'),

    /* Internal services */
    CNAME('dc', Alpha), // Azure VPN
    CNAME('parents', Parents),
    CNAME('phonesvc', Beta), // 3CX

    /* Home records */
    ... CreateCNAMERecords(HomeServices, Home),

    /* DC records */
    ... CreateCNAMERecords(DCServices, Charlie),

    /* CloudVM records */
    ... CreateCNAMERecords(CloudVMServices, AzCloudVM),

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