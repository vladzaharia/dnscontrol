import { Record } from "../../utils/record";
import { GetHost } from "../core";

export const NebulaOverlayRecords: Record[] = [
  // Lighthouses
  {
    name: "lh1.public.nebula",
    description: "Lighthouse 1 - Townhouse",
    target: GetHost("Helium"),
  },
  {
    name: "lh1.nebula",
    description: "[N] Lighthouse 1 - Townhouse",
    type: "A",
    target: "10.200.10.1",
  },
  {
    name: "lh2.public.nebula",
    description: "Lighthouse 2 - Azure",
    target: "zhrone-nebula-lh2.westus3.cloudapp.azure.com.",
  },
  {
    name: "lh2.nebula",
    description: "[N] Lighthouse 1 - Townhouse",
    type: "A",
    target: "10.200.10.5",
  },

  // Services
  {
    name: "truenas.nebula",
    description: "[N] TrueNAS",
    type: "A",
    target: "10.200.10.10",
  },
];
