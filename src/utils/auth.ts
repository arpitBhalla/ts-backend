import { createHash } from "crypto";
import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";
import { Role } from "../types";

const secret = "secret";

export const hash = (s: string) => createHash("sha256").update(s).digest("hex");

export const signJwt = <T extends Object>(payload: T) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: "7d",
  });
  return token;
};

export const verifyJwt = <T = {}>(token: string) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload as T;
  } catch (error) {
    throw new Error("Unable to parse token");
  }
};

export type TokenUser = { id: string; role: Role; premise: string };

export function signAuthToken(payload: TokenUser) {
  return signJwt(payload);
}

export function verifyAuthToken(token: string) {
  return verifyJwt<TokenUser>(token);
}
