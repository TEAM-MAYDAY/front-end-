import React, { useState, useEffect, useRef } from 'react';
import './AIpage.css';
import axios from 'axios';
import AIanswer from './AIanswer';
// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
const AIpage = () => {
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
  //  const [showAnswer, setShowAnswer] = useState(false);
  //   const [answerData, setAnswerData] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   const handleButtonClick = async () => {
  //       setLoading(true);
  //       setShowAnswer(false);
  //       setError(null);

  //       try {
  //           const response = await axios.get('https://your-backend-api.com/ai-answer'); // 백엔드 API 호출
  //           setAnswerData(response.data);
  //           setShowAnswer(true);
  //           setTimeout(() => {
  //               window.scrollTo({
  //                   top: document.documentElement.scrollHeight,
  //                   behavior: 'smooth'
  //               });
  //           }, 100);
  //       } catch (err) {
  //           setError('데이터를 가져오는 중 오류가 발생했습니다.');
  //       } finally {
  //           setLoading(false);
  //       }
  //   };

  //백엔드 자료 넘어오면 위에걸로 ㄱㄱ
  //
  // const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/aianswer');
  // };
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
      setLoading(true);
      setError(null);
      try {
          const response = await axios.get('YOUR_FASTAPI_ENDPOINT');
          setData(response.data);
      } catch (err) {
          setError('데이터 가져오기 오류: ' + err.message);
      } finally {
          setLoading(false);
      }
  };
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
                질문 텍스트입니다. 두 줄이 넘어갈 수도 있습니다. 
                800px을 기준으로 줄바꿈을 합니다. 
                CSS 속성에서 max-width : 800px; 
                width : fit-content으로 설정하면 구현할 수 있습니다.
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field1 ${isClicked1 ? 'clicked' : ''}`} onClick={handleDivClick1}>
              <textarea
                ref={textareaRef1}
                value={inputValue1}
                className='textarea-box'
                onChange={handleInputChange1}
                placeholder="예시) 고성 해안선 둘레길, 워케이션 라운지, 원격근무 1"
                rows="1" // 초기 행 높이 설정
              />
          </div>
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
            <div className={`input-field2 ${isClicked2 ? 'clicked' : ''}`} onClick={handleDivClick2}>
              <textarea
                ref={textareaRef2}
                value={inputValue2}
                className='textarea-box'
                onChange={handleInputChange2}
                placeholder="예시) 고성 해안선 둘레길, 워케이션 라운지, 원격근무 1"
                rows="1" // 초기 행 높이 설정
              />
            </div>
            </div>
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
            <div className={`input-field3 ${isClicked3 ? 'clicked' : ''}`} onClick={handleDivClick3}>
              <textarea
                ref={textareaRef3}
                value={inputValue3}
                className='textarea-box'
                onChange={handleInputChange3}
                placeholder="예시) 고성 해안선 둘레길, 워케이션 라운지, 원격근무 1"
                rows="1" // 초기 행 높이 설정
              />
            </div>
            </div>
          </div>
          <button onClick={handleButtonClick} className="btn">Show AI Answer</button>
            {loading && <div>로딩 중...</div>}
            {error && <div>{error}</div>}
            {data && <AIanswer data={data} />}
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

