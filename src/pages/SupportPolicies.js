import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import React, { useState, useEffect } from 'react';
import './SupportPolicies.css';

const SupportPolicies = () => {
    // const [selectedFilters, setSelectedFilters] = useState([]);
    // const [allCards, setAllCards] = useState([]);
    // const [filteredCards, setFilteredCards] = useState([]);

    // // 필터 버튼 클릭 핸들러
    // const handleButtonClick = (buttonName, filter) => {
    //     setClickedButtons(prevState => ({
    //         ...prevState,
    //         [buttonName]: !prevState[buttonName],
    //     }));

    //     setSelectedFilters(prevFilters =>
    //         prevFilters.includes(filter)
    //             ? prevFilters.filter(f => f !== filter)
    //             : [...prevFilters, filter]
    //     );
    // };

    // // 백엔드 데이터 요청
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.example.com/cards');
    //             const data = await response.json();
    //             setAllCards(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // // 필터링된 카드 업데이트
    // useEffect(() => {
    //     if (selectedFilters.length === 0) {
    //         setFilteredCards(allCards);
    //     } else {
    //         setFilteredCards(allCards.filter(card => 
    //             selectedFilters.every(filter => card.categories.includes(filter))
    //         ));
    //     }
    // }, [selectedFilters, allCards]);
      const [clickedButtons, setClickedButtons] = useState({
        monitor: false,
        cafeStyleOffice: false,
        coworkingOffice: false,
        Parking: false,
        PhoneBooth: false
    });
      const handleButtonClick = (buttonName) => {
          setClickedButtons(prevState => ({
              ...prevState,
              [buttonName]: !prevState[buttonName],
          }));
      };
      const navigate = useNavigate();

      const handleDivClick = () => {
        navigate('/detailed');
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
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container"onClick={handleDivClick} >
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container"onClick={handleDivClick} >
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
            <div className="card-container" onClick={handleDivClick}>
                <div className="card-image">
                    <img src="/imgs/Landing-BG.png" alt="card-image" />
                </div>
                <div className="card-content">
                    <div className="support-badge">10만원지원금</div>
                        <h2>세인트존스호텔</h2>
                        <h5>강원 강릉</h5>
                        <p>2박 3일</p>
                </div>
            </div>
      </div>
      {/* <div className="cards">
                {filteredCards.map(card => (
                    <div className="card-container" key={card.id}>
                        <div className="card-image">
                            <img src={card.imageUrl} alt={card.title} />
                        </div>
                        <div className="card-content">
                            <div className="support-badge">{card.support}</div>
                            <h2>{card.title}</h2>
                            <p>{card.location}</p>
                            <p>{card.duration}</p>
                        </div>
                    </div>
                ))}
            </div> */}
    </div>
  );
};

export default SupportPolicies;
