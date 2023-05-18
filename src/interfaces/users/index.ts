export interface IUserRequest {
  nome: string;
  email: string;
  password: string;
  adm: boolean;
}

export interface IUser {
  id: string;
  nome: string;
  email: string;
  adm: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  nome?: string;
  email?: string;
  password?: string;
}

export interface IUserUpdateRequest {
  nome?: string;
  email?: string;
}

export interface IUserUpdatePassword {
  password?: string;
  newPassword: string;
}
