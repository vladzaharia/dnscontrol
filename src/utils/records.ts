import { CfProxyOn, CfSSLOn } from "../providers/cloudflare";

/**
 * Creates CNAME or A records for all subdomains towards one destination.
 * @param records All subdomains to create records for.
 * @param target fqdn for CNAME or IP address for A
 * @param cfSettings Cloudflare settings to apply to all records
 */
export function CreateRecords(groupName: string, records: Record[], target?: string) {
    console.log(`\nGroup: ${groupName}`);

    return records.map((record: Record) => {
        if (record.type === 'A') {
            return CreateRecord(A, record, target);
        }
        return CreateRecord(CNAME, record, target)
    });
}

function CreateRecord(type: (name: string, target?: string, ... modifiers: any[]) => any, record: Record, target: string) {
    const finalTarget = record.target || target;

    console.log(`  ${record.description || 'Service'}: ${record.name} -> ${finalTarget}`);

    if (record.proxy) {
        if (record.ssl) {
            return type(record.name, finalTarget, CfProxyOn, CfSSLOn);
        }
        
        return type(record.name, finalTarget, CfProxyOn);
    }

    return type(record.name, finalTarget);
}

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