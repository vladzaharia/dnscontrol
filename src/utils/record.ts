import { CfProxyOn, CfSSLOn } from "../providers/cloudflare";
import { AdditionalNames, ElementNames } from "./server";
import { GetHost } from "../services/core";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DNSControlRecord = (name: string, target?: string, ... modifiers: any[]) => any;

export type RecordType = 'CNAME' | 'A';

export interface Record {
    /**
     * Subdomain of record.
     */
    name: string;

    /**
     * Description of service running on record.
     */
    description?: string;

    /**
     * Type of record.
     * Default: cname
     */
    type?: RecordType;

    /**
     * Override target for this record.
     */
    target?: string;

    /**
     * Enable Cloudflare proxy.
     * Default: false
     */
    proxy?: boolean;

    /**
     * Enable Universal SSL when proxy is enabled.
     * Default: true
     */
    ssl?: boolean;
}

export function CreateRecord(record: Record, targetName?: ElementNames | AdditionalNames): DNSControlRecord {
    const finalTarget = record.target || GetHost(targetName);

    console.log(`  ${record.description || 'Service'}: ${record.name} -> ${finalTarget}`);

    // Determine record type
    let type: DNSControlRecord = CNAME;

    if (record.type === 'A') {
        type = A;
    }

    // Add proxy/ssl tags
    if (record.proxy) {
        if (record.ssl) {
            return type(record.name, finalTarget, CfProxyOn, CfSSLOn);
        }
        
        return type(record.name, finalTarget, CfProxyOn);
    }

    return type(record.name, finalTarget);
}

/**
 * Creates CNAME or A records for all subdomains towards one destination.
 * @param records All subdomains to create records for.
 * @param target fqdn for CNAME or IP address for A
 * @param cfSettings Cloudflare settings to apply to all records
 */
export function CreateRecords(groupName: string, records: Record[], target?: ElementNames | AdditionalNames): DNSControlRecord[] {
    console.log(`\nGroup: ${groupName}`);

    return records.map((record: Record) => {
        return CreateRecord(record, target);
    });
}
