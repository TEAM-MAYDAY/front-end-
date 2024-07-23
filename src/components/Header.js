import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-and-text">
                    <img src="/imgs/logo.png" alt="Logo" className="logo" />
                </div>
                <nav className="header-links">
                    <span className="header-link">워케이션이란?</span>
                    <span className="header-link">워케이션 비교</span>
                    <span className="header-link">커뮤니티</span>
                    <span className="header-link">로그인</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;
