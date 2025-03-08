import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
  Star,
  MessageSquare,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+355 (69) 835-7378"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      details: ["@auto_rental_tirana_"],
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Tirane, Albania"],
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Sunday: 9:00 AM - 6:00 PM",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-8">
      {/* Hero Section */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span className="text-orange-700 font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We'd love to hear from you. Let us know how we can help make your
              car rental experience even better.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Column */}
            <div className="space-y-12">
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                className="grid sm:grid-cols-2 gap-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${info.bgColor} rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Optimized Map Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-xl overflow-hidden h-96 relative shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47934.10796158665!2d19.817823200000003!3d41.3331847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2zVGlyYW7Dqw!5e0!3m2!1sen!2s!4v1741450655410!5m2!1sen!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />


              </motion.div>
            </div>

            {/* Contact Form Column */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-7 h-7 text-orange-500" />
                <h2 className="text-2xl font-bold">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                    <User className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                    <svg
                      className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Inquiry about rental"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 ${isSubmitted ? 'bg-green-500' : 'bg-orange-500'
                    } text-white font-medium transition-colors`}
                >
                  {isSubmitted ? (
                    <>
                      <Star className="w-5 h-5 animate-pulse" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;