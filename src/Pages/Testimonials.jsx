import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  Star,
  Quote,
  ThumbsUp,
  Users,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  // Dynamically get testimonials from translation
  const testimonials = t('testimonials.testimonialData', { returnObjects: true });
  const stats = t('testimonials.stats', { returnObjects: true });
  const reviewHighlights = t('testimonials.reviewHighlights', { returnObjects: true });

  // Function to handle user interaction
  const handleInteraction = () => {
    // When user interacts, pause the autoplay
    setAutoplay(false);

    // Reset autoplay after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoplay(true);
    }, 10000);

    return () => clearTimeout(timer);
  };

  // Autoplay effect
  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Carousel functions
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Quote className="w-5 h-5 text-black" />
              <span className="text-black font-medium">
                {t('testimonials.heroSection.badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('testimonials.heroSection.title', { 
                color: <span className="text-red-600">Customers</span> 
              })}
            </h1>
            <p className="text-black text-lg leading-relaxed">
              {t('testimonials.heroSection.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-100 group hover:bg-white transition-colors"
              >
                <div className="flex justify-center mb-4">
                  {index === 0 && <Users className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />}
                  {index === 1 && <Star className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />}
                  {index === 2 && <ThumbsUp className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />}
                  {index === 3 && <MessageCircle className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-6 mb-8 flex-col md:flex-row">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">
                        {testimonials[activeIndex].name}
                      </h3>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-600">
                        {testimonials[activeIndex].role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {testimonials[activeIndex].comment}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>
                        Car Rented: {testimonials[activeIndex].carRented}
                      </span>
                      <span>•</span>
                      <span>{testimonials[activeIndex].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex flex-col items-center gap-4 mt-6">
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setActiveIndex(index);
                      handleInteraction();
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    prevTestimonial();
                    handleInteraction();
                  }}
                  className="p-2 rounded-full bg-white border border-gray-500 text-black hover:bg-black hover:border-white hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    nextTestimonial();
                    handleInteraction();
                  }}
                  className="p-2 rounded-full bg-white border border-gray-500 text-black hover:bg-black hover:border-white hover:text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('testimonials.reviewSection.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.reviewSection.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg p-6 text-center"
              >
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {highlight.count.toLocaleString()}+
                </h3>
                <p className="text-black">{highlight.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-white rounded-2xl p-8 md:p-12 text-center text-black"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('testimonials.ctaSection.title')}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-black">
              {t('testimonials.ctaSection.subtitle')}
            </p>
            <a
              href="https://wa.me/355698357378"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-lg font-medium 
               transition-colors"
              >
                {t('testimonials.ctaSection.buttonText')}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;