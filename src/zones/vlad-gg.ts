import { CloudflareDns, CfProxyOn } from "../providers/cloudflare";
import { NoRegistrar } from "../providers/noregistrar";
import { GetHost, GetIP } from "../services/core";
import { CreateMailcowRecords } from "../services/mailcow";

console.log('Zone: vlad.gg - New Site');

D('vlad.gg', NoRegistrar, DnsProvider(CloudflareDns),
    /* Basic records */
    A('@', GetIP('Cobalt'), CfProxyOn),
    CNAME('www', GetHost('Cobalt'), CfProxyOn),
    CNAME('stream', GetHost('Manganese')),

    /* Mailcow records */
    ... CreateMailcowRecords(GetHost('Gallium'), 
        '50851205087c610c5172c9a2934e86adacb1fb1e86d9160e212524af51e4cb6e', 
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3TGf0h/Wp/d9Pb6wDH0OdIPSLc7iJVHHQq1oNQ4k3hCX5ntUQ/R33kt9ZQ2kQqmsY+L37WzeIECJfsxeGl2uu//S3V9fugAvj6cHuubhQtcQ8Vwck8V2PsLEUZxFB6eXx9o7AITd+uEL0SmDZ2I4HZm5vhtEZFLL51XY4W1i2mAuACu2QEQFp2f2/bwCJQI0ZRyOS9q6Y5jyVAYsUtg1nDFD5Yz+gVhgXhpJbO2id0sY1pq9wwlQI7Yctbw2zhQvZRurk0Xg3Lz2o+w/s5TM7WBmCJIM/C9lTpgVblfQ3p47YX4gOhlGIYQ3lBkEawI00yZjpVcWomVSHYY13wUs0QIDAQAB'),

    /* 3CX SIP records */
    SRV('_sip._tcp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._udp', 20, 1, 5060, GetHost('Barium')),
    SRV('_sip._tls', 20, 1, 5061, GetHost('Barium')),

    /* Domain verification records */
    TXT('@', 'ybqnhr2z5gddd1kxbgdv6873s7ng47v6')
);