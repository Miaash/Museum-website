import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

const Header: React.FC = () => {
  return (
    <MainWrapper>
      <HeaderContainer>
        <HeaderTitle src={Logo} alt="logo" />
        <LoginSection>Login</LoginSection>
      </HeaderContainer>
    </MainWrapper>
  );
};

export default Header;

const MainWrapper = styled.header`
  display: flex;
  position: relative;
  position: sticky;
  z-index: 10000;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: #000;
`;

const HeaderTitle = styled.img`
  width: 80px;
  height: 70px;
  :hover {
    cursor: pointer;
  }
`;

const LoginSection = styled.div`
  position: absolute;
  right: 0;
  margin-right: 190px;
  color: white;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;
