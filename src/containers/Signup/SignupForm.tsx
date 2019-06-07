//tslint:disable
import React from 'react';
import { Formik, Field, Form, ErrorMessage, FormikActions } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'theme';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { IUser, IHandleUserSignup } from 'store/domains';

const Div = styled.div`
	min-height: 400px;
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

interface ISignup {
  handleUserSignup: IHandleUserSignup;
}

const Signup: React.FC<ISignup> = (props) => {
  return (
    <Div>
      <h2>Sign up to enter</h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          companyCode: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={async (values: IUser, action: FormikActions<IUser>) => {
          await props.handleUserSignup(values);
        }}
      >
        {() => (
          <Form>
            <Field component={InputField} placeholder="Full name" name="fullName" id="fullName" labelName="Full name"/>
            <Field component={InputField} type="email" placeholder="Email" name="email" id="email" labelName="Email"/>
            <Field component={InputField} placeholder="Company code" name="companyCode" id="companyCode" labelName="Company code"/>
            <Field component={InputField} type="password" placeholder="Password" name="password" id="password" labelName="Password"/>
            <Field component={InputField} type="password" placeholder="Confirm password" name="confirmPassword" id="comfirmPassword" labelName="Confirm password"/>
            <Button type="submit" className="input-container">Register</Button>
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

export default Signup;
