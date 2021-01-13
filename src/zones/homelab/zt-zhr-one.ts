import { NoRegistrar } from "../../providers/noregistrar";
import { PowerDns } from "../../providers/powerdns";
import { CreateRecords } from "../../utils/record";
import Services from "../../services/homelab/zerotier";

console.log('Zone: zt.zhr.one');

D('zt.zhr.one', NoRegistrar, DnsProvider(PowerDns),
	/* Basic records */
	CreateRecords('zt.zhr.one', Services, 'LocalTraefik'),
);
