import React from 'react';
import styled from 'theme';

const LinkWrapper = styled.div`
  height: 35px;
  width: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.blueColor};

  :active{
    background-color: ${props => props.theme.darkBlueColor};
`;

export default LinkWrapper;
