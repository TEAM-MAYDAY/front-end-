import React, { useEffect, useState } from 'react';
import './Footer.css';
const Footer = () => {

    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const fullHeight = document.body.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= fullHeight*1/3 ) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ensure the scroll position is checked when the component mounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const scrollDuration = 1000; // 밀리초 단위로 애니메이션 지속 시간 설정
        const start = window.scrollY;
        const startTime = performance.now();
    
        const easeOutQuad = (t) => t * (2 - t);
    
        const scrollAnimation = (currentTime) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / scrollDuration, 1);
          const easing = easeOutQuad(progress);
          const scrollPosition = start * (1 - easing);
    
          window.scrollTo(0, scrollPosition);
    
          if (timeElapsed < scrollDuration) {
            requestAnimationFrame(scrollAnimation);
          }
        };
    requestAnimationFrame(scrollAnimation);
    
  };
    return (
        <>
        <footer className={`footer ${isBottom ? 'visible' : ''}`}>
            {/* <img className="copyright" src="/imgs/Copyright.png" alt="Copyright" /> */}
            <img className="copyright" onClick={scrollToTop}src="/imgs/Copyright.png" alt="Copyright" /> 
            <img className="arrow1" onClick={scrollToTop} src="/imgs/arrows.png" alt="arrow" />
        </footer>
        </>
                // <>
                // <footer className="footer">
                //     <img className="copyright" src="/imgs/Copyright.png" alt="Copyright" />
                //     {/* <img className="copyright" onClick={scrollToTop}src="/imgs/Copyright.png" alt="Copyright" /> */}
                //     <img className="arrow" onClick={scrollToTop} src="/imgs/arrows.png" alt="arrow" />
        
                // </footer>
        
                // </>
    );
};

export default Footer;
// const Footer = ({ gridRef }) => {
//   const [isBottom, setIsBottom] = useState(false);

//     const handleScroll = () => {
//         const fullHeight = document.body.scrollHeight;
//         const scrollTop = document.documentElement.scrollTop;
//         const clientHeight = document.documentElement.clientHeight;
    
//         const gridElement = gridRef.current;
//         if (gridElement) {
//             console.log("그리드영역ㅊㅋㄹㅊ");
//           const gridScrollTop = gridElement.scrollTop;
//           const gridScrollHeight = gridElement.scrollHeight;
//           const gridClientHeight = gridElement.clientHeight;
//           if (scrollTop + clientHeight >=  fullHeight*2/3) {
//             setIsBottom(true);
//           } else {
//             setIsBottom(false);
//           }
//         }
//       };
//     }
// export default Footer;




// import React, { useEffect, useState } from 'react';
// import './Footer.css';

// const Footer = () => {
//     const [isBottom, setIsBottom] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             const windowHeight = window.innerHeight;
//             const fullHeight = document.body.scrollHeight;

//             console.log(scrollTop + windowHeight, fullHeight); // Debugging line

//             if (scrollTop + windowHeight+260 >= fullHeight) {
//                 setIsBottom(true);
//             } else {
//                 setIsBottom(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <footer className={`footer ${isBottom ? 'visible' : ''}`}>
//             <img className="copyright" src="/imgs/Copyright.png" alt="Copyright" />
//         </footer>
//     );
// };

// export default Footer;

// // import React from 'react';
// // import './Footer.css';

// // const Footer = () => {
// //   return (
// //     <footer className="footer">
// //       <img className="copyright" alt="Copyright" src="/imgs/Copyright.png" />
// //     </footer>
// //   );
// // };

// // export default Footer;

// // import React, { useEffect, useState } from 'react';
// // import './Footer.css';

// // const Footer = () => {
// //     const [isBottom, setIsBottom] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const scrollTop = window.scrollY;
// //             const windowHeight = window.innerHeight;
// //             const fullHeight = document.body.scrollHeight;

// //             if (scrollTop + windowHeight >= fullHeight) {
// //                 setIsBottom(true);
// //             } else {
// //                 setIsBottom(false);
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     return isBottom ? (
// //         <footer className="footer">
// //             <img className="Copyright" src="./imgs/Copyright.png" />
// //         </footer>
// //     ) : null;
// // };

// // export default Footer;
