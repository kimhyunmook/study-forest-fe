import React from "react";
import "./Header.css";
import TimeDisplay from "./Timedisplay";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="studyname">연우의 개발공장</h1>
        <br />
        <p>현재 시간</p>
        <p className="time">
          <TimeDisplay />
        </p>
      </div>
      <div className="header-right">
        <button className="nav-button" onClick={() => navigate("/focuspage")}>
          오늘의 집중 &gt;
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          홈 &gt;
        </button>
      </div>
    </header>
  );
};

export default Header;