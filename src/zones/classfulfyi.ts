import { CfProxyOn, CloudflareDns } from "../utils/cloudflare";
import { Registrar } from "../utils/providers";
import { CreateOffice365Records, CreateCNAMERecords } from "../utils/records";
import { Charlie } from "../utils/core";

const ClassfulInstances = [
    'www',
    'bh',
    'dev'
];

D('classful.fyi', Registrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),

    /* Classful instances */
    ... CreateCNAMERecords(ClassfulInstances, Charlie, CfProxyOn),

    /* Office 365 records */
    ... CreateOffice365Records('classful-fyi', 'ms37503503')
);