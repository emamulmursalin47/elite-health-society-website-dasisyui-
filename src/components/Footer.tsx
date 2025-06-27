import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Facebook, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-health-green-700 to-health-blue-700 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-white p-2 rounded-full"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="h-6 w-6 text-health-green-600" />
              </motion.div>
              <span className="text-xl font-bold">Elite Health Society</span>
            </motion.div>
            <motion.p 
              className="text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering lives through health, nature, and community. Join us on a journey toward complete wellness.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Mail, href: "mailto:info@elitehealthsociety.com" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost text-white hover:bg-white/20"
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'contact'].map((section, index) => (
                <motion.li 
                  key={section}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.button 
                    onClick={() => scrollToSection(section)} 
                    className="text-white/80 hover:text-white transition-colors capitalize"
                    whileHover={{ x: 5, color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section === 'services' ? 'Our Services' : 'Contact'}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Focus Areas
            </motion.h3>
            <ul className="space-y-2 text-white/80">
              {['Physical Fitness', 'Mental Health', 'Environmental Awareness', 'Animal Care'].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 0.8, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Info
            </motion.h3>
            <div className="space-y-2 text-white/80">
              {[
                '123 Wellness Way',
                'Health City, HC 12345',
                '(555) 123-4567',
                'info@elitehealthsociety.com'
              ].map((info, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 0.8, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  {info}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="divider divider-neutral my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p 
            className="text-white/60"
            whileHover={{ opacity: 0.8 }}
          >
            © 2024 Elite Health Society. All rights reserved.
          </motion.p>
          <motion.button 
            onClick={scrollToTop}
            className="btn btn-circle btn-ghost text-white hover:bg-white/20"
            aria-label="Back to top"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              backgroundColor: "rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 },
              backgroundColor: { duration: 0.2 }
            }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;