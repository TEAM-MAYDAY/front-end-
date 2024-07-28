import React, { useEffect, useState } from 'react';
import './AIpage.css';

const AIpage = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);


  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };

  const handleDivClick1 = () => {
    setIsClicked1(!isClicked1);
  };
  const handleDivClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const handleDivClick3 = () => {
    setIsClicked3(!isClicked3);
  };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="container">
      <img className="img-container" alt="img-container" src="imgs/Landing-BG.png" />
      <main className="main">
        <div className="left-sidebar-container">
          <img alt="illust" src="imgs/logo.png" className="illust"/>
        </div>
        <div className="content">
          <div className="qeustion-section">
            <div className="question-box">
              <div className="question-num">1</div>
              <div className="question-text">
                질문 텍스트입니다. 두 줄이 넘어갈 수도 있습니다. 
                800px을 기준으로 줄바꿈을 합니다. 
                CSS 속성에서 max-width : 800px; 
                width : fit-content으로 설정하면 구현할 수 있습니다.
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field1 ${isClicked1 ? 'clicked' : ''}`} onClick={handleDivClick1}>
              <input 
                  type="text" 
                  value={inputValue1} 
                  onChange={handleInputChange1} 
                  placeholder="예시) 고성 해안선 둘레길, 워케이션 라운지, 원격근무 "
              />
              </div>
            </div>
            <div className="qeustion-section">
            <div className="question-box">
              <div className="question-num">2</div>
              <div className="question-text">
                질문 텍스트입니다. 두 줄이 넘어갈 수도 있습니다. 
                800px을 기준으로 줄바꿈을 합니다. 
                CSS 속성에서 max-width : 800px; 
                width : fit-content으로 설정하면 구현할 수 있습니다.
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field2 ${isClicked2 ? 'clicked' : ''}`} onClick={handleDivClick2}>
              <input 
                  type="text" 
                  value={inputValue2} 
                  onChange={handleInputChange2} 
                  placeholder="예시) 고성 해안선 둘레길, 워케이션 라운지, 원격근무 "
              />
            </div>
            </div>
            <div className="qeustion-section">
            <div className="question-box">
              <div className="question-num">3</div>
              <div className="question-text">
                질문 텍스트입니다. 두 줄이 넘어갈 수도 있습니다. 
                800px을 기준으로 줄바꿈을 합니다. 
                CSS 속성에서 max-width : 800px; 
                width : fit-content으로 설정하면 구현할 수 있습니다.
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field3 ${isClicked3 ? 'clicked' : ''}`} onClick={handleDivClick3}>
              <input 
                  type="text" 
                  value={inputValue3} 
                  onChange={handleInputChange3} 
                  placeholder="예시) 동해 바다에서 인스타 감성 사진찍고 쌈뽕하게 워케이션티비. 짬뽕... 매우려나?
                  고성 해안선 둘레길, 워케이션 라운지, 원격근무"
              />
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
}
export default AIpage;
// import React, { useEffect } from 'react';
// import './DetailedPage.css';
// import { useNavigate } from 'react-router-dom';

// const DetailedPage = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleClick = () => {
//     navigate('/aiproposal');
//   };
//   return (


// export default DetailedPage;
