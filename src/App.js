import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';

import './App.css';  
import AIpage from './pages/AIpage';
import AIanswer from './pages/AIanswer.js';
import DetailedPage from './pages/DetailedPage';
import Error from './pages/Error';
import LoginForm from './pages/LoginForm';
import SignupFormpage from './pages/SignupFormpage';

//후기(임의의 값) 클릭시, errorpage로 navigate
const App = () => {

    // useEffect(() => {
    //   const storedUser = JSON.parse(localStorage.getItem('user'));
    //   if (storedUser) {
    //     setUser(storedUser);
    //   }
    // }, []);
    
    // useEffect(() => {
    //     // user 상태가 변경될 때마다 로컬 스토리지에 저장
    //     localStorage.setItem('user', JSON.stringify(user));
    //   }, [user]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <Router>
            <Header user={user} /> {/* Header에 user prop 전달 */}
            <Routes>
                <Route path="/" element={<><Home /></>} /> 
                <Route path="/detailed" element={<> <DetailedPage /><Footer2 /> </>} />
                <Route path="/aipage" element={<><AIpage /><Footer2 /></>} />
                <Route path="/aianswer" element={<><AIanswer /><Footer2 /></>} />
                <Route path="/error" element={<><Error /><Footer3 /></>} />
                <Route path="/login" element={ <><LoginForm setUser={setUser} /> <Footer2 /> </> } />
                <Route path="/signup" element={<><SignupFormpage /> <Footer2 /> </>} />
            </Routes>
        </Router>
            // {/* <Header />
            // <DetailedPage />
            // <Footer2 /> */}

        // 백엔드에서 링크 주면 아래로 path에다 url 업로드하기
        // return (
        //     <div className="app-container">
        //       <Router>
        //         <Header />
        //         <Routes>
        //           <Route path="/" element={<Home />} />
        //           <Route path="/home2" element={<>
        //             <Home2 />
        //             <Footer2 /> 
        //인터랙티브 디자인 들어간 Footer1 /그냥 페이지에 들어갈 Footer2과는 설정이 달라서 따로분리함.
        //           </>} />
        //           <Route path="/home3" element={<>
        //             <Home3 />
        //             <Footer2 />
        //           </>} />
        //         </Routes>
        //       </Router>
        //     </div>
        //   );
    );
}

export default App;
