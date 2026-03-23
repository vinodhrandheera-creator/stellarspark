import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: 'stagger-1' | 'stagger-2' | 'stagger-3' | 'stagger-4';
  // Added id prop to interface to support targeting by intersection observers
  id?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '', delay, id }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Once visible, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      // Fix: Pass the id to the DOM element so it can be found by getElementById
      id={id}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${delay || ''} ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;