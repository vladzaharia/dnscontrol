import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetHost, GetCoreRecords } from "../services/core";
import { AzureIntServices } from "../services/azure";
import { WestinIntServices } from "../services/westin";
import { HomeIntServices } from "../services/home";
import { HomeLocalServices, TownhouseLocalServices } from "../services/local";
import { CreateOffice365Records } from "../services/office365";
import { CreateRecords } from "../utils/record";

console.log('Zone: zhr.one - Internal Services');

D('zhr.one', NoRegistrar, DnsProvider(CloudflareDns),
    /* Core records */
    ... CreateRecords('Core', GetCoreRecords()),

    /* Home records */
    ... CreateRecords('Home', HomeIntServices, 'Helium'),
    ... CreateRecords('Home - Local', HomeLocalServices),
    ... CreateRecords('Townhouse - Local', TownhouseLocalServices),

    /* Westin records */
    ... CreateRecords('Westin', WestinIntServices, 'Cobalt'),

    /* Azure records */
    ... CreateRecords('Azure', AzureIntServices),
  
    /* Upptime Status Monitor */
    CNAME('up', 'vladzaharia.github.io.'),

    /* Office 365 records */
    ... CreateOffice365Records('zhr-one', 'ms62227587'),
    MX('*', 0, 'zhr-one.mail.protection.outlook.com.'),
    CNAME('selector1._domainkey', 'selector1-zhr-one._domainkey.vladzaharia.onmicrosoft.com.'),
    CNAME('selector2._domainkey', 'selector2-zhr-one._domainkey.vladzaharia.onmicrosoft.com.'),
  
    /* 3CX SIP records */
    SRV('_sip._tcp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._udp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._tls', 20, 1, 5061, GetHost('Barium')),

    /* Domain verification records */
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA'),
    TXT('@', 'MS=ms10317245'),
  
    /* Digicert verification records */
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6'),
    TXT('*.local', 'z06cmpqcxj900cwnn789jwfz6j3rd8bq'),
    TXT('*.dc.local', 'z06cmpqcxj900cwnn789jwfz6j3rd8bq'),
    TXT('*.esxi.local', 'z06cmpqcxj900cwnn789jwfz6j3rd8bq'),
    TXT('*.rancher.local', 'z06cmpqcxj900cwnn789jwfz6j3rd8bq'),
);
