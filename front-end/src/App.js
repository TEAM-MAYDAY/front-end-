import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';  

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Home />
            {/* <Footer />  */}
        </div>
        // 백엔드에서 링크 주면 아래로 path에다 url 업로드하기
        // <Router>
        //     <div className="app-container">
        //         <Header />
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/" element={<Home />} />
        //             <Route path="/" element={<Home />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
};

export default App;
