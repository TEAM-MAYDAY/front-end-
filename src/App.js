import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import './App.css';  
import DetailedPage from './pages/DetailedPage';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            {/* <Home /> */}
            <DetailedPage />
            <Footer2 />
            {/* <Footer />  */}
        </div>
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
};

export default App;
