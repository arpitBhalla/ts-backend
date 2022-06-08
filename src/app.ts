// this shim is required
import "reflect-metadata";

import { createExpressServer, useContainer } from "routing-controllers";
import { AuthController } from "@modules/auth/auth.controller";
import { Container } from "typedi";
import { auth } from "@middleware/auth";

const app = createExpressServer({
  controllers: [AuthController],
  authorizationChecker: auth,
});

useContainer(Container);

app.listen(3000, () => {
  console.log("started");
});
