import { Role } from "../types";
import { Request, Response } from "express";
import { TokenUser, verifyAuthToken } from "@utils/auth";
import { ForbiddenError, UnauthorizedError } from "routing-controllers";

interface Action {
  request: Request;
  response: Response;
}

export function currentUser({ request }: Action) {
  const token = request.cookies.token;
  if (!token) {
    throw new UnauthorizedError();
  }
  let user: TokenUser;
  try {
    user = verifyAuthToken(token);
  } catch (error) {
    throw new UnauthorizedError("Unauthorized");
  }
  return user;
}

export async function auth(
  { request, response }: Action,
  roles: Role[] = []
): Promise<boolean> {
  const user = currentUser({ request, response });

  if (!roles.length) {
    return true;
  }

  if (!roles.includes(user.role)) {
    throw new UnauthorizedError("user role is not authorized");
  }

  const premise = request.headers["premise"] as string;
  if (!user.premise.includes(premise.trim())) {
    throw new ForbiddenError("user has no access to this premise");
  }

  return true;
}
