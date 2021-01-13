import { NoRegistrar } from "../../providers/noregistrar";
import { PowerDns } from "../../providers/powerdns";
import { CreateRecords } from "../../utils/record";
import Services from "../../services/homelab/local";

console.log('Zone: local.zhr.one');

D('local.zhr.one', NoRegistrar, DnsProvider(PowerDns),
	/* Basic records */
	CreateRecords('local.zhr.one', Services, 'LocalTraefik'),
);
