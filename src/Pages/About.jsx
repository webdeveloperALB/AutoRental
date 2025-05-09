import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Key,
  Car,
  CheckCircle,
  Award,
  Settings,
  MapPin,
  Users,
  Clock,
  Shield,
  Calendar,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const featureCards = [
    {
      icon: ShieldCheck,  // Verified vehicles icon
      title: "Verified Vehicles",
      description: "All cars undergo rigorous safety inspections",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Car,
      title: "Wide Selection",
      description: "Diverse fleet of vehicles for every need",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Key,
      title: "Key Delivery",
      description: "Hand-delivered keys to your location",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];


  const advancedFeatures = [
    {
      icon: Clock,
      title: "Instant Booking Confirmation",
      description: "Get real-time confirmation for your car rental via WhatsApp.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Calendar,
      title: "Flexible Rental Periods",
      description: "Choose hourly, daily, or long-term rentals based on your needs.",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: MapPin,
      title: "Convenient Pick-up & Drop-off",
      description: "Select your preferred location for hassle-free car handover.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "No Prepayment Required",
      description: "Pay in cash upon pick-up—no online payments needed.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Car,
      title: "Wide Vehicle Selection",
      description: "Choose from economy, luxury, or SUVs to match your journey.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    }
  ];


  const stats = [
    { value: "15K+", label: "Happy Customers" },
    { value: "10+", label: "Years in Business" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-8">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
              <Star className="w-5 h-5 text-white" />
              <span className="text-white font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Best in
              <span className="text-black"> Auto Rental</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Auto Rental, where we redefine the car rental experience.
              Our mission is to provide seamless, reliable, and affordable car
              rentals for everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-black" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to revolutionize the car rental industry by
                providing a seamless, transparent, and customer-centric
                experience. We believe in making car rentals accessible,
                affordable, and stress-free for everyone.
              </p>
              <ul className="space-y-4">
                {[
                  "User-friendly booking process",
                  "Transparent pricing with no hidden fees",
                  "24/7 customer support",
                  "Regular fleet maintenance and updates",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center group hover:bg-gray-200 transition-colors">
                  <h3 className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </h3>
                  <p className="text-black">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Basic Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-black" />
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for car rentals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${feature.bgColor} rounded-lg p-6 hover:scale-105 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Advanced Features */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our application is packed with powerful features to ensure a
                smooth car rental experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300
                           transition-all hover:-translate-y-1 group">
                  <div
                    className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center 
                                mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
