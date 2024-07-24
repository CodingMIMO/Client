import React from "react";
import styled from "styled-components";

export default function Mainpage() {
  return (
    <Container>
      <div>코딩 미모와 함께 미라클코딩모닝하세요~!</div>
      <img src="sun2.png" alt="sun2" />
      <Introduce>
        <img src="people1.png" alt="person1" />
        <div>오전 5시부터 9시까지 깃허브 잔디를 심어보세요.</div>
      </Introduce>
      <Introduce>
        <div>회고를 작성하면 나만의 프로필 이미지를 만들 수 있어요!</div>{" "}
        <img src="people2.png" alt="person1" />
      </Introduce>
      <Introduce>
        <img src="people3.png" alt="person1" />
        <div>코딩미모 사용자와 디스코드로 모각공도 즐겨보세요~!</div>
      </Introduce>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 30%;
  }
  div {
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin: 30px 20px;
  }
`;

const Introduce = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    font-size: 18px;
  }
  align-items: center;
  img {
    width: 30%;
  }
`;
