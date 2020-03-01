import { CfProxyOff } from "../providers/cloudflare";

/**
 * Creates CNAME records for all subdomains towards one destination.
 * @param records All subdomains to create records for.
 * @param target CNAME target
 * @param cfSettings Cloudflare settings to apply to all records
 */
export function CreateCNAMERecords(records: string[], target: string, cfSettings: any = CfProxyOff) {
    return records.map((record: string) => {
        return CNAME(record, target, cfSettings);
    });
}