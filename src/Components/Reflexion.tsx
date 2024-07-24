import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  onNext: () => void;
}

const Reflexion: React.FC<Props> = ({ onNext }) => {
  const [reflection, setReflection] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Container>
      <Title>
        오늘의 미라클모닝 성공을 축하드려요!
        <Title>회고를 작성하고 나만의 프로필 이미지를 만들어보세요.</Title>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Label>오늘의 회고 작성</Label>
        <TextArea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="오늘은 코딩미모 초기세팅을 했다. 너무 좋다"
        />
        <button type="submit">제출하기</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  button {
    align-self: flex-end;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #ffe14f;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;

  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export default Reflexion;
