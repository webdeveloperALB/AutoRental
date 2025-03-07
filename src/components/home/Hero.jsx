import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ChevronRight,
  Star,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";
import { assets } from "../../assets/assets";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const features = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Clock, text: "24/7 Support" },
    { icon: CreditCard, text: "Flexible Payment" },
  ];

  const stats = [
    { value: "50+", label: "Car Models" },
    { value: "98%", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="hero-container">
      {/* Car Image Background */}
      <motion.div
        className="car-background"
        initial="initial"
        animate="animate"
        variants={slideIn}
      >
        <div className="gradient-overlay" />
        <img
          src={assets.car}
          alt="Luxury Car"
          className="car-image"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Left Content */}
        <motion.div
          className="text-content"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="premium-badge">
            <Star className="icon" />
            <span>Premium Car Rental Service</span>
          </div>

          <h1 className="main-heading">
            Save <span className="highlight-text">big</span> with our
            <span className="highlight-text"> car rental</span>
          </h1>

          <p className="description-text">
           
          </p>

          <div className="action-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/models")}
              className="primary-btn"
            >
              <span>Book Ride</span>
              <CheckCircle className="icon" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/learnmore")}
              className="secondary-btn"
            >
              <span>Learn More</span>
              <ChevronRight className="icon" />
            </motion.button>
          </div>

          <div className="features-container">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="icon-wrapper">
                  <feature.icon className="feature-icon" />
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      {/* Floating Elements */}
      <div className="floating-elements">
          

        </div>
      </div>
    </div>
  );
};

export default Hero;