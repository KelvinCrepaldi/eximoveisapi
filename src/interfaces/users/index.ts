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
  password: string;
  ativo?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}
