import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-health-green-600" />,
      title: "Community First",
      description: "Building connections that heal and inspire"
    },
    {
      icon: <Target className="h-8 w-8 text-health-blue-600" />,
      title: "Holistic Wellness",
      description: "Addressing mind, body, and spirit together"
    },
    {
      icon: <Globe className="h-8 w-8 text-health-green-600" />,
      title: "Environmental Care",
      description: "Protecting our planet for future generations"
    },
    {
      icon: <Heart className="h-8 w-8 text-health-blue-600" />,
      title: "Compassionate Action",
      description: "Extending kindness to all living beings"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  

  const imageVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gradient-to-br from-health-green-50 to-health-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={imageVariants}
          >
            <motion.img 
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Community wellness" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            variants={textVariants}
          >
            <div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-neutral mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                About Elite Health Society
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                We are a passionate community dedicated to transforming lives through comprehensive wellness. 
                Our mission encompasses physical fitness, mental health support, environmental stewardship, 
                and compassionate animal care.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Through education, support, and collective action, we empower individuals to live healthier, 
                more fulfilling lives while making a positive impact on our world.
              </motion.p>
            </div>

            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card-body p-6">
                    <motion.div 
                      className="flex items-center space-x-3 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="font-semibold text-lg text-neutral">{value.title}</h3>
                    </motion.div>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;