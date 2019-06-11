import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'theme';

const CustomLink = styled.div`
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

interface ICLink {
  to: string;
}

const CLink: React.FC<ICLink> = (props) => {
  return(
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      <CustomLink>{props.children}</CustomLink>
    </Link>
  );

}

export default CLink;
