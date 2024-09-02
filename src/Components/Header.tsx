import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 커스텀 props 타입 정의
interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Header() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavItemClick = (path: string) => {
    navigate(path);
    setSidebarOpen(false);  // 사이드바 닫기
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoImage src="sun1.png" alt="logo" />
        <div>
          <Title>당하그</Title>
          <SubTitle>
            <BlackText>당</BlackText>신의 <BlackText>하</BlackText>루를 <BlackText>그</BlackText>려드립니다.
          </SubTitle>
        </div>
      </LogoContainer>

      <HamburgerMenu isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

      <Nav isSidebarOpen={isSidebarOpen}>
        <NavItem onClick={() => handleNavItemClick("/ranking")}>랭킹</NavItem>
        <NavItem onClick={() => handleNavItemClick("/wrapup")}>회고</NavItem>
        <NavItem onClick={() => handleNavItemClick("/mypage")}>마이페이지</NavItem>
        <NavItem onClick={() => handleNavItemClick("/login")}>로그인</NavItem>
        <NavItem onClick={() => handleNavItemClick("/study")}>스터디</NavItem>
      </Nav>
    </HeaderContainer>
  );
}

// HamburgerMenu에 대한 props 타입 정의
interface HamburgerMenuProps {
  isSidebarOpen: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const HamburgerMenu = styled.div<HamburgerMenuProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;
  cursor: pointer;
  z-index: 11;

  span {
    width: 100%;
    height: 3px;
    background-color: black;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) => (props.isSidebarOpen ? "rotate(45deg) translate(5px, 5px)" : "none")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isSidebarOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.isSidebarOpen ? "rotate(-45deg) translate(5px, -5px)" : "none")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav<SidebarProps>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${(props) => (props.isSidebarOpen ? "0" : "-250px")};
    width: 250px;
    height: 100%;
    background-color: #E4E4E4;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 10;
    padding-top: 30px;
  }
`;

const NavItem = styled.div`
  cursor: pointer;

  &:hover {
    color: #EAAA30;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: medium;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: gray;
`;

const BlackText = styled.span`
  color: #ffe14f;
`;
