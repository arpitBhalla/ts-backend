import { Body, Post, JsonController } from "routing-controllers";
import { AuthService } from "./auth.service";
import { Inject, Service } from "typedi";
import { EmailI, LoginI, UserI } from "./interface";

@Service()
@JsonController("auth")
export class AuthController {
  @Inject()
  private authService: AuthService;

  @Post("login")
  login(@Body() body: LoginI) {
    return this.authService.login(body);
  }

  @Post("register")
  register(@Body() body: UserI) {
    return this.authService.create(body);
  }

  @Post("forget")
  forget(@Body() body: EmailI) {
    return this.authService.forget(body.email);
  }
}
