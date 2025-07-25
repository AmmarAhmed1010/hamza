import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'http://linkedin.com/in/hamza-m-4846869b/',
      icon: FaLinkedin,
      color: 'text-[#0A66C2] hover:text-[#0A66C2]'
    },
    {
      name: 'GitHub',
      url: '#',
      icon: FaGithub,
      color: 'text-gray-400 hover:text-white'
    },
    {
      name: 'Email',
      url: 'mailto:hamza.mumtaz5@gmail.com',
      icon: FaEnvelope,
      color: 'text-[#EA4335] hover:text-[#EA4335]'
    },
    {
      name: 'Phone',
      url: 'tel:+923354849883',
      icon: FaPhone,
      color: 'text-[#34A853] hover:text-[#34A853]'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-[#0a0a0a] to-[#1a1a2e] border-t border-[#232340]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Muhammad <span className="text-[#915EFF]">Hamza</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Game Developer & Software Engineer specializing in Unity 3D, Unreal Engine, 
              and immersive VR/AR experiences. Creating the future of interactive entertainment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`${link.color} transition-colors duration-300 hover:scale-110 transform`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#915EFF] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hamza.mumtaz5@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#915EFF] transition-colors duration-300 text-sm"
              >
                <FaEnvelope className="text-[#EA4335]" />
                <span>hamza.mumtaz5@gmail.com</span>
              </a>
              <a
                href="tel:+923354849883"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#915EFF] transition-colors duration-300 text-sm"
              >
                <FaPhone className="text-[#34A853]" />
                <span>+92 335 4849883</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#232340]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Hamza. All rights reserved.
            </p>
         
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
