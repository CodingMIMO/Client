import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Clockpage() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(10, 0, 0, 0); // 오전1 10시

      if (now > target) {
        setTimeLeft("미션 마감 시간이 지났습니다.");
      } else {
        const difference = target.getTime() - now.getTime();
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${hours}시간 ${minutes}분 ${seconds}초 남았어요!`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}시 ${minutes}분 ${seconds}초`;
  };
  if (currentTime.getHours() >= 22) {
    return (
      <Container>
        <p>오늘의 미션이 마감됐어요!</p>
        <button onClick={() => navigate("/wrapup")}>회고 쓰러 가기</button>
      </Container>
    );
  }

  return (
    <Container>
      <img src="clock.png" alt="clock" />
      <p>{formatTime(currentTime)}</p>
      <p>오늘의 미션 마감까지 {timeLeft}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  img {
    width: 20%;
  }
  p {
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }
  button {
    border-radius: 50px;
    background: #ffe14f;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 20px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;
