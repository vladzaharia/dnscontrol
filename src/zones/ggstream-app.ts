import { CloudflareDns } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetHost } from "../services/core";
import { CreateMailcowRecords } from "../services/mailcow";
import { CreateRecords } from "../utils/record";
import { GGStreamServices } from "../services/ggstream";

console.log('Zone: ggstream.app - GGStream');

D('ggstream.app', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    CreateRecords('ggstream.app', GGStreamServices),

    /* Mailcow records */
    ... CreateMailcowRecords(GetHost('Gallium'), 
        '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e', 
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4aQU8ehwM/0DqFg9yhux7ElLbh9D/XPbuj0sinnQ/D5Z/fX86V1cdyL0WjaYQcjJP6WLhdvBtoQxwU/lrV+wXCQsrf6McpSBJWBm1xgEorkdmNd0CE6xgSZqVsQtIpGWGaluy1yT20WptwxpHFJ6WR0SPGdmeHXGr2+RJkRT2OZNbw9p796my++8vOjbr6QsrsaxRNdpNG51Y2r1WpPfrBu2jh0/R+kwwsJo7rN+ZHAefFIMRBb+M7Ydy0OsbXqJLXtWTKg31q3rK7qURKohI00SR0/JvOW2AqKDzz6P4E7OZqaj65Etq1caR+6y4RPp8TBFBtRYMmEGMaMFue/0dQIDAQAB'),

    /* 3CX SIP records */
    SRV('_sip._tcp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._udp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._tls', 20, 1, 5061, GetHost('Barium')),

    /* Domain verification records */
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6')
);