import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import './SupportPolicies.css';

const SupportPolicies = () => {

    //jeju -> 제주도 이런식으로 찐화면에 뜨는건 한글로 함.
    const regionMap = {
        jeonbuk: '전북',
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
      jeonbuk: false,
      gangwon: false,
      jeju: false,
      busan: false,
      chungnam: false
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/data2.json');
          setLocations(response.data);
          setFilteredLocations(response.data); // 처음에는 모든 데이터를 표시
        } catch (err) {
          setError('데이터를 가져오는 데 오류가 발생했습니다.');
        } finally {
          setLoading(false);
        }
      };    
      fetchData();
    }, []);
    //서버 api연결 부분
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://api.mayday-spring.store:8080/api/v1/location/all');
    //       const items = response.data.items;
    //       setLocations(items);
    //       setFilteredLocations(items); 
    //     } catch (err) {
    //       if (err.response) {
    //       // 서버 응답이 있는 경우 (2xx 범위 외의 상태 코드)
    //         if (err.response.status === 404) {
    //           console.log('서버에서 데이터를 찾을 수 없습니다.');
    //         } else if (err.response.status === 500) {
    //           console.log('서버에 문제가 있습니다. 잠시 후 다시 시도해주세요.');
    //         } else {
    //           console.log(`서버 오류: ${err.response.status}`);
    //         }
    //       } else if (err.request) {
    //         // 요청이 이루어졌으나 응답을 받지 못한 경우
    //         console.log('서버와 통신할 수 없습니다. 네트워크를 확인해주세요.');
    //       } else {
    //         // 기타 오류
    //         console.log(`오류가 발생했습니다: ${err.message}`);
    //       }
    //     } finally {
    //       setLoading(false);
    //     }
    //   };    
    //   fetchData();
    // }, []);

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

    const noRegionSelected = !filters.jeonbuk && !filters.gangwon && !filters.jeju && !filters.busan && !filters.chungnam;

    const filtered = locations.filter(location => {
      const regionMatch = noRegionSelected || filters[location.region];
      
      const attributeMatch = (!filters.monitor || location.monitor)
        && (!filters.conferenceRoom || location.conferenceRoom)
        && (!filters.cafe || location.officeType === '카페형 오피스')
        && (!filters.coworkingOffice || location.officeType === '공유형 오피스') 
        && (!filters.parking || location.parking)
        && (!filters.phoneBooth || location.phoneBooth);
      
      return regionMatch && attributeMatch;
      });

    setFilteredLocations(filtered);
  };
    
      const navigate = useNavigate(); //각 컨테이너 눌렀을때 DetailedPage.js로이동

      // const handleCardClick = (location) => {
      //   console.log('Clicked location:', location);
      //   navigate('/detailed', { state: { location } }); // 페이지 이동 및 데이터 전달
      // };


      const handleCardClick = () => {
        // 특정 locationId를 강제 설정하여 항상 같은 페이지로 이동
        navigate('/detailed', { state: { locationId: 3 } });
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
                    전화부스
                </button>
            </div>
            <div className="button-row">
                <button
                    className={`category-button ${clickedButtons.jeonbuk ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('jeonbuk')}
                >
                    전북
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
        <div key={location.locationId + '-' + index} className="card-container" onClick={() => handleCardClick(location)}> 
            <div className="card-content">
              <img className="MaincardImg"src={location.imageUrl} alt={`${location.name} 이미지`} />
              <h2>{location.name}</h2>
              <h5>{` ${location.address}`}</h5>
              
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default SupportPolicies;
