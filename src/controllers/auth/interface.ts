export interface EmailI {
  email: string;
}

export interface LoginI extends EmailI {
  password: string;
}

export interface UserI extends LoginI {
  name: string;
  role: string;
}
