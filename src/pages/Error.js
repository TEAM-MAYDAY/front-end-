import React from 'react';
import './Error.css';
import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    window.history.back();
  };
  const handleMainButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="errorpage">
      <div className="card">
        <img src="imgs/panda.gif" alt="Panda" className="panda-image" />
        <p /><h1 className="status-code1">503</h1>
        <h1 className="status-code2">: Unavailable Service</h1>
        <p className="message">현재 준비 중인 기능입니다.</p>
        <div className="buttons">
          <button className="back-button" onClick={handleBackButtonClick}>이전 페이지로</button>
          <button className="home-button"onClick={handleMainButtonClick}>메인화면</button>
        </div>
      </div>
    </div>
  );
};

export default Error;
