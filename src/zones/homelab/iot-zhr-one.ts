import { NoRegistrar } from "../../providers/noregistrar";
import { PowerDns } from "../../providers/powerdns";
import { CreateRecords } from "../../utils/record";
import Services from "../../services/homelab/iot";

console.log('Zone: iot.zhr.one');

D('iot.zhr.one', NoRegistrar, DnsProvider(PowerDns),
	/* Basic records */
	CreateRecords('iot.zhr.one', Services, 'LocalTraefik'),
);
