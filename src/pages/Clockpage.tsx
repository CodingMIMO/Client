import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CITY = process.env.REACT_APP_CITY;

export default function Clockpage() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState("");
  const [weather, setWeather] = useState<{
    temp: number;
    description: string;
    icon: string;
  } | null>(null);

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
      target.setHours(22, 0, 0, 0); // 오후 10시

      if (now > target) {
        setTimeLeft("미션 마감 시간이 지났습니다.");
      } else {
        const difference = target.getTime() - now.getTime();
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${hours}시간 ${minutes}분 ${seconds}초`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeather();
  }, []);

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
      {weather && (
        <WeatherContainer>
          <img src={weather.icon} alt="weather icon" />
          <p>
            현재 {CITY}의 날씨: {weather.temp}°C, {weather.description}
          </p>
        </WeatherContainer>
      )}
      <img src="clock.png" alt="clock" />
      <p>
        오늘의 미션 마감까지
        <Time> {timeLeft} </Time>
        남았어요!
      </p>
      <p>현재 시간 : {formatTime(currentTime)}</p>
      <button onClick={() => navigate("/wrapup")}>오늘의 계획 쓰러 가기</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;

  img {
    margin-top: 5%;
    width: 20%;
    max-width: 200px;
  }
  p {
    font-size: 25px;
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

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  p {
    font-size: 18px;
    text-align: center;
  }
`;

const Time = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #ff4c4c;
`;
