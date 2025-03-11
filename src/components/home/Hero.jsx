import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";

// Import your logo images
import logo1 from "../../assets/images/audi.svg";
import logo2 from "../../assets/images/bmw.svg";
import logo3 from "../../assets/images/chevrolet.svg";
import logo4 from "../../assets/images/ferrari.svg";
import logo5 from "../../assets/images/ford.svg";
import logo6 from "../../assets/images/honda.svg";
import logo7 from "../../assets/images/hyundai.svg";
import logo8 from "../../assets/images/jaguar.svg";
import logo9 from "../../assets/images/jeep.svg";
import logo10 from "../../assets/images/kia.svg";
import logo11 from "../../assets/images/landrover.svg";
import logo12 from "../../assets/images/mazda.svg";
import logo13 from "../../assets/images/mercedes.svg";
import logo14 from "../../assets/images/nissan.svg";
import logo15 from "../../assets/images/porsche.svg";
import logo16 from "../../assets/images/subaru.svg";
import logo17 from "../../assets/images/tesla.svg";
import logo18 from "../../assets/images/toyota.svg";
import logo19 from "../../assets/images/volkswagen.svg";
import logo20 from "../../assets/images/volvo.svg";

const Hero = () => {
  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
  ];

  const searchBarVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
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
        <img src={assets.car} alt="Luxury Car" className="car-image" />
      </motion.div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Search Bar */}
        <motion.div
          className="search-container"
          initial="initial"
          animate="animate"
          variants={searchBarVariants}
        >
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for brand, model or category..."
              className="search-input"
            />
            <button className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </motion.div>

        {/* Logo Carousel */}
        <div className="logo-carousel">
          <div className="logo-track">
            {logos.map((logo, index) => (
              <div key={index} className="logo-slide">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="logo-slide">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
