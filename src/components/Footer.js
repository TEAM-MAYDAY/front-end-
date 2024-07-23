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

    return (
        <footer className={`footer ${isBottom ? 'visible' : ''}`}>
            <img className="copyright" src="/imgs/Copyright.png" alt="Copyright" />
        </footer>
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
