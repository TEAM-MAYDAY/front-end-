import React, { useState, useEffect, useRef } from 'react';
import Landing from './Landing';
import LightBulb from './LightBulb';
import SupportPolicies from './SupportPolicies';
import Footer from '../components/Footer'; // Importing Footer component
import { useSpring, animated } from 'react-spring';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [stage, setStage] = useState(0);
  const gridRef = useRef(null); // 그리드 섹션의 DOM 요소를 참조하기 위해 useRef 사용

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
      const totalHeight = document.documentElement.scrollHeight - height;

      if (scrollY < height) {
        setStage(0);
      // } else if (scrollY >= height && scrollY < 2 * height) {
      //   setStage(1);
      } else if (scrollY + window.innerHeight >= totalHeight) {
        setStage(2);
      }
    };
    const handleWheel = (event) => {
      if (stage === 2) { // 그리드 섹션일 때만 작동
        const gridElement = gridRef.current;
        if (gridElement) { // gridRef.current가 null이 아닌 경우에만 실행
          if (event.deltaY < 0 && gridElement.scrollTop === 0) {
            // Scroll up from grid section when at the top of the grid
            window.scrollTo({
              top: window.innerHeight * 2 - 1,
              behavior: 'smooth',
            });
            setStage(1);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel); // wheel 이벤트 추가
    handleScroll(); // Ensure the scroll position is checked when the component mounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('wheel', handleWheel); // clean-up 이벤트 리스너
  };
}, [stage]);
  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => {
        setStage(2);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);


  const navigate = useNavigate();


  const handleClick3 = () => {
    navigate('/SupportPolicies');
};

  return (
    <div className="home-container">
      {/* <animated.div style={landingProps} className="section">
        <Landing />
      </animated.div>
    const navigate = useNavigate();

      {stage === 2 && (
        <div className="SupportPoliciesContainer">
          <animated.div style={supportPoliciesProps} className="section2 grid-container">
            <SupportPolicies />
            <Footer gridRef={gridRef} /> 
          </animated.div>
        </div>
      )} */}
      <img src="imgs/Landing-B3G.png" alt="랜딩페이지~~!!!~"className="aweseome" />
      <div className="gara">
      <button onClick={handleClick3} className="back-btn2">워케이션 비교 보러가기</button>
      </div>
    </div>
  );
};
export default Home;

// import React, { useState, useEffect } from 'react';
// import Landing from './Landing';
// import LightBulb from './LightBulb';
// import SupportPolicies from './SupportPolicies';
// import Footer from '../components/Footer';
// import { useSpring, animated } from 'react-spring';
// import './Home.css';

// const Home = () => {
//   const [stage, setStage] = useState(0);

//   const landingProps = useSpring({
//     opacity: stage === 0 ? 1 : 0,
//     config: { duration: 1000 },
//   });

//   const lightBulbProps = useSpring({
//     opacity: stage === 1 ? 1 : 0,
//     config: { duration: 1000 },
//   });

//   const supportPoliciesProps = useSpring({
//     opacity: stage === 2 ? 1 : 0,
//     config: { duration: 1000 },
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const height = window.innerHeight;

//       if (scrollY < height) {
//         setStage(0);
//       } else if (scrollY >= height && scrollY < 2 * height) {
//         setStage(1);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (stage === 1) {
//       const timer = setTimeout(() => {
//         setStage(2);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [stage]);

//   return (
//     <div className="home-container">
//       <animated.div style={landingProps} className="section">
//         <Landing />
//       </animated.div>
//       <animated.div style={lightBulbProps} className="section">
//         <LightBulb />
//       </animated.div>
//       {stage === 2 && (
//         <animated.div style={supportPoliciesProps} className="section grid-container">
//           <SupportPolicies />
//           <Footer />
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default Home;