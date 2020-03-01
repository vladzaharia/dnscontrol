/**
 * Possible renaming:
 * <machine>.<location>.core.zhr.one.
 * alpha.sea.core.zhr.one
 * home.sea.core.zhr.one
 * parents.van.core.zhr.one
 * cloudvm.qnc.core.zhr.one
 */

/**
 * DC Alpha - Currently DC Host
 */
export const Alpha = 'alpha.dc.core.zhr.one.';

/**
 * DC Beta - Currently Phone
 */
export const Beta = 'beta.dc.core.zhr.one.';

/**
 * DC Charlie - Currently Docker
 */
export const Charlie = 'charlie.dc.core.zhr.one.';

/**
 * DC Delta - Currently Mail
 */
export const Delta = 'delta.dc.core.zhr.one.';

/**
 * Home
 */
export const Home = 'home.core.zhr.one.';

/**
 * Parents
 */
export const Parents = 'parents.core.zhr.one.';

/**
 * Azure CloudVM
 */
export const AzCloudVM = 'cloudvm.azure.core.zhr.one.';

/**
 * Azure VPN
 */
export const AzVPN = 'vpn.azure.core.zhr.one.';

/**
 * Get all core records
 */
export function CreateCoreRecords() {
    return [
        A('alpha.dc.core', '104.37.168.28'), // DC Host
        A('beta.dc.core', '104.37.168.29'), // Phone
        A('charlie.dc.core', '104.37.168.30'), // Docker
        A('delta.dc.core', '104.37.168.31'), // Mail
        A('home.core', '174.127.231.221'), // Home
        A('parents.core', '64.46.8.37'), // Parents
        A('cloudvm.azure.core', '52.183.82.105'), // Azure CloudVM
        A('vpn.azure.core', '52.247.206.58'), // Azure VPN
    ];
}