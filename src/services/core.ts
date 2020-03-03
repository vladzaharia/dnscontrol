import { Record } from "../utils/records";

/**
 * Argon - DC Host
 */
export const Argon = 'ar.sea.core.zhr.one.';

/**
 * Barium - Phone
 */
export const Barium = 'ba.sea.core.zhr.one.';

/**
 * Cobalt - Docker
 */
export const Cobalt = 'co.sea.core.zhr.one.';

/**
 * Gallium - Mail
 */
export const Gallium = 'ga.sea.core.zhr.one.';

/**
 * Helium - Home
 */
export const Helium = 'he.sea.core.zhr.one.';

/**
 * Palladium - Parents
 */
export const Palladium = 'pd.van.core.zhr.one.';

/**
 * Iridium - Azure CloudVM
 */
export const Iridium = 'ir.qnc.core.zhr.one.';

/**
 * Lithium - Azure VPN
 */
export const Lithium = 'li.qnc.core.zhr.one.';

/**
 * Core service records
 */
export const CoreServices: Record[] = [
    { name: 'ar.sea.core', description: 'Argon - DC Host', type: 'A', target: '104.37.168.28' },
    { name: 'ba.sea.core', description: 'Barium - Phone', type: 'A', target: '104.37.168.29' },
    { name: 'co.sea.core', description: 'Cobalt - Docker', type: 'A', target: '104.37.168.30' },
    { name: 'ga.sea.core', description: 'Gallium - Mail', type: 'A', target: '104.37.168.31' },
    { name: 'he.sea.core', description: 'Helium - Home', type: 'A', target: '174.127.231.221' },
    { name: 'pd.van.core', description: 'Palladium - Parents', type: 'A', target: '64.46.8.37' },
    { name: 'ir.qnc.core', description: 'Iridium - Azure CloudVM', type: 'A', target: '52.183.82.105' },
    { name: 'li.qnc.core', description: 'Lithium - Azure VPN', type: 'A', target: '52.247.206.58' },
];