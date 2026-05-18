"use client"
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Auto-hide scrollbar logic
    let scrollTimeout: NodeJS.Timeout;

    // Show scrollbar briefly on page load
    document.documentElement.classList.add('is-scrolling');
    scrollTimeout = setTimeout(() => {
      document.documentElement.classList.remove('is-scrolling');
    }, 2000);

    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    lenis.on('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return <>{children}</>;
}
