import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Send,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { RiTiktokFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically handle the newsletter subscription
    }
  };

  const socialLinks = [
    {
      Icon: FaWhatsapp, href: "https://wa.me/355698357378", color: "hover:bg-green-500", 
      className: "hover:bg-black hover:text-white"
    },
    { Icon: Instagram, href: "https://www.instagram.com/auto_rental_tirana_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", color: "hover:bg-pink-600" },
    { Icon: RiTiktokFill, href: "https://www.tiktok.com/@autorentaltirana?is_from_webapp=1&sender_device=pc", color: "hover:bg-black" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Car Models", path: "/models" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/caricon4.png" // Path from public folder
                alt="Car Rental Logo"
                className="w-25 h-10 group-hover:scale-110 transition-transform"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Auto</span>
                <span className="text-red-600">Rental</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for car rentals. Experience premium service
              with unlimited miles and flexible pick-up options at unbeatable
              prices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center
                           ${color} hover:text-white transition-all duration-300`}>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group hover:text-white transition-colors inline-flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Customer Support</h3>
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                <span className="hover:text-white transition-colors">
                  +355 69 835 7378
                </span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors">
                  example@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span>Tirane, Albania</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="text-white">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 
                           focus:ring-white text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-500 
                           text-white rounded-lg hover:bg-green-500 transition-all
                           hover:scale-105 active:scale-95">
                  {isSubscribed ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 bg-gradient-to-r from-white to-white rounded-lg
                       border border-orange-500/20">
              <p className="text-sm text-black">
                🎉{" "}
                <span className="text-black font-semibold">
                  Special Offer:
                </span>{" "}
                Get 15% off your first rental when you subscribe!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AutoRental. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
