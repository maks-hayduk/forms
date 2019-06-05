import styled from 'theme';

const Input = styled.button`
  width: 260px;
  height: 40px;
  font-size: 18px;
  border: 2px solid ${props => props.theme.grayColor};
  border-radius: 5px;
  background-color: white;
  :active{
    outline: none;
    border-color: ${props => props.theme.blackColor};
    color: black;
    background-color: ${props => props.theme.whiteGreyColor};
  }
`;

export default Input;
