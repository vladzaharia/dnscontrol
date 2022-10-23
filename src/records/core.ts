import { Record } from "../utils/record";
import { AdditionalNames, ServerMap, ElementNames } from "../utils/server";

const RootDomain = "zhr.one";

const Servers: ServerMap = {
  Argon: {
    name: "Argon",
    description: "Westin Host (Westin 1)",
    prefix: "ar",
    location: "sea",
    ip: "104.37.168.28",
  },
  Barium: {
    name: "Barium",
    description: "3CX Server (Westin 2)",
    prefix: "ba",
    location: "sea",
    ip: "104.37.168.29",
  },
  Cobalt: {
    name: "Cobalt",
    description: "Docker Server (Westin 3)",
    prefix: "co",
    location: "sea",
    ip: "104.37.168.30",
  },
  Gallium: {
    name: "Gallium",
    description: "Mail Server (Westin 4)",
    prefix: "ga",
    location: "sea",
    ip: "104.37.168.31",
  },
  Helium: {
    name: "Helium",
    description: "Home IP",
    prefix: "he",
    location: "sea",
    ip: "97.113.219.110",
  },
  Thorium: {
    name: "Thorium",
    description: "Townhouse IP",
    prefix: "th",
    location: "sea",
    ip: "75.172.20.32",
    excludeRecord: true,
  },
  Palladium: {
    name: "Palladium",
    description: "Parents Home IP",
    prefix: "pd",
    location: "van",
    ip: "64.46.8.37",
  },
  Iridium: {
    name: "Iridium",
    description: "Azure CloudVM",
    prefix: "ir",
    location: "qnc",
    ip: "52.183.82.105",
  },
  Lithium: {
    name: "Lithium",
    description: "Azure VPN",
    prefix: "li",
    location: "qnc",
    ip: "52.247.206.58",
  },
  Neon: {
    name: "Neon",
    description: "GGStream - Westin (Westin 5)",
    prefix: "ne",
    location: "sea",
    ip: "104.37.168.125",
  },
  Oxygen: {
    name: "Oxygen",
    description: "Westin Spare 2 (Westin 6)",
    prefix: "o",
    location: "sea",
    ip: "104.37.168.126",
  },

  LocalTraefik: {
    name: "LocalTraefik",
    description: "Internal - Traefik Instance",
    prefix: "xx-lt",
    location: "sea",
    ip: "10.10.0.201",
  },
};

function GetPrefix(name: string): string {
  const server = Servers[name];

  if (!server) {
    throw "Server not found!";
  }

  return `${server.prefix}.${server.location}.core`;
}

export function GetHost(name: ElementNames | AdditionalNames): string {
  const server = Servers[name];

  if (!server) {
    throw "Server not found!";
  }

  return `${GetPrefix(name)}.${RootDomain}.`;
}

export function GetIP(name: ElementNames | AdditionalNames): string {
  const server = Servers[name];

  if (!server) {
    throw "Server not found!";
  }

  return server.ip;
}

export function GetCoreRecords(): Record[] {
  return Object.keys(Servers)
    .filter((key: string): boolean => {
      return !Servers[key].excludeRecord;
    })
    .map((key: string): Record => {
      const server = Servers[key];

      return {
        name: GetPrefix(key),
        description: `${key} - ${server.description}`,
        type: "A",
        target: server.ip,
      };
    });
}
