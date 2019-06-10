const mailRegExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegExpression = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
const fullnameRegExpression = /^[A-Za-z]+\s[A-Za-z]+$/;

export const emailRegexp = (email: string) => 
  mailRegExpression.test(email) ? undefined : 'Incorectly entered email';

export const passRegexp = (password: string) =>
  passwordRegExpression.test(password) ? undefined : 'Incorectly entered password';

export const fullnameRegexp = (fullname: string) => 
  fullnameRegExpression.test(fullname) ? undefined : 'Full name incorectly entered';

export const min3Symbols = (value: string, kek: any) => 
  value.length > 2 ? undefined : 'Value must be at least 3 symbols';