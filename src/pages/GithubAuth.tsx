import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GitHubAuth: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>('http://localhost:8000/auth/user', { withCredentials: true });

        // 사용자 정보를 받아올 때의 데이터 타입을 명시할 수 있습니다.
        const user = response.data;
        console.log('User:', user);
        navigate('/');
      } catch (error) {
        console.error('GitHub 인증 실패', error);
        navigate('/');
      }
    };

    fetchUser();
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};

// 사용자 정보를 위한 인터페이스 정의
interface User {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
  email?: string;
}

export default GitHubAuth;
