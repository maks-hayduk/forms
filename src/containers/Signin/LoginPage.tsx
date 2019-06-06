import React from 'react';
import styled from 'theme';
import LoginForm from './LoginForm';
import { IUserLoginAction } from 'store/domains';

const DivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.backgroundSecondaryGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ILoginPage {
  userLogin: IUserLoginAction;
  currentToken: string;
}

const LoginPage: React.FC<ILoginPage> = (props) => {
  return(
    <DivWrapper>
      <LoginForm handleUserLogin={props.userLogin} token={props.currentToken}/>
    </DivWrapper>
  );
};

export default LoginPage;
