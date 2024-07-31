import React, { useState, useEffect, useRef } from 'react';
import './AIpage.css';
import axios from 'axios';
import AIanswer from './AIanswer';
import { useNavigate } from 'react-router-dom';

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
  const [description, setDescription] = useState("https://www.monthler.kr/programs/1170\n\n워킹 홀리데이 in 의령 - 2박 3일로컬과 연결되는 프로젝트\n\n[워킹홀리데이 in 의령]은 경상남도의 작은 시골마을 의령에서 다양한 전통 산업 및 로컬 브랜드와 연계하여 디자인, 브랜딩, 기획 및 마케팅의 프로젝트 진행 또는 전통 브랜드의 기술 전승 등을 병행하며 현지의 문화와 생활을 경험할 수 있는 프로젝트입니다.\n\n활동기간 : 24년 7월 29일 (월) ~ 24년 8월 31일 (토)\n\n로컬 브랜드 목록\n- (전통) 의령조청한과 / 전통식문화 및 체험 보조\n- (전통) 다향연 / 전통 차문화 및 제다체험 보조\n- (전통) 강외영 염색공방 / 인성교육 및 전통염색체험 보조\n- (전통) 의령토속식품 / 전통 망개떡 제조 및 레시피 전수\n\n프로그램\n프로그램 / 부제목 / 내용\n- 숲속영화관 / '메타세쿼이아'와 무비 갬성의 조화 / '메타세쿼이아'숲에서 빔프로젝트를 활용하여 영화상영\n- 트레킹 / 차가운 비가 내리는 '찰비계곡' 트레킹 / 시원한 물줄기 계곡을 따라서 트레킹\n- 별자리 탐구 / 맑은 의령 밤하늘 내 마음의 '별'로 / 오염되지 않은 '의령'의 하늘에서 별자리 관측\n- 농악 / 로컬클럽 개장! 신명나는 '농악' / 칠곡면 '치실농악단'에서 농악 즐기기\n- 백패킹 / 온 몸으로 자연 속에 딥다이빙 / '자굴산' 및 '한우산' 백패킹\n- 요가 / 피톤치드 폭탄과 함께하는 나마스떼 / 국가 산림문화자산 '신포숲'에서 심신정화");
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
          const response = await axios.post(process.env.REACT_APP_FASTAPI_ENDPOINT + '/create_proposal', 
          {
            description: description,
            answer1: inputValue1,
            answer2: inputValue2,
            answer3: inputValue3
          });
          console.log(response.data)
          // setData(response.data);
          navigate('/aianswer', { state: { data: response.data } });
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
            <div className="qeustion-section">
            <div className="question-box">
              <div className="question-num">2</div>
              <div className="question-text">
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
            <div className="qeustion-section">
            <div className="question-box">
              <div className="question-num">3</div>
              <div className="question-text">
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
          <button onClick={handleButtonClick} className="btn">Ai 제안서 생성</button>
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
            {error && <div>{error}</div>}
            {/* {data && <AIanswer data={data} />} */}
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

