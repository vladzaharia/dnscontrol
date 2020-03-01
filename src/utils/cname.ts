import { CfProxyOn, CfSSLOn } from "../providers/cloudflare";

/**
 * Creates CNAME records for all subdomains towards one destination.
 * @param records All subdomains to create records for.
 * @param target CNAME target
 * @param cfSettings Cloudflare settings to apply to all records
 */
export function CreateCNAMERecords(records: CNAMERecord[], target: string) {
    return records.map((record: CNAMERecord) => {
        const finalTarget = record.target || target;

        if (record.proxy) {
            if (record.ssl) {
                return CNAME(record.name, finalTarget, CfProxyOn, CfSSLOn);
            }
            
            return CNAME(record.name, finalTarget, CfProxyOn);
        }

        return CNAME(record.name, finalTarget);
    });
}

export interface CNAMERecord {
    /**
     * Subdomain of record.
     */
    name: string;

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