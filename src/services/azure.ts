import { CNAMERecord } from "../utils/cname";
import { AzVPN } from "./core";

/**
 * External (zaharia.io) Azure Services
 */
export const AzureExtServices: CNAMERecord[] = [
    { name: 'cloudvm', proxy: true },
    { name: 'cloudvm-test', proxy: true },
    { name: 'cloudvm-test1', proxy: true },
    { name: 'cloudvm-test2', proxy: true },
];

/**
 * Internal (zhr.one) Azure Services
 */
export const AzureIntServices: CNAMERecord[] = [
    { name: 'azure', target: AzVPN },
    { name: 'cloudvm' },
];
