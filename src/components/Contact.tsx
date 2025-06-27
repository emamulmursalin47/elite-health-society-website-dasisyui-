import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-health-blue-50 to-health-green-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-neutral mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ready to start your wellness journey? We'd love to hear from you and help you take the first step.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="card bg-white shadow-xl"
            variants={formVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-body p-8">
              <motion.h3 
                className="text-2xl font-bold text-neutral mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Send Us a Message
              </motion.h3>
              
              {submitted ? (
                <motion.div 
                  className="alert alert-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Send className="h-6 w-6" />
                    </motion.div>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div className="form-control" variants={inputVariants}>
                    <label className="label">
                      <span className="label-text font-medium">Name</span>
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <User className="h-5 w-5 text-gray-400" />
                      </motion.div>
                      <motion.input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full pl-12" 
                        placeholder="Your full name"
                        required
                        whileFocus={{ scale: 1.02, borderColor: "#16a34a" }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="form-control" variants={inputVariants}>
                    <label className="label">
                      <span className="label-text font-medium">Email</span>
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Mail className="h-5 w-5 text-gray-400" />
                      </motion.div>
                      <motion.input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered w-full pl-12" 
                        placeholder="your.email@example.com"
                        required
                        whileFocus={{ scale: 1.02, borderColor: "#16a34a" }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div className="form-control" variants={inputVariants}>
                    <label className="label">
                      <span className="label-text font-medium">Message</span>
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-3 top-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </motion.div>
                      <motion.textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full pl-12 h-32 resize-none" 
                        placeholder="Tell us about your wellness goals or ask any questions..."
                        required
                        whileFocus={{ scale: 1.02, borderColor: "#16a34a" }}
                        transition={{ duration: 0.2 }}
                      ></motion.textarea>
                    </div>
                  </motion.div>

                  <motion.button 
                    type="submit" 
                    className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="ml-2 h-5 w-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={contactInfoVariants}>
            <motion.div 
              className="card bg-white shadow-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body p-8">
                <motion.h3 
                  className="text-2xl font-bold text-neutral mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Connect With Us
                </motion.h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Facebook, title: "Facebook Community", desc: "Join our active community", color: "health-green" },
                    { icon: Mail, title: "Email Us", desc: "info@elitehealthsociety.com", color: "health-blue" },
                    { icon: Phone, title: "Call Us", desc: "(555) 123-4567", color: "health-green" },
                    { icon: MapPin, title: "Visit Us", desc: "123 Wellness Way, Health City, HC 12345", color: "health-blue" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`bg-${item.color}-100 p-3 rounded-full`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-neutral">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="divider"></div>

                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="card bg-gradient-to-br from-health-green-600 to-health-blue-600 text-white shadow-xl"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body p-8 text-center">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to Transform Your Life?
                </motion.h3>
                <motion.p 
                  className="mb-6 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join thousands of others on their wellness journey.
                </motion.p>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Join Our Community Today
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;