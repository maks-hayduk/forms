import React from 'react';
import { FieldProps } from 'formik';
import styled from 'theme';
import Input from './Input';

const DivWrapper = styled.div`
  margin-top: 13px;

  .label-input{
    font-size: 13px;
    color: ${props => props.theme.grayColor};
  }
  .error{
    font-size: 14px;
    color: red;
  }
`;

interface IInput {
  labelName: string;
  id: string;
}

const InputField: React.FC<FieldProps<any> & IInput>  = ({
  field, 
  form: { touched, errors },
  labelName,
  id,
  ...props
}) => (
  <DivWrapper>
    <label htmlFor={id} className="label-input">{labelName}</label>
    <Input id={id} {...field} {...props}/>
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </DivWrapper>
);

export default InputField;
