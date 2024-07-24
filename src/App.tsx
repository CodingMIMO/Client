import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Components/Header";
import Mainpage from "./pages/MainPage";
import Ranking from "./pages/RankingPage";
import Wrapup from "./pages/WrapupPage";
import LoginPage from "./pages/LoginPage";
import Clockpage from "./pages/Clockpage";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/wrapup" element={<Wrapup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/clock" element={<Clockpage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
