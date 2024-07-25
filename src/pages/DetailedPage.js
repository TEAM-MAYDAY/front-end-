import React from 'react';
import './DetailedPage.css';

const DetailedPage = () => {
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
            <div className="tag">ㄹㄹㄹㄹㄹㄹ</div>
            <div className="tag">ㅁㅁㅁ</div>
            <div className="tag"ㅇㅇㅇ></div>
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
          <div className="alarm">지금 AI 써보러가기</div>
          <div className="sidebar">sidebar</div>
        </div>
      </main>
    </div>
  );
}

export default DetailedPage;
