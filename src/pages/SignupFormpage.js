import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupFormpage.css';

function SignupFormpage() {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [job, setJob] = useState('');
    const [interest, setInterest] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

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
                job,
                interest,
                purpose
            });
            setMessage(response.data.message);
            navigate('/login');
        } catch (error) {
            setMessage('Error registering user');
            console.log(error);

        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>id:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>이름:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>전화번호:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>e-mail:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>직업:</label>
                <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
            <div>
                <label>관심사:</label>
                <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
            </div>
            <div>
                <label>워케이션 목적:</label>
                <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
            <p>{message}</p>
        </form>
    );
}

export default SignupFormpage;
