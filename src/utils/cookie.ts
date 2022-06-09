import { Response } from "express";
import { createParamDecorator } from "routing-controllers";

export class Cookie {
  static setAuth(res: Response, token: string) {
    return Cookie.set(res, "token", token);
  }

  static clearAuth(res: Response) {
    return res.clearCookie("token");
  }

  static set(res: Response, name: string, value: string) {
    return res.cookie(name, value, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
  }
}

export function SetCookie(options?: { required?: boolean }) {
  return createParamDecorator({
    required: options && options.required ? true : false,
    value: (action) => {
      return (token: string) => Cookie.set(action.response, "token", token);
    },
  });
}
