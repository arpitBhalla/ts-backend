import { Role } from "../types";
import { Request, Response } from "express";
import { signJwt, verifyJwt } from "@utils/auth";
import {
  ForbiddenError,
  HttpError,
  UnauthorizedError,
} from "routing-controllers";

interface Action {
  request: Request;
  response: Response;
}

type TokenUser = { id: string; role: Role; premise: string };

export async function auth(
  { request, response }: Action,
  roles: Role[] = []
): Promise<boolean> {
  const token = request.cookies.token;
  if (!token) {
    throw new UnauthorizedError();
  }
  let user: TokenUser;
  try {
    user = verifyJwt<TokenUser>(token);
  } catch (error) {
    throw new UnauthorizedError("Unauthorized");
  }

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
