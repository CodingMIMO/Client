import React from "react";
import styled from "styled-components";

interface Props {
  onUseImage: () => void;
}

const ProfileImageCreated: React.FC<Props> = ({ onUseImage }) => {
  const handleSaveImage = () => {
    const link = document.createElement("a");
    link.href = "profile1.jpg";
    link.download = "코딩미모 프로필 이미지.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <ProfileImage src="profile1.jpg" alt="프로필 이미지" />
      <p>이미지를 만들었어요!</p>
      <ButtonContainer>
        <button onClick={handleSaveImage}>이미지 저장</button>
        <button onClick={onUseImage}>프로필 이미지로 사용</button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 60vh;
  p {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  button{ padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #ffe14f;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export default ProfileImageCreated;
