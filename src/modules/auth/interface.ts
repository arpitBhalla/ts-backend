export interface EmailI {
  email: string;
}

export interface LoginI extends EmailI {
  password: string;
}

export interface UserI extends EmailI {
  name: string;
  role: string;
}
