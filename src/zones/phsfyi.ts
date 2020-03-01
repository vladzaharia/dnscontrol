import { CfProxyOn, CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateOffice365Records } from "../services/office365";

D('phs.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),
    A('www', '104.37.168.30', CfProxyOn),

    /* Office 365 records */
    ... CreateOffice365Records('phs-fyi', 'ms24915862')
);