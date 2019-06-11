import React from 'react';
import styled from 'theme';
import LoginForm from './LoginForm';
import { IHandleUserLogin } from 'store/domains';

const DivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.backgroundSecondaryGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ILoginPage {
  userLogin: IHandleUserLogin;
}

const LoginPage: React.FC<ILoginPage> = (props) => {
  return(
    <DivWrapper>
      <LoginForm handleUserLogin={props.userLogin} />
    </DivWrapper>
  );
};

export default LoginPage;
