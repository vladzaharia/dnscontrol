import { CloudflareDns } from '../providers/cloudflare';
import { NoRegistrar } from '../providers/noregistrar';
import { Cobalt } from '../services/core';
import { CreateOffice365Records } from '../services/office365';
// eslint-disable-next-line no-unused-vars
import { CreateRecords, Record, CreateRecord } from '../utils/records';

const ClassfulInstances: Record[] = [
    { name: 'www', proxy: true },
    { name: 'bh', proxy: true },
    { name: 'dev', proxy: true },
];

console.log('Zone: classful.fyi - Classful (non-PHS)');

D('classful.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CreateRecord({ name: '@', type: 'A', target: '104.37.168.30', proxy: true }),    

    /* Classful instances */
    ...CreateRecords('Classful instances', ClassfulInstances, Cobalt),

    /* Office 365 records */
    ...CreateOffice365Records('classful-fyi', 'ms37503503')
);