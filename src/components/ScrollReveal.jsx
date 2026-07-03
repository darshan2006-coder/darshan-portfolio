import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} // Triggers almost instantly when the top edge enters
      transition={{ 
        duration: 0.65, 
        ease: [0, 0.55, 0.45, 1] // High initial velocity curve (fast start, smooth end)
      }}
    >
      {children}
    </motion.div>
  );
}