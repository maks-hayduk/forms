import React from 'react';
import styled from 'theme';
import SignupForm from './SignupForm';
import { IUserSignupAction } from 'store/domains';

const DivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.backgroundGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ISignupPage {
  userSignup: IUserSignupAction;
  handleUserSignup: any;
}

const SignupPage: React.FC<ISignupPage> = (props) => {
  return(
    <DivWrapper>
      <SignupForm handleUserSignup={props.userSignup} handlePageChange={props.handleUserSignup}/>
    </DivWrapper>
  );
};

export default SignupPage;
