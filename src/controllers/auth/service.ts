import { NotFoundError, ForbiddenError, Req } from "routing-controllers";
import { prisma } from "@core/db";
import { hash } from "@utils/auth";
import { Inject, Service } from "typedi";
import { EmailI, LoginI, UserI } from "./interface";
import { Request } from "express";
@Service()
export class AuthService {
  async create(user: UserI) {
    const newUser = await prisma.user.create({
      data: {
        ...user,
        password: hash(user.password),
      },
    });
    return {
      message: "User created",
    };
  }

  async login({ email, password }: LoginI) {
    const user = await prisma.user.findFirst({
      where: { email },
      include: { premise: true },
    });
    if (!user) {
      throw new NotFoundError("User not found");
    }
    if (hash(password) === user.password) {
    } else {
      throw new ForbiddenError("Password is incorrect");
    }
    return {
      message: "Login success",
      profile: {
        name: user.name,
        email: user.email,
        premise: user.premise,
      },
    };
  }

  async changePassword({ email, password }: LoginI) {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      throw new NotFoundError("User not found");
    }
    const newPass = hash(password);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: newPass },
    });
    return { message: "Password changed" };
  }

  async logout() {
    return "haha";
  }
}
