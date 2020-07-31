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

    /* Azure North American Edges */
    {
        name: "Azure Canada Central",
        suffix: "azcac",
        target: "52.138.25.11",
        type: "A"
    },
    {
        name: "Azure Central US",
        suffix: "azcus",
        target: "13.89.243.170",
        type: "A"
    },
    {
        name: "Azure East US",
        suffix: "azeus",
        target: "52.149.212.26",
        type: "A"
    },
    {
        name: "Azure South Central US",
        suffix: "azscus",
        target: "13.84.47.166",
        type: "A"
    },
    {
        name: "Azure West US",
        suffix: "azwus",
        target: "104.42.180.158",
        type: "A"
    },

    /* Azure Europe Edges */
    {
        name: "Azure North Europe",
        suffix: "azneu",
        target: "23.101.49.82",
        type: "A"
    },
    {
        name: "Azure West Europe",
        suffix: "azweu",
        target: "104.45.26.59",
        type: "A"
    },

    /* Azure Asia Edge */
    {
        name: "Azure Japan East",
        suffix: "azjpe",
        target: "52.185.133.249",
        type: "A"
    },
    {
        name: "Azure Southeast Asia",
        suffix: "azseasia",
        target: "13.76.152.37",
        type: "A"
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
    { name: 'svc', description: "GGStream Service - Routed", target: 'ggstream-svc.trafficmanager.net.' },
    { name: 'ingest', description: "GGStream Ingest - Routed", target: 'ggstream-ingest.trafficmanager.net.' },

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
