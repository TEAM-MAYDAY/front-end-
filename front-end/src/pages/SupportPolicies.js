import React, { useState } from 'react';
import './SupportPolicies.css';

const SupportPolicies = () => {

      const [clickedButtons, setClickedButtons] = useState({
        monitor: false,
        cafeStyleOffice: false,
        coworkingOffice: false,
        Parking: false,
        PhoneBoothl: false
    });

      const handleButtonClick = (buttonName) => {
          setClickedButtons(prevState => ({
              ...prevState,
              [buttonName]: !prevState[buttonName],
          }));
      };


  return (
    <div className="support-policies">
      <div className="header-support-policies">
        <img className="text-image" alt="supportPolicies-img" src="/imgs/textImg.png" />
      </div>
      <div className="button-container">
                <button
                    className={`category-button ${clickedButtons.monitor ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('monitor')}
                >
                    모니터
                </button>
                <button
                    className={`category-button ${clickedButtons.cafeStyleOffice ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('cafeStyleOffice')}
                >
                    카페형 오피스
                </button>
                <button
                    className={`category-button ${clickedButtons.coworkingOffice ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('coworkingOffice')}
                >
                    공유형 오피스
                </button>
                <button
                    className={`category-button ${clickedButtons.Parking ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Parking')}
                >
                    주차공간
                </button>
                <button
                    className={`category-button ${clickedButtons.PhoneBooth ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('PhoneBooth')}
                >
                    PhoneBooth
                </button>
      </div>
      <div className="cards">
        <div className="card1">숙소이름(상품이름)</div>
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
