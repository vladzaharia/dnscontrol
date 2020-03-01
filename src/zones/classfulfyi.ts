import { CfProxyOn, CloudflareDns } from '../providers/cloudflare';
import { NoRegistrar } from '../providers/noregistrar';
import { Charlie } from '../services/core';
import { CreateOffice365Records } from '../services/office365';
import { CreateCNAMERecords } from '../utils/records';

const ClassfulInstances = [
    'www',
    'bh',
    'dev'
];

D('classful.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', '104.37.168.30', CfProxyOn),

    /* Classful instances */
    ...CreateCNAMERecords(ClassfulInstances, Charlie, CfProxyOn),

    /* Office 365 records */
    ...CreateOffice365Records('classful-fyi', 'ms37503503')
);