import { Record } from "../../utils/record";

export const TailscaleRecords: Record[] = [
  {
    name: "truenas.ts",
    description: "TrueNAS via Tailscale",
    target: "100.127.94.113",
    type: "A",
  },
  {
    name: "truenas.ts",
    description: "TrueNAS via Tailscale IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:627f:5e71",
    type: "AAAA",
  },

  {
    name: "hashicorp.ts",
    description: "Hashicorp VM via Tailscale",
    target: "100.124.153.63",
    type: "A",
  },
  {
    name: "hashicorp.ts",
    description: "Hashicorp VM via Tailscale IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:627c:993f",
    type: "AAAA",
  },

  {
    name: "hoobs.ts",
    description: "HOOBS VM via Tailscale",
    target: "100.81.227.88",
    type: "A",
  },
  {
    name: "hoobs.ts",
    description: "HOOBS VM via Tailscale IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:627f:5e71",
    type: "AAAA",
  },

  {
    name: "xui.ts",
    description: "XUI VM via Tailscale",
    target: "100.84.40.115",
    type: "A",
  },
  {
    name: "xui.ts",
    description: "XUI VM via Tailscale IPv6",
    target: "fd7a:115c:a1e0:ab12:4843:cd96:6254:2873",
    type: "AAAA",
  },
];
