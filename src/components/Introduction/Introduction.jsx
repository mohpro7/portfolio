import React from 'react';
import { motion } from 'framer-motion';
import './Introduction.scss';

const Introduction = () => {
  return (
    <motion.section
      id="introduction"
      className="introduction"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>À propos de moi</h2>
      <p>Développeur full stack passionné, spécialisé dans la création de solutions modernes et performantes.</p>
    </motion.section>
  );
};

export default Introduction;
