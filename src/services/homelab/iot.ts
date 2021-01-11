import { Record } from "../../utils/record";

export const  HomelabIoTServices: Record[] = [
	/* Core IoT Services */
	{ name: 'hubitat.iot', description: 'Hubitat', type: 'A', target: '10.10.16.16' },
	{ name: 'hoobs.iot', description: 'HOOBS', type: 'A', target: '10.10.16.17' },
	{ name: 'lutron.iot', description: 'Lutron Bridge', type: 'A', target: '10.10.18.144' },
	
	/* IoT Devices */
	{ name: 'teslausb.iot', description: 'TeslaUSB', type: 'A', target: '10.10.16.174' },
];