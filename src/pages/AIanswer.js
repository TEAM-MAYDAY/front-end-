// import React from 'react';

// const AIanswer = ({ data }) => {
//     return (
//         <div className="aianswer-container">
//             <h2>AI Answer</h2>
//             <p>{data.answer}</p> {/* 백엔드에서 받은 데이터 사용 */}
//         </div>
//     );
// };

// export default AIanswer;
import React, { useState, useEffect, useRef } from 'react';
import './AIanswer.css';
import { useLocation } from 'react-router-dom';

const AIanswer = () => {

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
const location = useLocation();
const { data } = location.state || { data: null };

const backpage = () => {
  window.history.back();
}

    return (
        <div className="container">
        <img className="img-container" alt="img-container" src="imgs/Landing-BG.png" />
        <main className="main">
          <div className="left-sidebar-container">
            <img alt="illust" src="imgs/ilust.png" className="illust2"/>
            <button className="back-btn" onClick={backpage}>&lt;-돌아가기</button>
          </div>
            <div className="content">
              <div className="qeustion-section">
                <div className="question-box">
                  <div className="question-num">1</div>
                  <div className="question-text">
                    지원동기
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                  // data[0].content ~ data[2].content 값으로 데이터 접근
                    value={data[0].content}
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
              <div className="qeustion-section">
                <div className="question-box">
                  <div className="question-num">2</div>
                  <div className="question-text">
                    여행계획
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                    value={data[1].content}
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
              <div className="qeustion-section">
                <div className="question-box">
                  <div className="question-num">3</div>
                  <div className="question-text">
                    홍보계획
                  </div>
                </div>
                <div className="input-guide"></div>
                <div className='input-field1'>
                  <textarea
                    value={data[2].content}
                    className='textarea-box'
                    placeholder="데이터가 없습니다!"
                    rows="5" // 초기 행 높이 설정
                  />
              </div>
            </div>
            </div>
            </div>
            </div>
            <div className="right-sidebar-container">
            <div className="section1"></div>
            {/* <div className="section2"></div> */}
          </div>
        </main>

          </div>
    );
};

export default AIanswer;