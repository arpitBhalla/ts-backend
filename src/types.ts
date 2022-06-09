import "routing-controllers";

export type Role = "ADMIN" | "MANAGER" | "USER";

declare module "routing-controllers" {
  export function Authorized(): Function;

  export function Authorized(role: Role): Function;

  export function Authorized(roles: Role[]): Function;

  export function Authorized(role: Function): Function;
}
