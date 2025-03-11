import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import "./Hero.css";

// Import your logo images
import logo1 from "../../assets/images/mercedes.svg";
import logo2 from "../../assets/images/bmw.svg";
import logo3 from "../../assets/images/audi.svg";
import logo4 from "../../assets/images/porsche.svg";
import logo5 from "../../assets/images/volkswagen.svg";

const Hero = () => {
  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="hero-container">
      {/* Car Image Background */}
      <motion.div
        className="car-background"
        initial="initial"
        animate="animate"
        variants={slideIn}
      >
        <img src={assets.car} alt="Luxury Car" className="car-image" />
      </motion.div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Static Logos Grid */}
        <div className="static-logos-container">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Brand Logo ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Text element */}
        <div className="cta-text">
          Book your dream car <span>NOW</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;