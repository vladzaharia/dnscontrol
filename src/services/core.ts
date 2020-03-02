// eslint-disable-next-line no-unused-vars
import { Record } from "../utils/records";

/**
 * DC Alpha - Currently DC Host
 */
export const Alpha = 'alpha.sea.core.zhr.one.';

/**
 * DC Beta - Currently Phone
 */
export const Beta = 'beta.sea.core.zhr.one.';

/**
 * DC Charlie - Currently Docker
 */
export const Charlie = 'charlie.sea.core.zhr.one.';

/**
 * DC Delta - Currently Mail
 */
export const Delta = 'delta.sea.core.zhr.one.';

/**
 * Home
 */
export const Home = 'home.sea.core.zhr.one.';

/**
 * Parents
 */
export const Parents = 'parents.van.core.zhr.one.';

/**
 * Azure CloudVM
 */
export const AzCloudVM = 'cloudvm.qnc.core.zhr.one.';

/**
 * Azure VPN
 */
export const AzVPN = 'vpn.qnc.core.zhr.one.';

/**
 * Core service records
 */
export const CoreServices: Record[] = [
    { name: 'alpha.sea.core', type: 'A', description: 'DC Host', target: '104.37.168.28' },
    { name: 'beta.sea.core', type: 'A', description: 'Phone', target: '104.37.168.29' },
    { name: 'charlie.sea.core', type: 'A', description: 'Docker', target: '104.37.168.30' },
    { name: 'delta.sea.core', type: 'A', description: 'Mail', target: '104.37.168.31' },
    { name: 'home.sea.core', type: 'A', description: 'Home', target: '174.127.231.221' },
    { name: 'parents.van.core', type: 'A', description: 'Parents', target: '64.46.8.37' },
    { name: 'cloudvm.qnc.core', type: 'A', description: 'Azure CloudVM', target: '52.183.82.105' },
    { name: 'vpn.qnc.core', type: 'A', description: 'Azure VPN', target: '52.247.206.58' },

];