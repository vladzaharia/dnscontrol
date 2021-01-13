import { NoRegistrar } from "../../providers/noregistrar";
import { PowerDns } from "../../providers/powerdns";
import { CreateRecords } from "../../utils/record";
import Services from "../../services/homelab/media";

console.log('Zone: media.zhr.one');

D('media.zhr.one', NoRegistrar, DnsProvider(PowerDns),
	/* Basic records */
	CreateRecords('media.zhr.one', Services, 'LocalTraefik'),
);
