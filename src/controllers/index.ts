// @index('./*', f => `import { ${f.name}Controller } from '${f.path}/controller'`)
import { authController } from "./auth/controller";
import { memberController } from "./member/controller";
// @endindex

export = [
  // @index('./*', f => `${f.name}Controller,`)
  authController,
  //   memberController,
  // @endindex
];
