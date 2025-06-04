import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 

    const scrollableElement = document.querySelector('.scroll-container');
    if (scrollableElement) {
      scrollableElement.scrollTo(0, 0);
    }
    
  }, [pathname]);

  return null; 
};

export default ScrollToTop;