import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring" as const, // explicitly set to "spring" 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1, 
        type: "spring" as const, // explicitly set to "spring" 
        stiffness: 80, 
        damping: 12 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        type: "spring" as const, // explicitly set to "spring"
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const secondButtonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        type: "spring" as const, // explicitly set to "spring"
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="hero min-h-screen relative"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="hero-overlay bg-black bg-opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>
      
      <div className="hero-content text-center text-white z-10 max-w-4xl">
        <motion.div className="max-w-3xl" variants={containerVariants}>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={titleVariants}
          >
            Empowering Lives Through 
            <motion.span 
              className="bg-gradient-to-r from-health-green-400 to-health-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80, damping: 12 }}
            >
              {" "}Health, Nature & Community
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90"
            variants={itemVariants}
          >
            Join our vibrant community dedicated to physical fitness, mental wellness, environmental awareness, and compassionate animal care.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-8 text-lg"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us on Facebook
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.a>
            
            <motion.button 
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-outline btn-lg px-8 text-lg text-white border-white hover:bg-white hover:text-neutral"
              variants={secondButtonVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
