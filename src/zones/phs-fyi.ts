import { CfProxyOn, CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { Charlie } from "../services/core";
import { CreateOffice365Records } from "../services/office365";

console.log('Zone: phs.fyi - Classful (PHS)');

D('phs.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),
    CNAME('www', Charlie, CfProxyOn),

    /* Office 365 records */
    ... CreateOffice365Records('phs-fyi', 'ms24915862')
);