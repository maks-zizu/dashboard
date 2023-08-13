export type User = {
  id: number;
  name: string;
  photo: string;
  password: string;
  email: string;
};

export type UserAuthReg = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type UserAuthLog = {
  email: string;
  password: string;
};
