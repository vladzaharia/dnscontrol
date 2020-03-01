import { CfProxyOn, CloudflareDns } from "../utils/cloudflare";
import { Registrar } from "../utils/providers";
import { CreateOffice365Records } from "../utils/records";

D('phs.fyi', Registrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),
    A('www', '104.37.168.30', CfProxyOn),

    /* Office 365 records */
    ... CreateOffice365Records('phs-fyi', 'ms24915862')
);