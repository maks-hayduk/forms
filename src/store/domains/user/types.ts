export interface IUser {
  fullName: string;
  email: string;
  companyCode: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IInitialAuthState {
  isRegistered: boolean;
}

export interface IInitialLoginState {
  token: string;
}
