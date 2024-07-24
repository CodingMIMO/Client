import React, { useState } from "react";
import styled from "styled-components";
import TodayRanking from "../Components/TodayRanking";
import TotalRanking from "../Components/TotalRanking";

export default function RankingPage() {
  const [selectedTab, setSelectedTab] = useState("today");

  return (
    <Container>
      <Header>
        <Title>코딩미모 랭킹</Title>
        <Subtitle>
          <Tab
            isSelected={selectedTab === "today"}
            onClick={() => setSelectedTab("today")}
          >
            오늘의 랭킹
          </Tab>
          <Tab
            isSelected={selectedTab === "total"}
            onClick={() => setSelectedTab("total")}
          >
            누적 랭킹
          </Tab>
        </Subtitle>
      </Header>
      <Content>
        {selectedTab === "today" && <TodayRanking />}
        {selectedTab === "total" && <TotalRanking />}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const Tab = styled.div<{ isSelected: boolean }>`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
  border-bottom: ${({ isSelected }) =>
    isSelected ? "2px solid black" : "none"};
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;
