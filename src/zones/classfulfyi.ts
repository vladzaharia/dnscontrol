import { Registrar, CloudflareDns } from "../utils/providers";
import { CFProxyOn } from "../utils/cloudflare";
import { GetOffice365Records } from "../utils/office365";

D('classful.fyi', Registrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CFProxyOn),
    A('www', '104.37.168.30', CFProxyOn),
    A('*', '104.37.168.30'),

    /* Classful instance records */
    A('bh', '104.37.168.30', CFProxyOn),
    A('dev', '104.37.168.30', CFProxyOn),

    /* Office 365 records */
    ... GetOffice365Records('classful-fyi', 'ms37503503')
);