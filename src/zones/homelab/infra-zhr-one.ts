import { NoRegistrar } from "../../providers/noregistrar";
import { PowerDns } from "../../providers/powerdns";
import { CreateRecords } from "../../utils/record";
import Services from "../../services/homelab/infra";

console.log('Zone: infra.zhr.one');

D('infra.zhr.one', NoRegistrar, DnsProvider(PowerDns),
	/* Basic records */
	CreateRecords('infra.zhr.one', Services, 'LocalTraefik'),
);
