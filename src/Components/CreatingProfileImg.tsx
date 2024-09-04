import React, { useEffect } from "react";
import styled from "styled-components";
import { PacmanLoader } from "react-spinners";
interface Props {
  onNext: () => void;
}
const CreatingProfileImage: React.FC<Props> = ({ onNext }) => {

  return (
    <Container>
      <p>stable-diffusion이 작성한 회고 내용을 바탕으로 이미지를 만들고 있어요!</p>
      <Spinner>
        <PacmanLoader color="#FFE14F" size={50} />
      </Spinner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  p {
    font-size: 26px;
    text-align: center;
    margin-bottom: 100px;
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export default CreatingProfileImage;
