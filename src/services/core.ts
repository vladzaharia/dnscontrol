// eslint-disable-next-line no-unused-vars
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
    { name: 'ar.sea.core', type: 'A', description: 'Argon - DC Host', target: '104.37.168.28' },
    { name: 'ba.sea.core', type: 'A', description: 'Barium - Phone', target: '104.37.168.29' },
    { name: 'co.sea.core', type: 'A', description: 'Cobalt - Docker', target: '104.37.168.30' },
    { name: 'ga.sea.core', type: 'A', description: 'Gallium - Mail', target: '104.37.168.31' },
    { name: 'he.sea.core', type: 'A', description: 'Helium - Home', target: '174.127.231.221' },
    { name: 'pd.van.core', type: 'A', description: 'Palladium - Parents', target: '64.46.8.37' },
    { name: 'ir.qnc.core', type: 'A', description: 'Iridium - Azure CloudVM', target: '52.183.82.105' },
    { name: 'li.qnc.core', type: 'A', description: 'Lithium - Azure VPN', target: '52.247.206.58' },

];