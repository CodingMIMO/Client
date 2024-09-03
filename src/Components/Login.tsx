import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      localStorage.setItem("token", response.data.access_token);
      navigate("/");

    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("잘못된 이메일 또는 비밀번호입니다.");
        } else {
          setError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
      } else if (error.request) {
        setError("서버에 연결할 수 없습니다. 인터넷 연결을 확인해주세요.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
      console.error("Login failed:", error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // 회원가입 페이지로 이동
  };

  return (
    <Container>
      <Content>
        <Logo src="sun2.png" alt="Logo" />
        <Title>로그인하고 당하그와 함께 성장해봐요!</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Email:</Label>
          <Input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Label>Password:</Label>
          <Input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton type="submit">Login</SubmitButton>
          <RegisterButton type="button" onClick={handleRegisterRedirect}>
            회원가입
          </RegisterButton>
        </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  transition: all 0.3s ease;
  margin-bottom: 15px;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
`;

const RegisterButton = styled.button`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  background-color: #ff6b6b;
  color: white;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff4d4d;
    transform: scale(1.05);
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
`;
