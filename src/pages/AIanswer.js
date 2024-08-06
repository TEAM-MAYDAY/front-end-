import React, { useState, useEffect, useRef } from 'react';
import './AIanswer.css';
import { useLocation } from 'react-router-dom';

const AIanswer = () => {

  const location = useLocation();
  const { data, userInfo } = location.state || { data: {}, userInfo: {} };
      // 데이터가 존재하는지 확인하고, 기본값을 설정합니다.
      const content = data.length > 0 ? data[0].content : "No content available";
      const job = userInfo.job || "N/A";
      const purpose = userInfo.purpose || "N/A";

useEffect(() => {
    window.scrollTo(0, 0);
 }, []);    
// const [inputValue1, setInputValue1] = useState('');
// const [inputValue2, setInputValue2] = useState('');
// const [inputValue3, setInputValue3] = useState('');
  // 초기 상태를 FastAPI에서 받은 데이터로 설정
  const [inputValue1, setInputValue1] = useState(data[0]?.content || '');
  const [inputValue2, setInputValue2] = useState(data[1]?.content || '');
  const [inputValue3, setInputValue3] = useState(data[2]?.content || '');

const textareaRef1 = useRef(null);
const textareaRef2 = useRef(null);
const textareaRef3 = useRef(null);


useEffect(() => {
  if (textareaRef1.current) {
    textareaRef1.current.style.height = 'auto';
    textareaRef1.current.style.height = `${textareaRef1.current.scrollHeight}px`;
  }
}, [inputValue1]);

useEffect(() => {
  if (textareaRef2.current) {
    textareaRef2.current.style.height = 'auto';
    textareaRef2.current.style.height = `${textareaRef2.current.scrollHeight}px`;
  }
}, [inputValue2]);

useEffect(() => {
  if (textareaRef3.current) {
    textareaRef3.current.style.height = 'auto';
    textareaRef3.current.style.height = `${textareaRef3.current.scrollHeight}px`;
  }
}, [inputValue3]);

//AIpage한테서 넘어온 정보 표시
// const location = useLocation();
// const { data } = location.state || { data: null };
// const location = useLocation();
// const { data, userInfo } = location.state || { data: {}, userInfo: {} };

const backpage = () => {
  window.history.back();
}  
const handleNavigation = (url) => {
  window.open(url, '_blank');
};


    return (
        <div className="AIanswercontainer">
        <img className="img-container" alt="img-container" src="imgs/Landing-BG.png" />
        <main className="AIanswermain">
            <div className="AIanswerleft-sidebar-container">
              <img alt="illust" src="imgs/ilust.png" className="illust2"/>
              <button className="back-btn" onClick={backpage}>&lt;-돌아가기</button>
            </div>
            <div className="AIanswercontent">
          <div className="AIanswerqeustion-section">
            <div className="AIanswerquestion-box">
              <div className="AIanswercontentquestion-num">1</div>
              <div className="AIanswercontentquestion-text">지원동기</div>
            </div>
            <div className="input-guide"></div>
            <div className="input-field1">
              <textarea
                ref={textareaRef1}
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                className="textarea-box"
                // placeholder="데이터가 없습니다!"
                rows="5"
              />
            </div>
          </div>
          <div className="AIanswerqeustion-section">
            <div className="AIanswerquestion-box">
              <div className="AIanswercontentquestion-num">2</div>
              <div className="AIanswercontentquestion-text">여행계획</div>
            </div>
            <div className="input-guide"></div>
            <div className="input-field1">
              <textarea
                ref={textareaRef2}
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
                className="textarea-box"
                // placeholder="데이터가 없습니다!"
                rows="5"
              />
            </div>
          </div>
          <div className="AIanswerqeustion-section">
            <div className="AIanswerquestion-box">
              <div className="AIanswercontentquestion-num">3</div>
              <div className="AIanswercontentquestion-text">홍보계획</div>
            </div>
            <div className="input-guide"></div>
            <div className="input-field1">
              <textarea
                ref={textareaRef3}
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
                className="textarea-box"
                // placeholder="데이터가 없습니다!"
                rows="5"
              />
            </div>
          </div>
        </div>
        <div className="Detailed-sidebar-box2">
            <div className="Detailed-sidebar-message2">📎 관련 사이트</div>
            <div className="Detailed-sidebar2">
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
      </main>
    </div>
  );
};

export default AIanswer;