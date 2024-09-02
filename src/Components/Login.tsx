
import React from "react";
import styled from "styled-components";

export default function Login() {
  const onClickSocialLogin = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = "http://localhost:3000/auth/callback";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user,user:email`;
    
    if (clientId) {
      console.log("Client ID:", clientId);
      window.location.href = githubAuthUrl;
    } else {
      console.error("GitHub Client ID is missing. Make sure it's correctly set in the .env file.");
    }
  };

  return (
    <Container>
      <Content>
        <Logo src="sun2.png" alt="Logo" />
        <Title>로그인하고 당하그와 함께 성장해봐요!</Title>
        <Description>
          GitHub 계정을 통해 간편하게 로그인하고, 하루 계획과 회고를 기록해보세요!
        </Description>
        <LoginButton onClick={onClickSocialLogin}>
          GitHub로 3초 만에 로그인하기
        </LoginButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
`;

const LoginButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
`;
