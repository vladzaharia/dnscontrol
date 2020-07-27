import { Record } from "../utils/record";
import { GetHost, GetIP } from "./core";
import { ElementNames } from "../utils/server";

/**
 * Current GGStream Instance
 */
const GGStream: ElementNames = 'Manganese';
const GGStreamHost = GetHost(GGStream);
const GGStreamIP = GetIP(GGStream);

/**
 * External (zaharia.io) Azure Services
 */
export const GGStreamServices: Record[] = [
    { name: '@', description: "GGStream Root", target: GGStreamIP, type: 'A', proxy: true },
    { name: 'www', description: "GGStream www", target: GGStreamHost, proxy: true },
    { name: 'svc', description: "GGStream Service", target: GGStreamHost },
    { name: 'svc-azure', description: "GGStream Service - Azure", target: GetHost('Manganese') },
];

/**
 * GGStream Site Extension
 */
export const GGStreamSiteExtServices: Record[] = [
    { name: 'stream', description: "GGStream - Site", target: GGStreamHost, proxy: true }
];
