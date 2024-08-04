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
                setMessage('서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
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
        <form onSubmit={handleSubmit} className="Loginform-container">
            <div>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} autocomplete="current-password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={handleSignupClick}>회원가입으로 이동</button>
            <p>{message}</p>
        </form>
    );
}

export default LoginForm;
