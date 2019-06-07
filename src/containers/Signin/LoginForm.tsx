//tslint:disable
import React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'theme';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { IUserLogin, IHandleUserLogin } from 'store/domains';
import { min8Symbold } from 'utils';

const Div = styled.div`
	min-height: 200px;
	width: 450px;
	border: 1px solid ${props => props.theme.grayColor};
	border-radius: 5px;
  padding: 20px 40px;
  background-color: white;

	.label-input{
		font-size: 13px;
	  color: ${props => props.theme.grayColor};
	}

	.input-container{
		margin-top: 13px;
  }
  
  .white-box{
    width: 100%;
    margin-top: 20px;
  }

  .link-style{
    margin-left: 5px;
  }
`;

interface ILogin {
  handleUserLogin: IHandleUserLogin;
}

const Login: React.FC<ILogin> = (props) => {
  return (
    <Div>
      <h2>Please log in</h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (values: IUserLogin, action: FormikActions<IUserLogin>) => {
          await props.handleUserLogin(values);
        }}
      >
        {() => (
          <Form>
            <Field component={InputField} type="email" placeholder="Email" name="email" validate={min8Symbold} id="email" labelName="Email"/>
            <Field component={InputField} type="password" placeholder="Password" name="password" id="password" labelName="Password"/>
            <Button type="submit" className="input-container">Login</Button>
          </Form>
        )}
      </Formik>
      <div className="white-box" />
      <Link to="/start" className="link-style">
        Back to start
      </Link>
    </Div>
  );
};

export default Login;
