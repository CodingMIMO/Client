import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoImage src="sun1.png" alt="logo" />
        <div>
          <Title>
            당하그
          </Title>
          <SubTitle>
            <BlackText>당</BlackText>신의 <BlackText>하</BlackText>루를 <BlackText>그</BlackText>려드립니다.
          </SubTitle>
        </div>
      </LogoContainer>

      <Nav>
        <NavItem onClick={() => navigate("/ranking")}>랭킹</NavItem>
        <NavItem onClick={() => navigate("/wrapup")}>회고</NavItem>
        <NavItem onClick={() => navigate("/mypage")}>마이페이지</NavItem>
        <NavItem onClick={() => navigate("/login")}>로그인</NavItem>
        <NavItem onClick={() => navigate("/study")}>스터디</NavItem>
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
  width: 100px;
  height: 100px;
  margin-right: 20px;
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

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: gray;
`;

const BlackText = styled.span`
  color: #FFE14F;
`;
