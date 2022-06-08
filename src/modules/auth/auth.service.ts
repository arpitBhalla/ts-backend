import { DbService } from "@services/db";
import { Inject, Service } from "typedi";
import { EmailI, LoginI, UserI } from "./interface";

@Service()
export class AuthService {
  // @Inject()
  // private db: DbService<User>;

  async create(user: UserI) {}

  async login(user: LoginI) {}

  async fetch(id: string) {}

  async forget(email: string) {}
}
