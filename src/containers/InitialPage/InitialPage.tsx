import React from 'react';
import styled from 'theme';
import CustomLink from 'components/LinkWrapper';
import { RoutesTypeKeys } from 'consts';

const LinkWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.backgroundInitialColor};

  .align-links{
    height: 35px;
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
`;

const InitialPage: React.FC = () => {
  return(
    <LinkWrapper>
      <div className="align-links">
        <CustomLink to={RoutesTypeKeys.Login}>Log in</CustomLink>
        <CustomLink to={RoutesTypeKeys.Dashboard}>Dashboard</CustomLink>
        <CustomLink to={RoutesTypeKeys.Signup}>Sign up</CustomLink>
      </div>
    </LinkWrapper>
  );
};

export default InitialPage;
