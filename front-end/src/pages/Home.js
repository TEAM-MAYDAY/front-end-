import React, { useState, useEffect } from 'react';
import Landing from './Landing';
import LightBulb from './LightBulb';
import SupportPolicies from './SupportPolicies';
import { useSpring, animated } from 'react-spring';
import './Home.css';

const Home = () => {
  const [stage, setStage] = useState(0);

  const landingProps = useSpring({
    opacity: stage === 0 ? 1 : 0,
    config: { duration: 1000 },
  });

  const lightBulbProps = useSpring({
    opacity: stage === 1 ? 1 : 0,
    config: { duration: 1000 },
  });

  const supportPoliciesProps = useSpring({
    opacity: stage === 2 ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height) {
        setStage(0);
      } else if (scrollY >= height && scrollY < 2 * height) {
        setStage(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => {
        setStage(2);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="home-container">
      <animated.div style={landingProps} className="section">
        <Landing />
      </animated.div>
      <animated.div style={lightBulbProps} className="section">
        <LightBulb />
      </animated.div>
      {stage === 2 && (
        <animated.div style={supportPoliciesProps} className="section grid-container">
          <SupportPolicies />
        </animated.div>
      )}
    </div>
  );
};

export default Home;
