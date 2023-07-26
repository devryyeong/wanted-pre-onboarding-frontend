import React from 'react';
import styled from '@emotion/styled'

const Header = () => {
  return (
    <>
      <HeaderContainer>Organization Name / Repository Name</HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: royalblue;
  padding: 10px;
  color: white;
`;

export default Header;