import React from 'react';
import './errorpage.css';

const errorpage = () => {
  return (
    <div className="errorpage">
      <div className="card">
        <img src="imgs/panda.png" alt="Panda" className="panda-image" />
        <h1 className="status-code">503 : Unavailable Service</h1>
        <p className="message">현재 준비 중인 기능입니다</p>
        <div className="buttons">
          <button className="back-button">이전 페이지로</button>
          <button className="home-button">메인화면</button>
        </div>
      </div>
    </div>
  );
};

export default errorpage;
