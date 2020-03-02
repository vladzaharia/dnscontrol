import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { Charlie } from "../services/core";
import { CreateOffice365Records } from "../services/office365";
import { CreateRecord } from "../utils/records";

console.log('Zone: phs.fyi - Classful (PHS)');

D('phs.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CreateRecord({ name: '@', type: 'A', target: '104.37.168.30', proxy: true }),
    CreateRecord({ name: 'www', target: Charlie, proxy: true }),

    /* Office 365 records */
    ... CreateOffice365Records('phs-fyi', 'ms24915862')
);