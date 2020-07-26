import { Record } from "../utils/records";
import { Lithium, Iridium, Manganese } from "./core";

/**
 * External (zaharia.io) Azure Services
 */
export const AzureExtServices: Record[] = [
    { name: 'cloudvm', description: "Cloud VM", target: Iridium, proxy: true },
    { name: 'cloudvm-test', target: Iridium, proxy: true },
    { name: 'cloudvm-test1', target: Iridium, proxy: true },
    { name: 'cloudvm-test2', target: Iridium, proxy: true },
];

/**
 * Internal (zhr.one) Azure Services
 */
export const AzureIntServices: Record[] = [
    { name: 'azure', description: "Azure Pritunl VPN", target: Lithium },
    { name: 'cloudvm', description: "Azure Cloud VM", target: Iridium },
    { name: 'stream', description: "Azure Stream", target: Manganese },
];
