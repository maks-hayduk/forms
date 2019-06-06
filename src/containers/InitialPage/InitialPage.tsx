import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'theme';
import CustomLink from 'components/LinkWrapper';

const LinkWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.backgroundInitialColor};

  .align-links{
    height: 35px;
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
`;

const InitialPage: React.FC = () => {
  return(
    <LinkWrapper>
      <div className="align-links">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <CustomLink>Log in</CustomLink>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <CustomLink>Sign up</CustomLink>
        </Link>
      </div>
    </LinkWrapper>
  );
};

export default InitialPage;
