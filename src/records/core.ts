import { Record } from "../utils/record";
import { AdditionalNames, ServerMap, ElementNames } from "../utils/server";

const RootDomain = "zhr.one";

const Servers: ServerMap = {
  Helium: {
    name: "Helium",
    description: "Home IP",
    prefix: "he",
    location: "sea",
    ip: "76.191.87.2",
    excludeRecord: true,
  },
  Palladium: {
    name: "Palladium",
    description: "Parents Home IP",
    prefix: "pd",
    location: "van",
    ip: "64.46.8.37",
  },
  LocalTraefik: {
    name: "LocalTraefik",
    description: "Internal Traefik services",
    prefix: "xx-lt",
    location: "sea",
    ip: "10.10.1.20",
  },
};

export function GetPrefix(name: string): string {
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
