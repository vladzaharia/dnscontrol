export interface Server {
    /**
     * Display name of server.
     */
    name: ElementNames | AdditionalNames;

    /**
     * Description of the server.
     */
    description: string;

    /**
     * Prefix, first part of the final domain name.
     * 
     * Current convention is periodic table.
     */
    prefix: ElementSymbols | AdditionalSymbols;

    /**
     * Location, secont part of the final domain name.
     * 
     * Current locations:
     *     sea - Seattle
     *     van - Vancouver
     *     qnc - Quincy / Azure westus2
     */
    location: 'sea' | 'van' | 'qnc';

    /**
     * IP Address of the server.
     */
    ip: string;
    
    /**
     * Exclude from record creation?
     */
    excludeRecord?: boolean;
}

export type ServerMap = {
    [key: string]: Server;
};

export type ElementNames = 'Actinium' | 'Aluminium' | 'Americium' | 'Antimony' | 'Argon' | 'Arsenic' | 'Astatine' | 'Barium' | 'Berkelium' | 'Beryllium' | 'Bismuth' | 'Bohrium' | 'Boron' | 'Bromine' | 'Cadmium' | 'Caesium' | 'Calcium' | 'Californium' | 'Carbon' | 'Cerium' | 'Chlorine' | 'Chromium' | 'Cobalt' | 'Copernicium' | 'Copper' | 'Curium' | 'Darmstadtium' | 'Dubnium' | 'Dysprosium' | 'Einsteinium' | 'Erbium' | 'Europium' | 'Fermium' | 'Flerovium' | 'Fluorine' | 'Francium' | 'Gadolinium' | 'Gallium' | 'Germanium' | 'Gold' | 'Hafnium' | 'Hassium' | 'Helium' | 'Holmium' | 'Hydrogen' | 'Indium' | 'Iodine' | 'Iridium' | 'Iron' | 'Krypton' | 'Lanthanum' | 'Lawrencium' | 'Lead' | 'Lithium' | 'Livermorium' | 'Lutetium' | 'Magnesium' | 'Manganese' | 'Meitnerium' | 'Mendelevium' | 'Mercury' | 'Molybdenum' | 'Moscovium' | 'Neodymium' | 'Neon' | 'Neptunium' | 'Nickel' | 'Nihonium' | 'Niobium' | 'Nitrogen' | 'Nobelium' | 'Oganesson' | 'Osmium' | 'Oxygen' | 'Palladium' | 'Phosphorus' | 'Platinum' | 'Plutonium' | 'Polonium' | 'Potassium' | 'Praseodymium' | 'Promethium' | 'Protactinium' | 'Radium' | 'Radon' | 'Rhenium' | 'Rhodium' | 'Roentgenium' | 'Rubidium' | 'Ruthenium' | 'Rutherfordium' | 'Samarium' | 'Scandium' | 'Seaborgium' | 'Selenium' | 'Silicon' | 'Silver' | 'Sodium' | 'Strontium' | 'Sulfur' | 'Tantalum' | 'Technetium' | 'Tellurium' | 'Tennessine' | 'Terbium' | 'Thallium' | 'Thorium' | 'Thulium' | 'Tin' | 'Titanium' | 'Tungsten' | 'Uranium' | 'Vanadium' | 'Xenon' | 'Ytterbium' | 'Yttrium' | 'Zinc' | 'Zirconium';
export type ElementSymbols = 'ac' | 'ag' | 'al' | 'am' | 'ar' | 'as' | 'at' | 'au' | 'b' | 'ba' | 'be' | 'bh' | 'bi' | 'bk' | 'br' | 'c' | 'ca' | 'cd' | 'ce' | 'cf' | 'cl' | 'cm' | 'co' | 'cr' | 'cs' | 'cu' | 'ds' | 'db' | 'dy' | 'er' | 'es' | 'eu' | 'f' | 'fe' | 'fm' | 'fr' | 'ga' | 'gd' | 'ge' | 'h' | 'he' | 'hf' | 'hg' | 'ho' | 'hs' | 'i' | 'in' | 'ir' | 'k' | 'kr' | 'la' | 'li' | 'lr' | 'lu' | 'md' | 'mg' | 'mn' | 'mo' | 'mt' | 'n' | 'na' | 'nb' | 'nd' | 'ne' | 'ni' | 'no' | 'np' | 'o' | 'os' | 'p' | 'pa' | 'pb' | 'pd' | 'pm' | 'po' | 'pr' | 'pt' | 'pu' | 'ra' | 'rb' | 're' | 'rf' | 'rg' | 'rh' | 'rn' | 'ru' | 's' | 'sb' | 'sc' | 'se' | 'sg' | 'si' | 'sm' | 'sn' | 'sr' | 'ta' | 'tb' | 'tc' | 'te' | 'th' | 'ti' | 'tl' | 'tm' | 'u' | 'v' | 'w' | 'xe' | 'y' | 'yb' | 'zn' | 'zr';

export type AdditionalNames = 'LocalTraefik';
export type AdditionalSymbols = 'xx-lt';
