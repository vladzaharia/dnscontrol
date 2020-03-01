import { CreateCoreRecords, Home, Alpha, Charlie, AzVPN, AzCloudVM, Beta, Delta } from "../utils/core";
import { Registrar } from "../utils/providers";
import { CloudflareDns } from "../utils/cloudflare";
import { CreateCNAMERecords } from "../utils/records";

const HomeServices = [
    /* Infrastructure */
    'traefik-home', // Traefik
    'portainer-home', // Portainer
    'home', // Home VPN

    /* Internal Services */
    'f', // OpenFaaS
    'ping', // Statping
    'rd', // Guacamole

    /* Experimental Services */
    'crowd', // Atlassian Crowd
    'jira', // Atlassian JIRA
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

D('zhr.one', Registrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('mail', '104.37.168.31'),
    MX('@', 0, Delta),

    /* Infrastructure services */
    A('proxmox-home', '10.0.11.200'),
    CNAME('proxmox-dc', Alpha),

    /* Internal services */
    CNAME('azure', AzVPN),
    CNAME('cloudvm', AzCloudVM), // VS Code
    CNAME('phone', Beta), // 3CX   

    /* Home records */
    ... CreateCNAMERecords(HomeServices, Home),

    /* DC records */
    ... CreateCNAMERecords(DCServices, Charlie),

    /* Core records */
    ... CreateCoreRecords(),

    /* Mailcow records */
    CNAME('autoconfig', Delta),
    CNAME('autodiscover', Delta),
    SRV('_autodiscover._tcp', 0, 0, 443, Delta),
    TLSA('_25._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_110._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_143._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_443._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_465._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_587._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_993._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_995._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TLSA('_4190._tcp', 3, 1, 1, '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e'),
    TXT('dkim._domainkey', 'v=DKIM1;k=rsa;t=s;s=email;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3KKCI2KaivFx2cfuQB/VVlY5Cfkxtsi5BtevOmnBRmWXvqTS1nqWCAPqPQs3AsPl3QON/VjInB3vw/unAjoxKQfQU19Fo4mm3FXvTCKTZTpmfBQomdn/lLdkKC+sRqndnvAfrA6VgK9MUaHSCZ6W/bVMkSllPiusW0YEox+xY5jFU8fuIdaq13RJ24EYRUp56MebI8TSAuGhgaZpHxw9OsON4X4IcOKypXQoFNZsuLBlA/6+lYygUeUoKad80duoEvAUbLi6kigGbAGsWOvJfkS3DzksPmHuBZN6rLpXyPBc3PR9iezd0hltRNjlwCIiykXWNbXD1QTHH+c6qULPsQIDAQAB'),
    // TXT('_dmarc', 'v=DMARC1; p=reject; rua=mailto:postmaster@zhr.one'),
    TXT('@', 'v=spf1 mx ~all'),

    /* Domain verification records */
    TXT('@', 'atlassian-domain-verification=aWQoyeXxK5bbFI7GUl4ALmaSziAqbOMMXdNQeMtbaGzE3ALZgXNGtF885NpV6IxA'),
    TXT('@', 'MS=ms10317245')
);