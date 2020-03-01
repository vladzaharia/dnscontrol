import { CNAMERecord } from "../utils/cname";

export const CloudVMServices: CNAMERecord[] = [
    { name: 'cloudvm', proxy: true },
    { name: 'cloudvm-int' },
    { name: 'cloudvm-test', proxy: true },
    { name: 'cloudvm-test1', proxy: true },
    { name: 'cloudvm-test2', proxy: true },
];
