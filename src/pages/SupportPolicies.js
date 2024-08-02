import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

    //jeju -> 제주도 이런식으로 찐화면에 뜨는건 한글로 함.
    const regionMap = {
        seoul: '서울',
        gangwon: '강원도',
        jeju: '제주도',
        busan: '부산',
        chungnam: '충남'
      };

      const getRegionName = (region) => {
        return regionMap[region] || region;
      };

    const [locations, setLocations] = useState([]);
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [clickedButtons, setClickedButtons] = useState({
      monitor: false,
      conferenceRoom: false,
      cafe: false,
      coworkingOffice: false,
      parking: false,
      phoneBooth: false,
      seoul: false,
      gangwon: false,
      jeju: false,
      busan: false,
      chungnam: false
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('/data2.json');
    //       setLocations(response.data);
    //       setFilteredLocations(response.data); // 처음에는 모든 데이터를 표시
    //     } catch (err) {
    //       setError('데이터를 가져오는 데 오류가 발생했습니다.');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };    
    //   fetchData();
    // }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://ec2-15-164-115-210.ap-northeast-2.compute.amazonaws.com:8080/api/v1/location/all');
          if (response.status !== 200) {
            console.log("HTTP오류");
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const items = response.data.items;
          if (!items || items.length === 0) {
            console.log("데이터 X");
            throw new Error('데이터가 없습니다.');
          }
          setLocations(items);
          setFilteredLocations(items); // 처음에는 모든 데이터를 표시
        } catch (err) {
          if (err.response) {
            // 서버 응답이 있는 경우 (2xx 범위 외의 상태 코드)
            if (err.response.status === 404) {
              console.log('서버에서 데이터를 찾을 수 없습니다.');
            } else if (err.response.status === 500) {
              console.log('서버에 문제가 있습니다. 잠시 후 다시 시도해주세요.');
            } else {
              console.log(`서버 오류: ${err.response.status}`);
            }
          } else if (err.request) {
            // 요청이 이루어졌으나 응답을 받지 못한 경우
            console.log('서버와 통신할 수 없습니다. 네트워크를 확인해주세요.');
          } else {
            // 기타 오류
            console.log(`오류가 발생했습니다: ${err.message}`);
          }
        } finally {
          setLoading(false);
        }
      };    
      fetchData();
    }, []);

  // 필터 상태와 location 데이터를 로드한 후에 필터링 함수 호출
  useEffect(() => {
    if (locations.length > 0) {
      filterLocations(clickedButtons);
    }
  }, [clickedButtons, locations]);

  const handleButtonClick = (key) => {
    setClickedButtons(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const filterLocations = (filters) => {
    if (!filters) return; // filters가 정의되지 않은 경우를 처리

    const noRegionSelected = !filters.seoul && !filters.gangwon && !filters.jeju && !filters.busan && !filters.chungnam;

    const filtered = locations.filter(location => {
      const regionMatch = noRegionSelected || filters[location.region];
      
      const attributeMatch = (!filters.monitor || location.monitor)
        && (!filters.conferenceRoom || location.conferenceRoom)
        && (!filters.cafe || location.officeType === 'cafe')
        && (!filters.coworkingOffice || location.officeType === 'coworkingOffice') //백엔드에서 none카페형 오피스를 정의한걸로 이름 바꾸기 ㄲ
        && (!filters.parking || location.parking)
        && (!filters.phoneBooth || location.phoneBooth);
      
      return regionMatch && attributeMatch;
    });

    setFilteredLocations(filtered);
  };
    
      const navigate = useNavigate(); //각 컨테이너 눌렀을때 DetailedPage.js로이동

      const handleCardClick = (location) => {
        navigate('/detailed', { state: { location } }); // 페이지 이동 및 데이터 전달
      };
    

  return (
    <div className="support-policies">
      <div className="header-support-policies">
        <img className="text-image" alt="supportPolicies-img" src="/imgs/textImg.png" />
      </div>
      <div className="button-container">
          <div className="button-row">
                <button
                    className={`category-button ${clickedButtons.monitor ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('monitor')}
                >
                    모니터
                </button>
                <button
                    className={`category-button ${clickedButtons.conferenceRoom ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('conferenceRoom')}
                >
                    회의실
                </button>
                <button
                    className={`category-button ${clickedButtons.cafe ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('cafe')}
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
                    className={`category-button ${clickedButtons.parking ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('parking')}
                >
                    주차공간
                </button>
                <button
                    className={`category-button ${clickedButtons.phoneBooth ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('phoneBooth')}
                >
                    phoneBooth
                </button>
            </div>
            <div className="button-row">
                <button
                    className={`category-button ${clickedButtons.seoul ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('seoul')}
                >
                    서울
                </button>
                <button
                    className={`category-button ${clickedButtons.gangwon ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('gangwon')}
                >
                    강원
                </button>
                <button
                    className={`category-button ${clickedButtons.jeju ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('jeju')}
                >
                    제주
                </button>
                <button
                    className={`category-button ${clickedButtons.busan ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('busan')}
                >
                    부산
                </button>
                <button
                    className={`category-button ${clickedButtons.chungnam ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('chungnam')}
                >
                    충남
                </button>
            </div>
      </div>
      {/* <div className="cards">
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
      </div> */}
      <div className="cards">
        {filteredLocations.map((location, index) => (
          // key 속성 수정: location.locationId에 index를 추가하여 고유한 값을 사용
        //   <div key={location.locationId + '-' + index} className="card-container">
        <div key={location.locationId + '-' + index} className="card-container" onClick={() => handleCardClick(location)}> 
           <div className="card-image">
              <img src={location.imageUrl} alt={`${location.name} 이미지`} />
            </div>
            <div className="card-content">
              {/* <div className="support-badge">10만원지원금</div> */}
              <h2>{location.name}</h2>
              {/* <h5>{`${location.region} ${location.address}`}</h5> */}
              <h5>{`${getRegionName(location.region)} ${location.address}`}</h5>
              <p>2박 3일</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default SupportPolicies;
