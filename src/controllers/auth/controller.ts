import {
  Body,
  Post,
  JsonController,
  Authorized,
  HeaderParam,
  Get,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  Req,
} from "routing-controllers";
import { AuthService } from "./service";
import { Inject, Service } from "typedi";
import { EmailI, LoginI, UserI } from "./interface";
import { ValidationError } from "class-validator";
import { Request } from "express";

@Service()
@JsonController("/auth")
export class authController {
  @Inject()
  private authService: AuthService;

  @Post("/login")
  login(@Body() body: LoginI) {
    return this.authService.login(body);
  }

  @Post("/register")
  register(@Body() body: UserI) {
    return this.authService.create(body);
  }

  @Authorized()
  @Post("/change_password")
  forget(@Body() body: LoginI) {
    return this.authService.changePassword(body);
  }

  @Authorized("ADMIN")
  @Get("/logout")
  logout(@HeaderParam("premise") p: string) {
    console.log(p);
    return this.authService.logout();
  }
}
