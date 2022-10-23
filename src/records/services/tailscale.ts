import { Record } from "../../utils/record";

export const TailscaleRecords: Record[] = [
  { name: "core.ts", description: "Core Services VM", target: "100.73.253.83" },
  {
    name: "core.ts",
    description: "Core Services VM IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:6249:fd53",
    type: "AAAA",
  },

  { name: "hoobs.ts", description: "HOOBS VM", target: "100.81.227.88" },
  {
    name: "hoobs.ts",
    description: "HOOBS VM IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:6251:e358",
    type: "AAAA",
  },

  { name: "truenas.ts", description: "TrueNAS", target: "100.96.145.44" },
  {
    name: "truenas.ts",
    description: "TrueNAS IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:6260:912c",
    type: "AAAA",
  },

  { name: "xui.ts", description: "XUI VM", target: "100.84.40.115" },
  {
    name: "xui.ts",
    description: "XUI VM IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:6254:2873",
    type: "AAAA",
  },
];
