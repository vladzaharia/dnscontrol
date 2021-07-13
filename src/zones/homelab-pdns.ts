import { NoRegistrar } from "../providers/noregistrar";
import { CreateRecords, Record } from "../utils/record";

import { HomelabInfraServices } from "../services/homelab/infra";
import { HomelabIoTServices } from "../services/homelab/iot";
import { HomelabLocalServices } from "../services/homelab/local";
import { HomelabMediaServices } from "../services/homelab/media";
import { HomelabZeroTierServices } from "../services/homelab/zerotier";

interface HomelabZone {
    name: string;
    records: Record[];
}

const Zones: HomelabZone[] = [
    {
        name: "infra.zhr.one",
        records: HomelabInfraServices
    },
    {
        name: "iot.zhr.one",
        records: HomelabIoTServices
    },
    {
        name: "local.zhr.one",
        records: HomelabLocalServices
    },
    {
        name: "media.zhr.one",
        records: HomelabMediaServices
    },
    {
        name: "zt.zhr.one",
        records: HomelabZeroTierServices
    },
];
