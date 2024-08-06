import React, { useState, useEffect, useRef } from 'react';
import './AIpage.css';
import axios from 'axios';
import AIanswer from './AIanswer';
import { useNavigate, useLocation } from 'react-router-dom';

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


  // Description을 위한 새로운 State
  // 해당 워케이션에 대한 정보를 저장하고 있으면 됨
  // 또한 String으로만 유지하고 있으면 충분
  // const [description, setDescription] = useState("");

  // const { description: initialDescription } = location.state || { description: "" };
  // // const [description, setDescription] = useState(initialDescription);
  // const additionalText = "\n날짜는 2024년 8월 7일부터 14일까지 7일동안";
  // const [description, setDescription] = useState(initialDescription + additionalText);
  // const { description, imageUrl } = location.state || {};

  const location = useLocation();
  // const { description: initialDescription = "", imgeUrl } = location.state || {};
  const { description: initialDescription = "", imageUrl } = location.state || {};

  const additionalText = "\n날짜는 2024년 8월 7일부터 14일까지 7일동안";
  const [description, setDescription] = useState(initialDescription + additionalText);

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

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //AIpage.js -> fastAPI요청값을, AIanswer.page에 띄우고 거기로 navigate
  const handleButtonClick = async () => {
      setLoading(true);
      setError(null);
      try {
        // console.log('FASTAPI_ENDPOINT:', process.env.REACT_APP_FASTAPI_ENDPOINT);
              // 로컬 스토리지에서 사용자 정보 가져오기
              const user = JSON.parse(localStorage.getItem('user'));
                    if (!user) {
                      alert('로그인 정보가 없습니다. 다시 로그인 해주세요.');
                      navigate('/login');
                      return;
                    }

       // user 객체에서 job, purpose 추출
        const job = user.job; 
        const purpose = user.purpose; 
      
          // const response = await axios.post(process.env.REACT_APP_FASTAPI_ENDPOINT + '/create_proposal', 
            // const response = await axios.post(process.env.REACT_APP_FASTAPI_ENDPOINT, 
            const response = await axios.post('https://api.mayday-spring.shop:8000'+ '/create_proposal', 
           {
            description: description,
            answer1: inputValue1,
            answer2: inputValue2,
            answer3: inputValue3,
            job: job,
            purpose: purpose,
          });
          console.log(response.data);
          // navigate('/aianswer', { state: { data: response.data } });
          navigate('/aianswer', { state: { data: response.data || [], userInfo: { job, purpose }, imgeUrl: imageUrl 
          } });
          // navigate('/aianswer', { state: { data: response.data || []} });

        } catch (err) {
          setError('데이터 가져오기 오류: ' + err.message);
      } finally {
          setLoading(false);
      }
  };

  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AIpagecontainer">
      {/* <img className="AIpageimg-container" alt="" src="imgs/Landing-BG.png" /> */}
      <div className="Detailed-gallery2">

      <img alt="img-container" src={imageUrl} className="large-image2"/>
      </div>
      <main className="AIpagemain">
        <div className="AIpageleft-sidebar-container">
          <img alt="illust" src="imgs/ilust.png" className="illust"/>
        </div>
        <div className="AIpagecontent">
          <div className="AIpagequestion-section">
            <div className="AIpagequestion-box">
              <div className="AIpagequestion-num">1</div>
              <div className="AIpagequestion-text">
                지원동기
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field1 ${isClicked1 ? 'clicked' : ''}`} onClick={handleDivClick1}>
              <textarea
                ref={textareaRef1}
                value={inputValue1}
                className='textarea-box'
                onChange={handleInputChange1}
                placeholder="예시) 경상남도 의령을 처음 들어보지만 새로운 지방을 여행하며 업무를 보고 싶다는 생각을 가지고 있음"
                rows="1" // 초기 행 높이 설정
              />
          </div>
            <div className="AIpagetqeustion-section">
            <div className="AIpagequestion-box">
              <div className="AIpagequestion-num">2</div>
              <div className="AIpagequestion-text">
                여행계획
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field2 ${isClicked2 ? 'clicked' : ''}`} onClick={handleDivClick2}>
              <textarea
                ref={textareaRef2}
                value={inputValue2}
                className='textarea-box'
                onChange={handleInputChange2}
                placeholder="예시) 의령조청한과 / 전통식문화 및 체험 보조, 차가운 비가 내리는 '찰비계곡' 트레킹, 국가 산림문화자산 '신포숲'에서 심신정화"
                rows="1" // 초기 행 높이 설정
              />
            </div>
            </div>
            <div className="AIpageqeustion-section">
            <div className="AIpagequestion-box">
              <div className="AIpagequestion-num">3</div>
              <div className="AIpagequestion-text">
                홍보계획
              </div>
            </div>
            <div className="input-guide">*입력 안내글</div>
            <div className={`input-field3 ${isClicked3 ? 'clicked' : ''}`} onClick={handleDivClick3}>
              <textarea
                ref={textareaRef3}
                value={inputValue3}
                className='textarea-box'
                onChange={handleInputChange3}
                placeholder="예시) 인스타그램, 페이스북 홍보"
                rows="1" // 초기 행 높이 설정
              />
            </div>
            </div>
          </div>
          <button onClick={handleButtonClick} className="AIpagebtn">Ai 제안서 생성</button>
            {/* {loading && <div>로딩 중...</div>} */}
            {loading && 
              <div className="loading-container">
              <div className="spinner"></div>
                <div>
                    <strong>Mayday AI</strong>가 제안서를 작성 중입니다...
                    <br />
                    잠시만 기다려주세요.
                </div>
             </div>
            }
            {/* {error && <div className='AIpageErrorMessage'>{error}</div>} */}
            {/* <div className='AIpageErrorMessage'>errrror</div> */}
            {/* {data && <AIanswer data={data} />} */}
          </div>
          <div className="Detailed-sidebar-box2">
            <div className="Detailed-sidebar-message2">📎 관련 사이트</div>
            <div className="Detailed-sidebar2">
            <div className="Detailed" onClick={() => handleNavigation('https://jb-worcation.com/')}>
                <h1> 1 전북 워케이션</h1>
                <img src="imgs/jeonbuk.png" alt="" className="Detailed-sideImg" />
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
}
export default AIpage;

