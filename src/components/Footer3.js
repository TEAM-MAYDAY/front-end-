import './Footer3.css';

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
// const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

const Footer3 = () => {
    return (
        <div>
        <footer className="footer3">
            <img className="copyright" src="/imgs/Copyright.png" alt="Copyright" />
            {/* <img className="copyright" onClick={scrollToTop}src="/imgs/Copyright.png" alt="Copyright" /> */}
            <img className="arrow3" onClick={scrollToTop} src="/imgs/arrows.png" alt="arrow" />
        </footer>

        </div>
    );
};

export default Footer3;