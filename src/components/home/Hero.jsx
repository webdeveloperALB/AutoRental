import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { assets } from "../../assets/assets";
import "./Hero.css";

const Hero = () => {

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

  return (
    <div className="hero-container">
      {/* Car Image Background */}
      <motion.div
        className="car-background"
        initial="initial"
        animate="animate"
        variants={slideIn}
      >
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

        </motion.div>

        {/* Floating Elements */}
        <div className="floating-elements">
          {/* Floating elements here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;