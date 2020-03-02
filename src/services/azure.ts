// eslint-disable-next-line no-unused-vars
import { Record } from "../utils/records";
import { AzVPN, AzCloudVM } from "./core";

/**
 * External (zaharia.io) Azure Services
 */
export const AzureExtServices: Record[] = [
    { name: 'cloudvm', description: "Cloud VM", target: AzCloudVM, proxy: true },
    { name: 'cloudvm-test', target: AzCloudVM, proxy: true },
    { name: 'cloudvm-test1', target: AzCloudVM, proxy: true },
    { name: 'cloudvm-test2', target: AzCloudVM, proxy: true },
];

/**
 * Internal (zhr.one) Azure Services
 */
export const AzureIntServices: Record[] = [
    { name: 'azure', description: "Azure Pritunl VPN", target: AzVPN },
    { name: 'cloudvm', description: "Azure Cloud VM", target: AzCloudVM },
];
