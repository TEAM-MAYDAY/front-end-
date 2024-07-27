import React, { useEffect } from 'react';
import './DetailedPage.css';
import { useNavigate } from 'react-router-dom';

const DetailedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate('/aiproposal');
  };
  return (
    <div className="container">
      <div className="gallery">
        <img className="large-image" src="/imgs/Landing-BG.png" alt="Gallery" />
        <img className="normal-image" src="/imgs/Landing-BG.png" alt="Gallery" />
        <img className="TopRightRound-image" src="/imgs/Landing-BG.png" alt="Gallery" />
        <img className="normal-image" src="/imgs/Landing-BG.png" alt="Gallery" />
        <img className="BottomRightRound-image" src="/imgs/Landing-BG.png" alt="Gallery" />
      </div>
      <main className="main">
        <div className="content">
          <section className="content-header">
            <h2>춘천 베어스호텔</h2>
            <div className="lined-heading">한줄 소개글</div>
          </section>
          <section className="content-tagbar">
            <div className="tag"></div>
            <div className="tag"></div>
            <div className="tag"></div>
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
