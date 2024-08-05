import React, { useEffect, useState } from 'react';
import './DetailedPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useNavigate, useLocation } from 'react-router-dom';

// const regionMap = {
//   seoul: '서울',
//   gangwon: '강원도',
//   jeju: '제주도',
//   busan: '부산',
//   chungnam: '충남'
// };
  

const DetailedPage = () => {
  const location = useLocation(); // 전달된 상태를 받기 위한 useLocation 훅
  // const { location: locationData } = location.state || { location: {} }; // 전달된 데이터 추출
  const { locationId } = useParams(); // URL에서 locationId를 가져옴
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://ec2-15-164-115-210.ap-northeast-2.compute.amazonaws.com:8080/api/v1/location/info/${locationId}`);
  //       setLocationData(response.data);
  //       console.log('Fetched location data:', response.data); // Fetch된 데이터 로그 출력
  //     } catch (err) {
  //       setError('데이터를 가져오는 데 오류가 발생했습니다.');
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []); 

  // 태그 생성
    // const tags = [
    //   // locationData.address,
    //   // regionMap[locationData.region] || locationData.region,
    //   locationData.monitor && '모니터',
    //   locationData.conferenceRoom && '회의실',
    //   locationData.parking && '주차공간',
    //   locationData.phoneBooth && '폰부스',
    //   locationData.officeType
    // ].filter(Boolean); // truthy 값만 필터링
    // console.log('Tags:', tags); // Tags 로그 출력

    
  const navigate = useNavigate(); //ai입력페이지로 이동
    const handleNavigation = (url) => {
      window.open(url, '_blank');
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate('/aipage');
  };
  return (
    <div className="Detailed-container">
    <div className="Detailed-gallery">
        {/* <img className="large-image" src={locationData.imageUrl} alt="Gallery" /> */}
        <img className="large-image" src="imgs/Landing-BG.png" alt="Gallery" /> 
    </div>
    <main className="main">
      <div className="Detailed-content">
        <section className="content-header">
          {/* <h2>{locationData.name}</h2> */}
          <h2>가제</h2>
          <div className="lined-heading">한줄 소개글</div>
        </section>
        <section className="content-tagbar">
          {/* {tags.map((tag, index) => (
            <div key={index} className="tag"># {tag}</div> 
          ))} */}
        </section>
        <section className="content-detail">
          <div className="share-office">
            <h2>공유 오피스</h2>
            <h5>본문(숙소 설명 및)</h5>
          </div>
          <div className="share-office">
            <h2>숙소</h2>
            <h5>본문(숙소 설명 및)</h5>
          </div>
          <div className="share-office">
            <h2>제공 혜택</h2>
            <h5>본문(숙소 설명 및)</h5>
          </div>
          <div className="share-office">
            <h2>기타 사항</h2>
            <h5>본문(숙소 설명 및)</h5>
          </div>
        </section>
      </div>
        <div className="Detailed-sidebar-container">
          <div className="alarm-section">
            <button onClick={handleClick} className="alarm">Ai 도움받고 신청하기</button>
            <div className="alarm-message">
                🔼 이 공고는 3가지 소개글이 필요해요<br/>　고민 말고 Ai와 함께 1분만에 작성!
            </div>
            <div className="alarm-sub-message">예시:</div>
            <div className="alarm-sub-message2"> 
              지원동기 | 기대하는 바 | 활동계획
            </div>
          </div>
          <div className="Detailed-sidebar-box">
            <div className="Detailed-sidebar-message">📎 관련 사이트</div>
            <div className="Detailed-sidebar">
            <div className="Detailed" onClick={() => handleNavigation('https://worcation.sba.kr/S02/1/')}>
                <h1> 1 서울기업워케이션 [퇴근만큼즐거운출근]</h1>
                <img src="imgs/Seoul.png" alt="" className="Detailed-sideImg" />
            </div>
            <div className="Detailed" onClick={() => handleNavigation('https://jejuworkation.or.kr/Supportproject')}>
                <h1> 2 제주 워케이션 </h1>
                <img src="imgs/Jeju.png" alt="" className="Detailed-sideImg" />
            </div>
            <div className="Detailed" onClick={() => handleNavigation('https://worcation.co.kr/gw')}>
                <h1> 3 강원 워케이션 </h1>
                <img src="imgs/Gangwon.png" alt="" className="Detailed-sideImg" />
            </div>
            <div className="Detailed" onClick={() => handleNavigation('https://www.busaness.com/')}>
                <h1> 4 부산 워케이션 </h1>
                <img src="imgs/Busan.png" alt="" className="Detailed-sideImg" />
            </div>
            <div className="Detailed" onClick={() => handleNavigation('https://www.cacf.or.kr/site/program/index.php')}>
                <h1> 5 충남 워케이션 (충남문화관광재단) </h1>
                <img src="imgs/Chungnam.png" alt="" className="Detailed-sideImg2" />
            </div>
            </div>         
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailedPage;