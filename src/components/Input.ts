import styled from 'theme';

const Input = styled.input`
  width: 260px;
  height: 33px;
  padding-left: 10px;
  font-size: 18px;
  border: 2px solid ${props => props.theme.grayColor};
  border-radius: 5px;
  :focus{
    outline: none;
    border-color: ${props => props.theme.blackColor};
  }
`;

export default Input;
