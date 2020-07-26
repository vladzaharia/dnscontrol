import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetHost, GetIP } from "../services/core";
import { CreateOffice365Records } from "../services/office365";
import { CreateRecord } from "../utils/record";

console.log('Zone: phs.fyi - Classful (PHS)');

D('phs.fyi', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CreateRecord({ name: '@', type: 'A', target: GetIP('Cobalt'), proxy: true }),
    CreateRecord({ name: 'www', target: GetHost('Cobalt'), proxy: true }),

    /* Office 365 records */
    ... CreateOffice365Records('phs-fyi', 'ms24915862')
);