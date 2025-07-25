import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="w-full max-w-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-3xl 
        transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl 
        hover:shadow-[#915EFF]/30 border border-[#232340] hover:border-[#915EFF]/50
        backdrop-blur-sm overflow-hidden"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        
        {/* Image container with enhanced styling */}
        <div className="relative w-full h-[220px] mb-6 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 
              group-hover:scale-110 filter group-hover:brightness-110"
          />
          
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Action buttons with enhanced styling */}
          <div className={`absolute top-4 right-4 flex gap-3 transition-all duration-300 
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {source_code_link && source_code_link !== '#' && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, '_blank')}
                className="w-12 h-12 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center 
                  cursor-pointer hover:bg-black/90 transition-all duration-300 border border-white/20"
                title="View Source Code"
              >
                <img src={github} alt="github" className="w-6 h-6 object-contain" />
              </motion.div>
            )}
            {demo_link && demo_link !== '#' && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(demo_link, '_blank')}
                className="w-12 h-12 bg-[#915EFF]/90 backdrop-blur-md rounded-full flex items-center justify-center 
                  cursor-pointer hover:bg-[#915EFF] transition-all duration-300 border border-white/20"
                title="Live Demo"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Content section with improved typography */}
        <div className="relative z-10">
          <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#915EFF] 
            transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced tags section */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span
              key={`${name}-${tag.name}-${i}`}
              className={`px-3 py-1 text-xs font-medium rounded-full border 
                ${tag.color} bg-opacity-10 border-current backdrop-blur-sm
                hover:bg-opacity-20 transition-all duration-300 cursor-default`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      {/* Header section with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Projects.</h2>
      </motion.div>

      {/* Description with better styling */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex justify-center sm:justify-start"
      >
        <p className="mt-4 text-gray-300 text-lg max-w-4xl leading-relaxed text-center sm:text-left">
          Explore my portfolio of innovative projects spanning 
          <span className="text-[#915EFF] font-semibold"> VR/AR development</span>, 
          <span className="text-[#915EFF] font-semibold"> 3D visualization</span>, and 
          <span className="text-[#915EFF] font-semibold"> immersive experiences</span>. 
          Each project demonstrates my expertise in cutting-edge technologies and creative problem-solving.
        </p>
      </motion.div>

      {/* Projects grid with improved layout */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, 'projects');