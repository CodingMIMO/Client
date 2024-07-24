import React from "react";
import styled from "styled-components";

const totalRankings = [
  { username: "user1", days: 30, avatar: "profile2.jpg" },
  // 다른 데이터 추가 가능
];

export default function TotalRanking() {
  return (
    <Container>
      {totalRankings.map((user, index) => (
        <RankingItem key={index}>
          <Avatar src={user.avatar} alt={user.username} />
          <Username>{user.username}</Username>
          <Days>연속 {user.days}일 달성</Days>
        </RankingItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RankingItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

const Days = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
