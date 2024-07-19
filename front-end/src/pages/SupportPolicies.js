import React from 'react';
import './SupportPolicies.css';

const SupportPolicies = () => {
  return (
    <div className="support-policies">
      <div className="header-support-policies">
        <img className="text-image" alt="supportPolicies-img" src="/imgs/textImg.png" />
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
        <div className="card">숙소이름(상품이름)</div>
        <div className="card">숙소이름(상품이름)</div>

      </div>
    </div>
  );
};

export default SupportPolicies;
