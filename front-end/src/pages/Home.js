import React from "react";
import { ButtonWrapper } from "../components/ButtonWrapper";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      {/* Main Section */}
      <div className="main-section">
        <img className="main-image" alt="Main" src="/imgs/Landing-BG.png" />
        <div className="controls">
          <div className="control-button">
            <img className="control-image" alt="Left-Button" src="/imgs/Left-Button.png" />
          </div>
          <div className="control-button">
            <img className="control-image" alt="Pause-Button" src="/imgs/pause.png" />
          </div>
          <div className="control-button">
            <img className="control-image" alt="Right-Button" src="/imgs/Right-Button.png" />
          </div>
        </div>
        <div className="main-text">
          <h1>우리가 원하는 새로운 방식 Workation</h1>
        </div>
      </div>

      {/* Support Policies Section */}
      <div className="support-policies">
        <h2>워케이션 지원 정책</h2>
        <p>여기서 한 눈에 찾아보세요 👀</p>
        <div className="cards">
          <div className="card">숙소이름(상품이름)</div>
          <div className="card">숙소이름(상품이름)</div>
          <div className="card">숙소이름(상품이름)</div>
          <div className="card">숙소이름(상품이름)</div>
          <div className="card">숙소이름(상품이름)</div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <ButtonWrapper buttonText="바다🌊" className="category-button" />
        <ButtonWrapper buttonText="네트워킹파티🎉" className="category-button" />
        <ButtonWrapper buttonText="공유오피스" className="category-button" />
        <ButtonWrapper buttonText="Category" className="category-button" />
        <ButtonWrapper buttonText="Cat2" className="category-button" />
        <ButtonWrapper buttonText="Cat3" className="category-button" />
        <ButtonWrapper buttonText="Cat4" className="category-button" />
      </div>
    </div>
  );
};

export default Home;

