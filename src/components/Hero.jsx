import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaPaperPlane, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.7,
      type: "spring",
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center mx-auto">
      <div className="flex flex-col items-center justify-center w-full px-4">
        <motion.h1
          className="text-center text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
        >
          Hi, I'm <span className="text-[#915EFF]">Muhammad Hamza</span>
        </motion.h1>
        <motion.p
          className="text-center text-xl sm:text-2xl md:text-3xl text-white-100 font-medium mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
        >
          <span className="block">Game Developer & Software Engineer</span>
          <span className="block text-lg sm:text-xl text-[#915EFF] font-semibold mt-1">Specializing in Unity 3D, Unreal Engine &amp; WebGL</span>
        </motion.p>
        <motion.p
          className="text-center max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
        >
          Creating immersive experiences through code and creativity.<br className="hidden sm:inline" />
          Expert in VR/AR development, 3D modeling, and interactive applications.
        </motion.p>
        <motion.div
  className="mt-4 flex flex-wrap justify-center gap-4"
  initial="hidden"
  animate="visible"
  variants={textVariants}
  custom={4}
>
  <a
    href="#contact"
    className="flex items-center gap-2 px-8 py-3 bg-[#915EFF] text-white rounded-lg font-semibold hover:bg-[#7c4dff] transition-colors shadow-lg shadow-[#915EFF]/20 focus:outline-none focus:ring-2 focus:ring-[#915EFF] animate-bounce-slow"
  >
    <FaPaperPlane className="text-lg" />
    Get In Touch
  </a>
  <a
    href="http://linkedin.com/in/hamza-m-4846869b/"
    className="flex items-center gap-2 px-4 py-3 border border-[#915EFF] text-white rounded-lg hover:bg-[#1a1433] transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin className="text-lg text-[#0A66C2]" />
    LinkedIn
  </a>
  <a
    href="mailto:hamza.mumtaz5@gmail.com"
    className="flex items-center gap-2 px-4 py-3 border border-[#915EFF] text-white rounded-lg hover:bg-[#1a1433] transition-colors mx-2 focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
    title="Email"
  >
    <FaEnvelope className="text-lg text-[#EA4335]" />
    Email
  </a>
  <a
    href="tel:+923354849883"
    className="flex items-center gap-2 px-4 py-3 border border-[#915EFF] text-white rounded-lg hover:bg-[#1a1433] transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
    title="Call"
  >
    <FaPhone className="text-lg text-[#34A853]" />
    Call
  </a>
</motion.div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;