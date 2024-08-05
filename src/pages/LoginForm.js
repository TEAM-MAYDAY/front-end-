import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ setUser }) => { // setUser prop 추가
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://ec2-15-164-115-210.ap-northeast-2.compute.amazonaws.com:8080/api/v1/login', {
                id,
                password
            });
            localStorage.setItem('user', JSON.stringify(response.data));
            setUser(response.data); // 로그인 상태 업데이트
            setMessage('로그인 성공');
            console.log('로그인성공~!~!!~!~!~');
            console.log(setMessage);
            navigate('/');
        } catch (error) {
            if (!error.response) {
                // 서버와의 연결 실패 (네트워크 오류)
                setMessage('서버와 연결할 수 없습니다. 네트워크 상태를 확인하세요.');
                console.error('서버와 연결할 수 없습니다.', error);
            } else if (error.response.status >= 500) {
                // 서버 오류
                setMessage('잠시 후 다시 시도하세요.');
                console.error('서버 오류', error.response.status);
            } else {
                // 기타 오류 (로그인 실패 등)
                setMessage('로그인 실패. 아이디와 비밀번호를 확인하세요.');
                console.error('로그인 실패', error.response.status);
            }
        }
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        // <form onSubmit={handleSubmit} className="Loginform-container">
        //     <div>
        //         <label>ID:</label>
        //         <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        //     </div>
        //     <div>
        //         <label>Password:</label>
        //         <input type="password" value={password} autocomplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        //     </div>
        //     <button type="submit">Login</button>
        //     <button type="button" onClick={handleSignupClick}>회원가입으로 이동</button>
        //     <p>{message}</p>
        // </form>
    <div className='loginsection'>
        <div className="login-container">
            <img src="imgs/loginleft.png"  alt="img" className='left-section'/>
            <div className="right-section">
                <form onSubmit={handleSubmit} className="loginform">
                    <h1>로그인</h1>
                    <span className='highlight'>제주, 부산, 강원, 충남, 서울</span>
                   <span> 지자체 워케이션 정책 비교하기!</span><p />
                    <span>워케이션 포털</span>
                    <span className='highlight'> 메이데이</span>
                    <span>에 오신 걸 환영합니다.</span>
                    <div className="form-group">
                        <label className="IDpart">ID</label>
                        <input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="입력란"
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호　<h1>{message}</h1></label> 
                        <input
                            type="password"
                            value={password}
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="입력란"
                        />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                    <p>계정이 없나요? <button type="button" className="signup-link" onClick={handleSignupClick}>회원가입</button></p>

                </form>
            </div>
        </div>
    </div>

    );
}

export default LoginForm;
