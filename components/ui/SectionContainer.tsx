import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;