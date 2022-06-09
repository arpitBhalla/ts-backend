import {
  Body,
  Post,
  JsonController,
  Authorized,
  Res,
} from "routing-controllers";
import { AuthService } from "./service";
import { Inject, Service } from "typedi";
import { EmailI, LoginI, UserI } from "./interface";
import { Request, Response } from "express";
import { Cookie, SetCookie } from "@utils/cookie";

@Service()
@JsonController("/auth")
export class authController {
  @Inject()
  private authService: AuthService;

  @Post("/login")
  async login(@Body() body: LoginI, @Res() res: Response) {
    const { user, token } = await this.authService.login(body);

    Cookie.setAuth(res, token);

    return {
      message: "Login success",

      profile: {
        name: user.name,
        email: user.email,
        premise: user.premise,
      },
    };
  }

  // @Post("/register")
  // register(@Body() body: UserI) {
  //   return this.authService.create(body);
  // }

  @Authorized()
  @Post("/change_password")
  forget(@Body() body: LoginI) {
    return this.authService.changePassword(body);
  }

  @Authorized()
  @Post("/logout")
  logout(@Res() res: Response) {
    Cookie.clearAuth(res);

    return {
      message: "Success",
    };
  }
}
