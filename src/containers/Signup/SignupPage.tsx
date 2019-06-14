import React from 'react';
import styled from 'theme';
import SignupForm from './SignupForm';
import { IHandleUserSignup } from 'store/domains';

const DivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.backgroundGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ISignupPage {
  handleUserSignup: IHandleUserSignup;
}

const SignupPage: React.FC<ISignupPage> = (props) => {
  return(
    <DivWrapper>
      <SignupForm handleUserSignup={props.handleUserSignup}/>
    </DivWrapper>
  );
};

export default SignupPage;
