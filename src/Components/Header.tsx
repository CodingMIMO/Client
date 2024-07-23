import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoImage src="sun1.png" alt="logo" />
        <div>CodingMIMO</div>
      </LogoContainer>

      <Nav>
        <NavItem onClick={() => navigate("/ranking")}>랭킹</NavItem>
        <NavItem onClick={() => navigate("/wrapup")}>회고</NavItem>
        <NavItem onClick={() => navigate("/login")}>로그인</NavItem>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;
