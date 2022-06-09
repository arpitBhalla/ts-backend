import { createHash } from "crypto";
import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";

const secret = "secret";

export const hash = (s: string) => createHash("sha256").update(s).digest("hex");

export const cookie = (): CookieOptions => {
  return {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  };
};

export const signJwt = <T extends Object>(payload: T) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: "1d",
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
