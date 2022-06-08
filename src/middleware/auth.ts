import { Action } from "routing-controllers";

export async function auth({ request }: Action, roles: string[]) {
  const authorization = request.headers["authorization"];

  return !!authorization;
}
