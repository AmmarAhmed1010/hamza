import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
      </motion.div>

      <div className="mt-10">
        <div className="bg-tertiary p-6 rounded-2xl mb-8">
          <h3 className="text-white text-xl font-bold">Muhammad Ali Jinnah University</h3>
          <p className="text-secondary mt-1">Bachelor of Science in Software Engineering</p>
          <p className="text-gray-400 text-sm mt-2">Specialized in Game Development, Artificial Intelligence, and Backend Systems</p>
          
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-3">Achievements & Awards:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2 mt-1">•</span>
                <span>Awarded First Position in Final Year Project for developing an innovative solution in Game Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2 mt-1">•</span>
                <span>Webmock Competition – First Position Winner</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2 mt-1">•</span>
                <span>Conducted 3-Day Game Development Workshop, awarded University President's Shield</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-tertiary p-6 rounded-2xl">
          <h3 className="text-white text-xl font-bold mb-4">Professional Recognition</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-[#915EFF] pl-4">
              <h4 className="text-white font-medium">Award from Senator Abdul Haseeb Khan</h4>
              <p className="text-gray-400 text-sm">For deploying a VR-based solution for differently-abled students at KVTC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
