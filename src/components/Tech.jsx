import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.1, 0.75)}
    className="w-28 h-28"
  >
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-16 h-16 flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <p className="text-white text-sm mt-2 text-center">{name}</p>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've worked with a range of technologies in the game development and web development world.
          From game engines to backend technologies, I'm always expanding my skillset to stay up-to-date with the latest industry standards.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
