import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <img className="landing-image" alt="Landing Background" src="/imgs/Landing-BG.png" />
      <div className="main-text">
        <h1>우리가 원하는 새로운 방식</h1>
        <h2>Workation</h2>
      </div>
    </div>
  );
};

export default Landing;
