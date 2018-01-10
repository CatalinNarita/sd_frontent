export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
}

export interface IRole {
  id?: number;
  roleName?: string;
  user?: IUser;
}
