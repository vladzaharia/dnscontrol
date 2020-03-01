// Version 1
// https://stackexchange.github.io/dnscontrol/js
type Ttl = string | number;

// Top Level Functions
declare function REV(address: string): string;
declare function NewRegistrar(name: string, type: string, meta?: any): string;
declare function NewDnsProvider(name: string, type: string, meta?: any): string;
declare function DEFAULTS(...modifiers: any[]): void;
declare function D(name: string, registrar: string, ...meta: any[]): void;

// Domain Modifiers
declare function A(name: string, address: string, ...modifiers: any[]);
declare function AAAA(name: string, address: string, ...modifiers: any[]);
declare function ALIAS(name: string, target: string, ...modifiers: any[]);
declare function CAA(name: string, tag: string, value: string, ...modifiers: any[]);
declare function CNAME(name: string, target: string, ...modifiers: any[]);
declare function DefaultTTL(ttl: Ttl);
declare function DnsProvider(name: string, nsCount?: number);
declare function MX(name: string, priority: number, target: string, ...modifiers: any[]);
declare function NAMESERVER(name: string, ip?: string, ...modifiers: any[]);
declare function NO_PURGE();
declare function NS(name: string, target: string, ...modifiers: any[]);
declare function PTR(name: string, target: string, ...modifiers: any[]);
declare function NO_PURGE();
declare function TLSA(name: string, usage: number, selector: number, type: number, certificate: string, ...modifiers: any[]);
declare function TXT(name: string, contents: string, ...modifiers: any[]);

declare function SRV(name: string, priority: number, weight: number, port: number, target: string, ...modifiers: any[]);

// Record Modifiers
declare function TTL(ttl: Ttl);