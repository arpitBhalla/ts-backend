// this shim is required
import "reflect-metadata";

import { useContainer, useExpressServer } from "routing-controllers";
import express from "express";
import { Container } from "typedi";
import controllers from "@controllers";
import { auth } from "@middleware/auth";
import { CustomErrorHandler } from "./middleware/error";
import cookieParser from "cookie-parser";

useContainer(Container);

const app = express();
app.use(cookieParser());

useExpressServer(app, {
  controllers,
  middlewares: [CustomErrorHandler],
  authorizationChecker: auth,
  defaultErrorHandler: false,
});

app.listen(3000, () => {
  console.log("started");
});
