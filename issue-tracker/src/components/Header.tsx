import React from 'react';
import styled from '@emotion/styled'

const Header = () => {
  return (
    <>
      <HeaderContainer href="https://github.com/facebook/react/issues">
        facebook / react
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.a`
  display: flex;
  justify-content: center;
  background-color: royalblue;
  padding: 10px;
  color: white;
`;

export default Header;