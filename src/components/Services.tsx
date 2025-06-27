import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Brain, Leaf, PawPrint, ArrowRight, X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Dumbbell className="h-12 w-12 text-health-green-600" />,
      title: "Physical Fitness",
      description: "Comprehensive fitness programs designed for all levels and abilities.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      details: "Our fitness programs include personalized workout plans, group classes, nutrition guidance, and progress tracking. Whether you're a beginner or an advanced athlete, we have something for everyone.",
      features: ["Personal Training", "Group Classes", "Nutrition Coaching", "Progress Tracking"]
    },
    {
      icon: <Brain className="h-12 w-12 text-health-blue-600" />,
      title: "Mental Health",
      description: "Supporting mental wellness through education, resources, and community support.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      details: "Mental health is just as important as physical health. We provide resources, workshops, and support groups to help you maintain emotional balance and resilience.",
      features: ["Support Groups", "Mindfulness Training", "Stress Management", "Wellness Workshops"]
    },
    {
      icon: <Leaf className="h-12 w-12 text-health-green-600" />,
      title: "Environmental Awareness",
      description: "Promoting sustainable living and environmental consciousness.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      details: "Learn how to live sustainably and make environmentally conscious choices. Our programs cover everything from eco-friendly living tips to community conservation projects.",
      features: ["Sustainability Education", "Community Gardens", "Conservation Projects", "Green Living Tips"]
    },
    {
      icon: <PawPrint className="h-12 w-12 text-health-blue-600" />,
      title: "Animal Care",
      description: "Advocating for animal welfare and responsible pet ownership.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      details: "We promote responsible pet ownership, animal welfare, and the human-animal bond. Our services include education, resources, and community support for pet owners.",
      features: ["Pet Care Education", "Adoption Support", "Animal Welfare Advocacy", "Community Pet Events"]
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-neutral mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Comprehensive programs designed to support your journey toward complete wellness and positive impact.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.figure 
                className="px-6 pt-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </motion.figure>
              
              <div className="card-body p-6">
                <motion.div 
                  className="flex items-center space-x-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="card-title text-lg font-bold text-neutral">{service.title}</h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {service.description}
                </motion.p>
                
                <div className="card-actions justify-end">
                  <motion.button 
                    onClick={() => setSelectedService(index)}
                    className="btn btn-primary btn-sm"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div 
            className="modal modal-open"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="modal-box max-w-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {services[selectedService].icon}
                  </motion.div>
                  <h3 className="font-bold text-2xl">{services[selectedService].title}</h3>
                </motion.div>
                <motion.button 
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
              
              <motion.img 
                src={services[selectedService].image} 
                alt={services[selectedService].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              
              <motion.p 
                className="text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {services[selectedService].details}
              </motion.p>
              
              <motion.h4 
                className="font-semibold text-lg mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                What We Offer:
              </motion.h4>
              
              <motion.ul 
                className="list-disc list-inside space-y-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {services[selectedService].features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="modal-action"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <motion.button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button 
                  className="btn btn-ghost"
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Services;