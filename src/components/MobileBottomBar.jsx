import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

export default function MobileBottomBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 10) {
        setIsCollapsed(false);
      } else if (currentScrollY > prevScrollY.current) {
        // Scrolling down -> collapse
        setIsCollapsed(true);
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up -> expand
        setIsCollapsed(false);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:08242224403"
      className={`fixed bottom-6 right-6 z-50 md:hidden h-14 flex items-center justify-center bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-[0_4px_20px_rgba(13,148,136,0.3)] border border-teal-500/20 transition-all duration-300 ease-in-out overflow-hidden rounded-full ${
        isCollapsed ? 'w-14' : 'w-36 px-4'
      }`}
      aria-label="Call clinic to book appointment"
    >
      <div className="flex items-center justify-center gap-1.5 flex-shrink-0">
        <Phone className="w-5 h-5 flex-shrink-0 animate-pulse" aria-hidden="true" />
        <span className={`font-bold text-sm tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out ${
          isCollapsed ? 'opacity-0 max-w-0 scale-0 overflow-hidden' : 'opacity-100 max-w-[100px] scale-100'
        }`}>
          Call Now
        </span>
      </div>
    </a>
  );
}
