import React, { useState, useEffect  } from 'react';
import axios from 'axios';
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

    const [job, setJob] = useState('nogender');
    const [gender, setGender] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const [selectedJob, setSelectedJob] = useState(''); // 직업 선택 상태
    const [selectedPurpose, setSelectedPurpose] = useState([]); // 워케이션 목적 선택 상태
    const jobOptions = [
        '개발', '경영·비즈니스', '마케팅·광고', '영업', '고객서비스',
        '미디어', '디자인', '엔지니어링·설계', 'HR', '금융', '교육', 
        '게임 제작', '기타'
    ];

    const purposeOptions = [
        '다양한 업무 공간', '기분 전환', '생산성 향상', '문화 체험', 
        '팀 워크샵', '워크라이프밸런스'
    ];
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
    };

    const handlePurposeChange = (purpose) => {
        setSelectedPurpose(prevState =>
            prevState.includes(purpose)
                ? prevState.filter(item => item !== purpose) // 선택 취소
                : [...prevState, purpose] // 선택 추가
        );
    };
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
        try {
            const response = await axios.post('http://ec2-3-38-105-117.ap-northeast-2.compute.amazonaws.com:8080/api/v1/register', {
                id,               
                password,
                name,
                phone,
                email,
                gender,
                job,
                purpose
            });
            setMessage(response.data.message);
            navigate('/login');
        } catch (error) {
            setMessage('Error registering user');
            console.log(error);

        }
    };
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // 숫자가 아닌 문자는 모두 제거
        const limitedValue = value.slice(0, 11); // 숫자를 11자로 제한       
        const formattedPhone = limitedValue
            .replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3') // 010-1111-2222 형태로 포맷팅
            .replace(/(\d{3})(\d{4})/, '$1-$2'); // 입력 중에도 포맷팅 반영
        setPhone(formattedPhone);
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
        <div className="container">
            <div className="image-section">
                <img src="imgs/Resgistration_flag.gif" alt="Image" />
                <h2>회원가입</h2>
                <h5>원하는 워케이션 정보를 클릭 한 번으로!<p />
                더 이상 여러 사이트를 돌아다닐 필요가 없습니다.</h5>
            </div>
            <div className="form-section">
                {step === 1 && (
                    <form className="form-container">
                        <h2>회원정보</h2>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="입력란" className={id ? 'filled' : ''} />
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="입력란" className={password ? 'filled' : ''} />
                        </div>
                        <div className="form-group">
                            <label>비밀번호 확인</label>
                            <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="입력란" className={passwordConfirm ? 'filled' : ''} />
                        </div>
                        <div className="divider"></div>
                        <div className="form-group">
                            <label>성명</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="입력란" className={name ? 'filled' : ''} />
                        </div>
                        <div className="form-group">
                            <label>전화번호</label>
                            <input type="text" value={phone} onChange={handlePhoneChange} placeholder="입력란" className={phone ? 'filled' : ''} />
                        </div>
                        <div className="form-group">
                            <label>이메일</label>
                            <input type="text" value={email} onChange={handleEmailChange} placeholder="입력란" className={email ? 'filled' : ''} />
                        </div>
                        <div className="form-group">
                            <label>성별</label>
                            <div className="gender-buttons">
                                <img
                                    src={gender === 'male' ? 'imgs/Male_selected.png' : 'imgs/Male.png'} 
                                    alt="남성"
                                    onClick={() => handleGenderChange('male')} 
                                    className="gender-button"
                                />
                                <span>남성</span>
                                <img
                                    src={gender === 'female' ? 'imgs/Female_seleted.png' : 'imgs/Female.png'} 
                                    alt="여성"
                                    onClick={() => handleGenderChange('female')} 
                                    className="gender-button"
                                />
                                <span>여성</span>
                                <img
                                    src={gender === 'nogender' ? 'imgs/nogender_selected.png' : 'imgs/nogender.png'} 
                                    onClick={() => handleGenderChange('nogender')} 
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
                    <form onSubmit={handleSubmit} className="form-container">
                     <h2>회원정보</h2>
                    <div className="form-group">
                        <h3>직종: <p /></h3>
                        <h3>"당신의 전문 분야는 무엇인가요?"</h3>
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
                        </div>
                    </div>
                    <div className="form-group">
                        <h3>워케이션을 떠나는 목적: <p /></h3>
                        <h3>"“어떤 목표로 워케이션을 계획 중이신가요? 여러 항목을 선택해 보세요”"</h3>
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

                        <button type="submit">Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    </div>
    );
};

export default SignupFormpage;








