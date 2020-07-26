import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { Helium, Cobalt, Gallium, CoreServices, Barium } from "../services/core";
import { AzureIntServices } from "../services/azure";
import { DCIntServices } from "../services/dc";
import { HomeIntServices, HomeLocalServices } from "../services/home";
import { CreateMailcowRecords } from "../services/mailcow";
import { CreateRecords } from "../utils/records";

console.log('Zone: zhr.one - Internal Services');

D('zhr.one', NoRegistrar, DnsProvider(CloudflareDns),
    /* Core records */
    ... CreateRecords('Core', CoreServices),

    /* Home records */
    ... CreateRecords('Home', HomeIntServices, Helium),
    ... CreateRecords('Home - Local', HomeLocalServices),

    /* Westin records */
    ... CreateRecords('Westin', DCIntServices, Cobalt),

    /* Azure records */
    ... CreateRecords('Azure', AzureIntServices),

    /* Mailcow records */
    ... CreateMailcowRecords(Gallium, 
        '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e', 
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3KKCI2KaivFx2cfuQB/VVlY5Cfkxtsi5BtevOmnBRmWXvqTS1nqWCAPqPQs3AsPl3QON/VjInB3vw/unAjoxKQfQU19Fo4mm3FXvTCKTZTpmfBQomdn/lLdkKC+sRqndnvAfrA6VgK9MUaHSCZ6W/bVMkSllPiusW0YEox+xY5jFU8fuIdaq13RJ24EYRUp56MebI8TSAuGhgaZpHxw9OsON4X4IcOKypXQoFNZsuLBlA/6+lYygUeUoKad80duoEvAUbLi6kigGbAGsWOvJfkS3DzksPmHuBZN6rLpXyPBc3PR9iezd0hltRNjlwCIiykXWNbXD1QTHH+c6qULPsQIDAQAB'),

    /* 3CX SIP records */
    SRV('_sip._tcp', 20, 1, 5060, Barium),
    SRV('_sip._udp', 20, 1, 5060, Barium),
    SRV('_sip._tls', 20, 1, 5061, Barium),

    /* Domain verification records */
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA'),
    TXT('@', 'MS=ms10317245'),
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6')
);