import React, { useState, useEffect  } from 'react';
import axios, { formToJSON } from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupFormpage.css';

function SignupFormpage() {

    const [step, setStep] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [job, setJob] = useState('');
    const [gender, setGender] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');
    const [otherJob, setOtherJob] = useState(''); // 기타 항목 상태

    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const [selectedJob, setSelectedJob] = useState(''); // 직업 선택 상태
    const [selectedPurpose, setSelectedPurpose] = useState([]); // 워케이션 목적 선택 상태
    const jobOptions = [
        '개발', '경영·비즈니스', '마케팅·광고', '영업', '고객서비스',
        '미디어', '디자인', '엔지니어링·설계', 'HR', '금융', '교육', 
        '게임 제작'
    ];

    const purposeOptions = [
        '다양한 업무 공간', '기분 전환', '생산성 향상', '문화 체험', 
        '팀 워크샵', '워크라이프밸런스'
    ];
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
    const [user, setUser] = useState('');
    const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(false);
 
    useEffect(() => {
        if (id && password && passwordConfirm && gender !== 'nogender' && phone && email) {
            setAreAllFieldsFilled(true);
        } else {
            setAreAllFieldsFilled(false);
        }
    }, [id, password, passwordConfirm, gender, phone, email]);

    const handleJobChange = (job) => {
        setSelectedJob(job); // 직업 선택 상태 업데이트
        setJob(job); // job 상태 업데이트
        setOtherJob(''); // 기타 입력값 초기화
    };

    const handleOtherJobChange = (e) => {
        const value = e.target.value;
        setOtherJob(value);
        setJob(value); // job 상태 업데이트
    };


    const handlePurposeChange = (purpose) => {
        setSelectedPurpose(prevState =>
            prevState.includes(purpose)
                ? prevState.filter(item => item !== purpose) // 선택 취소
                : [...prevState, purpose] // 선택 추가
        );
    };

    useEffect(() => {
        setPurpose(selectedPurpose.join(', ')); // purpose를 문자열로 업데이트
        console.log(selectedPurpose.join(', ')); // purpose 상태 확인
    }, [selectedPurpose]);

    // 비밀번호 확인 및 성별 선택 유효성 검사
  useEffect(() => {
    if (password !== passwordConfirm) {
        setMessage('비밀번호가 일치하지 않습니다!');
        setIsNextDisabled(true);
    } else if (!gender) {
        setMessage('성별을 선택하세요');
        setIsNextDisabled(true);
    } else {
        setMessage('');
        setIsNextDisabled(false);
    }
}, [password, passwordConfirm, gender]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender); // 성별 상태 업데이트
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            id,               
            password,
            name,
            phone,
            email,
            gender,
            job,
            purpose
        };
        console.log("Request Data:", requestData); // 요청 데이터 확인
        try {
            const response = await axios.post('http://ec2-15-164-115-210.ap-northeast-2.compute.amazonaws.com:8080/api/v1/register', {
                id,               
                password,
                name,
                email,
                phone,
                job,
                gender,
                purpose
            });
            console.log( response.data);
            console.log("Response Data:", response.data); // 응답 데이터 확인
            setUser(response.data);
            // setUserId(id); // 사용자 ID 설정
                    // 사용자 정보 설정
            setIsRegistrationSuccessful(true); // 등록 성공 상태 업데이트
        } catch (error) {
            setMessage('Error registering user');
            console.log(error);

        }
    };
    const handleNavigateHome = () => {
        navigate('/login');
    };
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // 숫자가 아닌 문자는 모두 제거
        const limitedValue = value.slice(0, 11); // 숫자를 11자로 제한       
        const formattedPhone = limitedValue
            .replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3') // 010-1111-2222 형태로 포맷팅
            .replace(/(\d{3})(\d{4})/, '$1-$2'); // 입력 중에도 포맷팅 반영
        setPhone(formattedPhone);
        console.log(formattedPhone);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value); // 입력 값을 바로 설정
        
        // 유효한 이메일 형식 체크
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (value === '' || emailRegex.test(value)) {
            setMessage(''); // 유효한 이메일 형식일 때 메시지를 지움
        } else {
            setMessage('이메일 형식이 올바르지 않습니다.');
        }
    };

    const handleNextClick = () => {
        if (password !== passwordConfirm) {
            setMessage('비밀번호가 일치하지 않습니다!');
        } else if (gender === 'nogender') {
            setMessage('성별을 선택하세요');
        } else {
            setStep(2);
            setMessage('');
        }
    };

    return (
       <div className='RealContainer'>
        {/* {true && ( */}
        {isRegistrationSuccessful && (
            <>
            <div className="overlay"></div>
            <div className="success-message">
                <img src="imgs/Logo.png" alt="Success Icon" className="succes-bird" />
                <h4>회원가입을 축하드립니다, {user.name} 님 <p />
                    당신의 아이디는 {user.id}입니다 </h4>
                <h2>"50+ 개의 지자체 워케이션을 <p /> 카테고리별로 한눈에 확인해 보세요."</h2>
                <button onClick={handleNavigateHome} className="navigate-button">
                    <img src="imgs/nextstep_selected.png" alt="Navigate Home" />
                </button>
            </div>
            </>
        )}
        <div className="container">
            <div className="image-section">
            <img src={step === 1 ? 'imgs/Resgistration_flag.gif' : 'imgs/Registration_profile.gif'} alt="Image" />
            <h2>회원가입</h2>
                <h5>원하는 워케이션 정보를 클릭 한 번으로!<p />
                더 이상 여러 사이트를 돌아다닐 필요가 없습니다.</h5>
            </div>
            <div className="signupform-section">
                {step === 1 && (
                    <form className="signupform-container">
                        <h2>회원정보</h2>
                        <div className="signupform-group">
                            <label className="signupFormLabel">ID</label>
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="입력란" className={id ? 'filled' : ''} />
                        </div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">비밀번호</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="입력란" className={password ? 'filled' : ''} />
                        </div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">비밀번호 확인</label>
                            <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="입력란" className={passwordConfirm ? 'filled' : ''} />
                        </div>
                        <div className="divider"></div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">성명</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="입력란" className={name ? 'filled' : ''} />
                        </div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">전화번호</label>
                            <input type="text" value={phone} onChange={handlePhoneChange} placeholder="입력란" className={phone ? 'filled' : ''} />
                        </div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">이메일</label>
                            <input type="text" value={email} onChange={handleEmailChange} placeholder="입력란" className={email ? 'filled' : ''} />
                        </div>
                        <div className="signupform-group">
                            <label className="signupFormLabel">성별</label>
                            <div className="gender-buttons">
                                <img
                                    src={gender === 'MALE' ? 'imgs/Male_selected.png' : 'imgs/Male.png'} 
                                    alt="남성"
                                    onClick={() => handleGenderChange('MALE')} 
                                    className="gender-button"
                                />
                                <span>남성</span>
                                <img
                                    src={gender === 'FEMALE' ? 'imgs/Female_seleted.png' : 'imgs/Female.png'} 
                                    alt="여성"
                                    onClick={() => handleGenderChange('FEMALE')} 
                                    className="gender-button"
                                />
                                <span>여성</span>
                                <img
                                    src={gender === 'NOGENDER' ? 'imgs/nogender_selected.png' : 'imgs/nogender.png'} 
                                    onClick={() => handleGenderChange('NOGENDER')} 
                                    className="gender-button2"
                                />
                            </div>
                        </div>
                        <img
                            src={areAllFieldsFilled
                                ? isHovered
                                    ? 'imgs/nextstep_selected.png' // 모든 필드가 채워지고 호버된 상태의 이미지
                                    : 'imgs/nextstep.png' // 모든 필드가 채워지고 호버되지 않은 상태의 이미지
                                : isHovered
                                    ? 'imgs/nextstep_selected.png' // 호버된 상태의 기본 이미지
                                    : 'imgs/nextstep.png'} // 기본 이미지
                            className="nextstep"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleNextClick} // 클릭 시 handleNextClick 함수 호출
                            style={{ cursor: isNextDisabled ? 'not-allowed' : 'pointer' }} // 커서 스타일 변경
                        />
                        <p>{message}</p>
                    </form>
                )}
               {step === 2 && (
                    <form className="signupform-container2">
                        <h2>추가 정보</h2>
                        <div className="signupform-group2">
                            <h3>직종: <p /></h3>
                            <h5>"당신의 전문 분야는 무엇인가요?"</h5>
                            <div className="job-options">
                                {jobOptions.map((job) => (
                                    <button
                                        type="button"
                                        key={job}
                                        className={`option-button ${selectedJob === job ? 'selected' : ''}`}
                                        onClick={() => handleJobChange(job)}
                                    >
                                        {job}
                                    </button>
                                ))}
                                <input
                                    type="text"
                                    placeholder="기타"
                                    value={otherJob}
                                    className="other-job-input"
                                    onFocus={() => setSelectedJob('')}
                                    onChange={handleOtherJobChange}
                                />
                            </div>
                        </div>
                        <div className="signupform-group2">
                            <h3>워케이션을 떠나는 목적: <p /></h3>
                            <h5>“어떤 목표로 워케이션을 계획 중이신가요? 여러 항목을 선택해 보세요”</h5>
                            <div className="purpose-options">
                                {purposeOptions.map((purpose) => (
                                    <button
                                        type="button"
                                        key={purpose}
                                        className={`option-button ${selectedPurpose.includes(purpose) ? 'selected' : ''}`}
                                        onClick={() => handlePurposeChange(purpose)}
                                    >
                                        {purpose}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <img
                            src="imgs/finalstep.png"
                            alt="Final Step"
                            className="finalstep"
                            onClick={handleSubmit}
                        />                    
                    </form>
                )}
            </div>
        </div>
        
    </div>
    );
};

export default SignupFormpage;








