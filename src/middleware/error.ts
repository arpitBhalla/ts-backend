import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
} from "routing-controllers";
import { Response } from "express";
import { Service } from "typedi";

@Service()
@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: HttpError,
    request: Express.Request,
    response: Response,
    next: (err?: any) => any
  ) {
    response
      .status(error.httpCode || 400)
      .json({ message: error.message || error.name });
    next();
  }
}
