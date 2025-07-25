import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4'
      >
        <p>I am a highly skilled Software Engineer and Game Developer with expertise in immersive technologies, web development, backend systems, and 3D modeling. My technical proficiency spans across C++, C#, 3D Blender, WebGL, VR, and AI, enabling me to deliver creative and robust solutions.</p>
        
        <p>With professional experience at Mumtaz Technologies & Solutions, KVTC, and TC Mobility GmbH, I've specialized in developing VR/AR applications, 3D configurators, and interactive web experiences using Unity 3D, Unreal Engine, and modern web technologies.</p>

        <div className="mt-6">
          <h4 className="text-white text-lg font-semibold mb-2">Technical Skills:</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>Unity 3D & Unreal Engine</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>WebGL, WebVR, WebXR</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>C++ & C# Programming</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>3D Modeling (Blender)</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>PHP & MySQL</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-[#915EFF] rounded-full mr-2"></span>JavaScript & Three.js</div>
          </div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
