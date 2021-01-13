import { Record } from "../../utils/record";

export const  HomelabIoTServices: Record[] = [
	/* Core IoT Services */
	{ name: 'hubitat', description: 'Hubitat', type: 'A', target: '10.10.16.16' },
	{ name: 'hoobs', description: 'HOOBS', type: 'A', target: '10.10.16.17' },
	{ name: 'lutron', description: 'Lutron Bridge', type: 'A', target: '10.10.18.144' },
	
	/* IoT Devices */
	{ name: 'teslausb', description: 'TeslaUSB', type: 'A', target: '10.10.16.174' },
];

export default HomelabIoTServices;