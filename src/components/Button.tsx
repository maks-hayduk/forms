import styled from 'theme';

const Input = styled.button`
  width: 100px;
  height: 36px;
  font-size: 16px;
  border: none;
  background-color: ${props => props.theme.blueColor};
  color: ${props => props.theme.whiteColor}
  border-radius: 5px;
  cursor: pointer;
  :active{
    outline: none;
    background-color: ${props => props.theme.darkBlueColor};
  }
`;

export default Input;
