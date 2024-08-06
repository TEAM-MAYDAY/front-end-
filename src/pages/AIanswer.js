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
const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');

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
                  <div className="AIanswercontentquestion-text">
                    지원동기
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                    ref={textareaRef1}
                  // data[0].content ~ data[2].content 값으로 데이터 접근
                    // value={data[0].content}
                    value={data[0]?.content || ''} // 조건부 렌더링 및 기본값 설정
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
              </div>
              <div className="AIanswerqeustion-section">
                <div className="AIanswerquestion-box">
                  <div className="AIanswercontentquestion-num">2</div>
                  <div className="AIanswercontentquestion-text">
                    여행계획
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                    ref={textareaRef2}
                    // value={data[1].content}
                    value={data[1]?.content || ''} // 조건부 렌더링 및 기본값 설정
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
              </div>
              <div className="AIanswerqeustion-section">
                <div className="AIanswerquestion-box">
                  <div className="AIanswercontentquestion-num">3</div>
                  <div className="AIanswercontentquestion-text">
                    홍보계획
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                    ref={textareaRef3}
                    // value={data[2].content}
                    value={data[2]?.content || ''} // 조건부 렌더링 및 기본값 설정
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
            </div>
            </div>
            <div className="AIanswercontentright-sidebar-container">
              {/* <div className="section2"></div> */}
              <div className='AIanswercontentsection1'></div>
            </div>


          </main>

      </div>

     
    );
};

export default AIanswer;
