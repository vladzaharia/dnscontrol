import { Record } from "../utils/record";
import { GetHost } from "./core";

/**
 * External (zaharia.io) Azure Services
 */
export const AzureExtServices: Record[] = [
    { name: 'cloudvm', description: "Cloud VM", target: GetHost('Iridium'), proxy: true },
    { name: 'cloudvm-test', target: GetHost('Iridium'), proxy: true },
    { name: 'cloudvm-test1', target: GetHost('Iridium'), proxy: true },
    { name: 'cloudvm-test2', target: GetHost('Iridium'), proxy: true },
];

/**
 * Internal (zhr.one) Azure Services
 */
export const AzureIntServices: Record[] = [
    { name: 'azure', description: "Azure Pritunl VPN", target: GetHost('Lithium') },
    { name: 'cloudvm', description: "Azure Cloud VM", target: GetHost('Iridium') },
    { name: 'stream', description: "Azure Stream", target: GetHost('Manganese') },
];
