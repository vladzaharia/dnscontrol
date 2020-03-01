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
 * Get all core records
 */
export function CreateCoreRecords() {
    return [
        A('alpha.sea.core', '104.37.168.28'), // DC Host
        A('beta.sea.core', '104.37.168.29'), // Phone
        A('charlie.sea.core', '104.37.168.30'), // Docker
        A('delta.sea.core', '104.37.168.31'), // Mail
        A('home.sea.core', '174.127.231.221'), // Home
        A('parents.van.core', '64.46.8.37'), // Parents
        A('cloudvm.qnc.core', '52.183.82.105'), // Azure CloudVM
        A('vpn.qnc.core', '52.247.206.58'), // Azure VPN
    ];
}