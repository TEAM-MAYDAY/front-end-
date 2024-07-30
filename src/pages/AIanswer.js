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
import './AIpage.css';
import { useLocation } from 'react-router-dom';

const AIanswer = () => {
//  const AIanswer = ({data}) => {

useEffect(() => {
    window.scrollTo(0, 0);
 }, []);    
const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');

const [isClicked1, setIsClicked1] = useState(false);
const [isClicked2, setIsClicked2] = useState(false);
const [isClicked3, setIsClicked3] = useState(false);

const textareaRef1 = useRef(null);
const textareaRef2 = useRef(null);
const textareaRef3 = useRef(null);

const handleDivClick1 = () => {
  setIsClicked1(!isClicked1);
};

const handleDivClick2 = () => {
  setIsClicked2(!isClicked2);
};

const handleDivClick3 = () => {
  setIsClicked3(!isClicked3);
};

//글자수제한 500
const maxLength = 500;
const handleInputChange1 = (e) => {
  if(e.target.value.length <= maxLength){
  setInputValue1(e.target.value);
  }
};

const handleInputChange2 = (e) => {
  if(e.target.value.length <= maxLength){
    setInputValue2(e.target.value);
  }
};

const handleInputChange3 = (e) => {
  if(e.target.value.length <= maxLength){
    setInputValue3(e.target.value);
  }
};

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

    return (
        <div className="container">
        <img className="img-container" alt="img-container" src="imgs/Landing-BG.png" />
        <main className="main">
          <div className="left-sidebar-container">
            <img alt="illust" src="imgs/ilust.png" className="illust"/>
          </div>
          <div className="content">
            <div className="qeustion-section">
              <div className="question-box">
                <div className="question-num">1</div>
                <div className="question-text">
                질문2: 여행계획이 무엇인가요?
                </div>
              </div>
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
              {data ? <p>{data.answer}</p> : <p>데이터가 없습니다.</p>}
            </div>
            <div className="question-box">
                <div className="question-num">1</div>
                <div className="question-text">
                질문2: 여행계획이 무엇인가요?
                </div>
              </div>
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
              {data ? <p>{data.answer}</p> : <p>데이터가 없습니다.</p>}
            </div>
            </main>
          <div className="right-sidebar-container">
            <div className="section1"></div>
            {/* <div className="section2"></div> */}
          </div>
          </div>
    );
};

export default AIanswer;
