import styled from 'theme';

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 33px;
  padding-left: 10px;
  font-size: 15px;
  border: 1px solid ${props => props.theme.grayColor};
  border-radius: 5px;
  :focus{
    outline: none;
    border-color: ${props => props.theme.blackColor};
  }
`;

export default Input;
