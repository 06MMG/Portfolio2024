// components/ScrollReveal.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // Optional customization for triggering point
  variants?: Variants; // Custom animation variants
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.3,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const mountedRef = useRef<boolean>(false); // To track if the component is mounted

  useEffect(() => {
    mountedRef.current = true; // Set to true when the component mounts

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!mountedRef.current) return; // Check if mounted
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current); // Only observe if ref is available

    return () => {
      mountedRef.current = false; // Set to false when the component unmounts
      if (ref.current) observer.unobserve(ref.current); // Clean up the observer
    };
  }, [controls, threshold]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
