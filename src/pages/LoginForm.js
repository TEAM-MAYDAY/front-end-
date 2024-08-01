import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ setUser }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://ec2-3-38-105-117.ap-northeast-2.compute.amazonaws.com:8080/api/v1/login', {
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
            setMessage('로그인 실패');
            console.error(error);
        }
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={handleSignupClick}>회원가입으로 이동</button>
            <p>{message}</p>
        </form>
    );
}

export default LoginForm;
