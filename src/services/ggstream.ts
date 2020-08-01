import { Record, RecordType } from "../utils/record";
import { GetHost, GetIP } from "./core";
import { ElementNames } from "../utils/server";

/**
 * UI Host
 */
const UIServer: ElementNames = 'Cobalt';
const UIHost = GetHost(UIServer);
const UIIP = GetIP(UIServer);

/**
 * Service Instances
 */
const SvcInstances: GGStreamInstance[] = [
    {
        name: "Seattle Origin",
        suffix: "sea",
        target: GetHost('Neon')
    },
];

function GetRecords(): Record[] {
    return SvcInstances.map((instance) => {
        return {
            name: `svc-${instance.suffix}`,
            description: `GGStream Service - ${instance.name}`,
            target: instance.target,
            type: instance.type
        };
    });
}

/**
 * External (zaharia.io) Azure Services
 */
export const GGStreamServices: Record[] = [
    { name: '@', description: "GGStream Root", target: UIIP, type: 'A', proxy: true },
    { name: 'www', description: "GGStream www", target: UIHost, proxy: true },
    ... GetRecords(),
];

/**
 * GGStream Site Extension
 */
export const GGStreamSiteExtServices: Record[] = [
    { name: 'stream', description: "GGStream - Personal", target: UIHost, proxy: true }
];

interface GGStreamInstance {
    /**
     * Display name of instance
     */
    name: string;

    /** 
     * Suffix of instance, used for svc-<suffix>.ggstream.app
     */
    suffix: string;

    /**
     * Target of instance
     */
    target: string;

    /**
     * Type of record
     */
    type?: RecordType;
}
