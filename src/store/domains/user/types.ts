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
  token: string;
  isRegistered: boolean;
  isAuthorized: boolean;
}

export interface IInitialDataState {
  company: {
    createdAt: string;
    name: string;
    updatedAt: string;
    _id: string;
  };
  email: string;
  fullName: string;
  role: 'user' | 'admin';
  _id: string;
}
