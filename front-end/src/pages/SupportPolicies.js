import React from 'react';
import './SupportPolicies.css';

const SupportPolicies = () => {
  return (
    <div className="support-policies">
      <div className="header-support-policies">
        <div className="header-content">
          <h2>워케이션 지원 정책</h2>
          <p>여기서 한 눈에 찾아보세요 👀</p>
          <p className="subtext">일일 최대 n만원 혜택 받고<br />부산, 속초, 제주로</p>
        </div>
      </div>
      <div className="button-container">
        <button className="category-button">바다🌊</button>
        <button className="category-button">네트워킹파티🎉</button>
        <button className="category-button">공유오피스</button>
        <button className="category-button">더블모니터🖥️</button>
      </div>
      <div className="cards">
        <div className="card">숙소이름(상품이름)</div>
        <div className="card">숙소이름(상품이름)</div>
        <div className="card">숙소이름(상품이름)</div>
        <div className="card">숙소이름(상품이름)</div>
        <div className="card">숙소이름(상품이름)</div>
      </div>
    </div>
  );
};

export default SupportPolicies;
