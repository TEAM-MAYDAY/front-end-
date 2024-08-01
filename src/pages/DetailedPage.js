import React, { useEffect } from 'react';
import './DetailedPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const regionMap = {
  seoul: '서울',
  gangwon: '강원도',
  jeju: '제주도',
  busan: '부산',
  chungnam: '충남'
};

const DetailedPage = () => {
  const location = useLocation(); // 전달된 상태를 받기 위한 useLocation 훅
  const { location: locationData } = location.state || { location: {} }; // 전달된 데이터 추출
    // 태그 생성
    const tags = [
      // locationData.address,
      // regionMap[locationData.region] || locationData.region,
      locationData.monitor && '모니터',
      locationData.conferenceRoom && '회의실',
      locationData.parking && '주차공간',
      locationData.phoneBooth && '폰부스',
      locationData.officeType
    ].filter(Boolean); // truthy 값만 필터링
    
  const navigate = useNavigate(); //ai입력페이지로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate('/aipage');
  };
  return (
    <div className="container">
    <div className="gallery">
        <img className="large-image" src={locationData.imageUrl} alt="Gallery" /> {/* 이미지 URL 사용 */}
    </div>
    <main className="main">
      <div className="content">
        <section className="content-header">
          <h2>{locationData.name}</h2> {/* 이름 출력 */}
          <div className="lined-heading">한줄 소개글</div>
        </section>
        <section className="content-tagbar">
          {tags.map((tag, index) => (
            <div key={index} className="tag"># {tag}</div> 
          ))}
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
        <div className="sidebar-container">
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
          <div className="sidebar-box">
            <div className="sidebar-message">📎 관련 사이트</div>
            <div className="sidebar"></div>         
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailedPage;