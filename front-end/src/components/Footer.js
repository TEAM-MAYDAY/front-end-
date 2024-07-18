import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;

            if (scrollTop + windowHeight >= fullHeight) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isBottom ? (
        <footer className="footer">
            <img className="Copyright" src="./imgs/Copyright.png" />
        </footer>
    ) : null;
};

export default Footer;
