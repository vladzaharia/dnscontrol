import { CreateCoreRecords, Home, Alpha, Charlie, AzVPN, AzCloudVM, Beta, Delta } from "../utils/core";
import { CloudflareDns } from "../providers/cloudflare";
import { CreateCNAMERecords } from "../utils/records";
import { NoRegistrar } from "../providers/noregistrar";
import { CreateMailcowRecords } from "../services/mailcow";

const HomeServices = [
    /* Infrastructure */
    'traefik-home', // Traefik
    'portainer-home', // Portainer

    /* Internal Services */
    'f', // OpenFaaS
    'home', // Home VPN
    'ping', // Statping
    'rd', // Guacamole

    /* Experimental Services */
    'crowd', // Atlassian Crowd (2/29)
    'jira', // Atlassian JIRA (2/29)
];

const DCServices = [
    /* Infrastructure */
    'traefik-dc', // Traefik
    'portainer-dc', // Portainer

    /* Internal Services */
    'dash', // Heimdall

    /* Warmitup Services */
    'chat', // Mattermost
    'mrmr', // Mumble
]

D('zhr.one', NoRegistrar, DnsProvider(CloudflareDns),
    /* Infrastructure */
    A('proxmox-home', '10.0.11.200'),
    CNAME('proxmox-dc', Alpha),

    /* Internal services */
    CNAME('azure', AzVPN), // Azure VPN
    CNAME('cloudvm', AzCloudVM), // VS Code
    CNAME('phone', Beta), // 3CX   

    /* Home records */
    ... CreateCNAMERecords(HomeServices, Home),

    /* DC records */
    ... CreateCNAMERecords(DCServices, Charlie),

    /* Core records */
    ... CreateCoreRecords(),

    /* Mailcow records */
    ... CreateMailcowRecords(Delta, 
        '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e', 
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3KKCI2KaivFx2cfuQB/VVlY5Cfkxtsi5BtevOmnBRmWXvqTS1nqWCAPqPQs3AsPl3QON/VjInB3vw/unAjoxKQfQU19Fo4mm3FXvTCKTZTpmfBQomdn/lLdkKC+sRqndnvAfrA6VgK9MUaHSCZ6W/bVMkSllPiusW0YEox+xY5jFU8fuIdaq13RJ24EYRUp56MebI8TSAuGhgaZpHxw9OsON4X4IcOKypXQoFNZsuLBlA/6+lYygUeUoKad80duoEvAUbLi6kigGbAGsWOvJfkS3DzksPmHuBZN6rLpXyPBc3PR9iezd0hltRNjlwCIiykXWNbXD1QTHH+c6qULPsQIDAQAB'),

    /* Domain verification records */
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA'),
    TXT('@', 'MS=ms10317245')
);