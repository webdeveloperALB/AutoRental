"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  Car,
  Search,
  Fuel,
  Star,
  HelpCircle,
  Calendar,
  MapPin,
  X,
  Settings,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Icon } from "@iconify/react";

const carModels = [
  {
    id: 1,
    name: "Mercedes Benz S-Class W222",
    categories: ["Sedan", "Luxury", "Sports"],
    price: 250,
    images: [
      "/cars/s-class/7V3A8562.jpg",
      "/cars/s-class/7V3A8568.jpg",
      "/cars/s-class/7V3A8544.jpg",
      "/cars/s-class/7V3A8540.jpg",
      "/cars/s-class/7V3A8572.jpg",
      "/cars/s-class/7V3A8587.jpg",
      "/cars/s-class/7V3A8554.jpg",
    ],
    features: {
      transmission: "Automatic",
      engineSize: "V8 Biturbo 4.7L",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 128,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "BMW 6 Series M Packet BiTurbo 400 HP",
    categories: ["Sports", "Luxury"],
    price: 150,
    images: [
      "/cars/bmw seria 6/7V3A9685.jpg",
      "/cars/bmw seria 6/7V3A9677.jpg",
      "/cars/bmw seria 6/7V3A9702.jpg",
      "/cars/bmw seria 6/7V3A9698.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.8,
    reviews: 96,
    color: "bg-gray-100",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    name: "Volkswagen Passat CC",
    categories: [" Sedan"],
    price: 50,
    images: [
      "/cars/passat cc/7V3A9613.jpg",
      "/cars/passat cc/7V3A9625.jpg",
      "/cars/passat cc/7V3A9628.jpg",
      "/cars/passat cc/7V3A9606.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.9,
    reviews: 156,
    color: "bg-gray-100",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    name: "AUDI A7 BiTDI 3x S-line",
    categories: ["Sports", "Sedan", "Luxury"],
    price: 150,
    images: [
      "/cars/audi a7 white/7V3A8612.jpg",
      "/cars/audi a7 white/7V3A8622.jpg",
      "/cars/audi a7 white/7V3A8624.jpg",
      "/cars/audi a7 white/7V3A8603.jpg",
      "/cars/audi a7 white/7V3A8600.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 5.0,
    reviews: 84,
    color: "bg-gray-100",
    iconColor: "text-green-500",
  },
  {
    id: 5,
    name: "Mercedes Benz C Class",
    category: "Sedan",
    price: 60,
    images: [
      "/cars/c-class 1.8/7V3A9658.jpg",
      "/cars/c-class 1.8/7V3A9673.jpg",
      "/cars/c-class 1.8/7V3A9654.jpg",
      "/cars/c-class 1.8/7V3A9646.jpg",
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "1.8",
    },
    rating: 4.7,
    reviews: 92,
    color: "bg-gray-100",
    iconColor: "text-red-500",
  },
  {
    id: 6,
    name: "Bmw X6 M Packet",
    category: "Suv",
    price: 150,
    images: [
      "/cars/bmw x6/7V3A8659.jpg",
      "/cars/bmw x6/7V3A8657.jpg",
      "/cars/bmw x6/7V3A8677.jpg",
      "/cars/bmw x6/7V3A8670.jpg",
      "/cars/bmw x6/7V3A8637.jpg",
      "/cars/bmw x6/7V3A8646.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.6,
    reviews: 215,
    color: "bg-gray-100",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    name: "Volkswagen Golf 7",
    category: "Economy",
    price: 60,
    images: [
      "/cars/golf 7/7V3A9591.jpg",
      "/cars/golf 7/7V3A9598.jpg",
      "/cars/golf 7/7V3A9585.jpg",
      "/cars/golf 7/7V3A9578.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "1.6",
    },
    rating: 4.8,
    reviews: 145,
    color: "bg-gray-100",
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Audi A7 SuperCharger",
    categories: ["Sports", "Luxury"],
    price: 150,
    images: [
      "/cars/audi a7 gri/7V3A9798.jpg",
      "/cars/audi a7 gri/7V3A9805.jpg",
      "/cars/audi a7 gri/7V3A9808.jpg",
      "/cars/audi a7 gri/7V3A9794.jpg",
      "/cars/audi a7 gri/7V3A9780.jpg",
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 5.0,
    reviews: 42,
    color: "bg-gray-100",
    iconColor: "text-pink-500",
  },
  {
    id: 9,
    name: "Mercedes Benz E-Class W213",
    categories: ["Sports", "Sedan"],
    price: 230,
    images: [
      "/cars/e-class 3.0/7V3A8709.jpg",
      "/cars/e-class 3.0/7V3A8716.jpg",
      "/cars/e-class 3.0/7V3A8726.jpg",
      "/cars/e-class 3.0/7V3A8723.jpg",
      "/cars/e-class 3.0/7V3A8700.jpg",
      "/cars/e-class 3.0/7V3A8681.jpg",
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.7,
    reviews: 168,
    color: "bg-gray-100",
    iconColor: "text-teal-500",
  },
  {
    id: 10,
    name: "Mercedes Benz E-Class W212",
    categories: ["Luxury", "Sedan"],
    price: 80,
    images: [
      "cars/e class 2.2/7V3A9763.jpg",
      "cars/e class 2.2/7V3A9770.jpg",
      "cars/e class 2.2/7V3A9758.jpg",
      "cars/e class 2.2/7V3A9746.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.8,
    reviews: 134,
    color: "bg-gray-100",
    iconColor: "text-gray-500",
  },
  {
    id: 11,
    name: "BMW 4 Series",
    categories: ["Coupe", "Sports", "Luxury"],
    price: 80,
    images: [
      "cars/bmw seria 4/7V3A9724.jpg",
      "cars/bmw seria 4/7V3A9742.jpg",
      "cars/bmw seria 4/7V3A9716.jpg",
      "cars/bmw seria 4/7V3A9706.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
  {
    id: 12,
    name: "C-Class W204 Wagon",
    category: "Sedan",
    price: 35,
    images: [
      "cars/c class w204 wagon/3.jpg",
      "cars/c class w204 wagon/4.jpg",
      "cars/c class w204 wagon/2.jpg",
      "cars/c class w204 wagon/1.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.2",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
  {
    id: 13,
    name: "Hyundai Santa Fe",
    categories: ["SUV"],
    price: 50,
    images: [
      "/cars/hyundai santa fe/3.jpg",
      "/cars/hyundai santa fe/4.jpg",
      "/cars/hyundai santa fe/2.jpg",
      "/cars/hyundai santa fe/1.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
  {
    id: 14,
    name: "Volkswagen Touran 5+2",
    categories: ["Economy", "SUV"],
    price: 35,
    images: [
      "/cars/touran/3.jpg",
      "/cars/touran/4.jpg",
      "/cars/touran/2.jpg",
      "/cars/touran/5.jpg",
      "/cars/touran/1.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Manual",
      engineSize: "1.9",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
  {
    id: 15,
    name: "Hyundai Accent",
    categories: ["Economy"],
    price: 35,
    images: [
      "/cars/hyundai accent/3.jpg",
      "/cars/hyundai accent/4.jpg",
      "/cars/hyundai accent/2.jpg",
      "/cars/hyundai accent/1.jpg",
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "1.6",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-gray-100",
    iconColor: "text-blue-500",
  },
];

// Simple but highly optimized image component
const FastImage = ({ src, alt, className, priority = false, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}

      {/* Main image */}
      {isInView && (
        <img
          src={hasError ? "/placeholder.svg" : src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-contain sm:object-cover transition-opacity duration-300 rounded-lg ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable="false"
          {...props}
        />
      )}
    </div>
  );
};

FastImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
};

const ImageCarousel = ({ images, carId, navigate }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Reference to track if component is mounted
  const isMounted = useRef(true);

  // Track interaction type to prevent conflicts between touch/mouse and buttons
  const interactionType = useRef(null); // Can be 'touch', 'mouse', or 'button'

  // Store position for velocity calculations
  const lastX = useRef(0);
  const touchStartTime = useRef(0);

  // Threshold for swipe detection
  const minSwipeDistance = 10;

  // Reset interaction type after a delay
  const resetInteractionType = useCallback(() => {
    setTimeout(() => {
      if (isMounted.current) {
        interactionType.current = null;
      }
    }, 300);
  }, []);

  // Handle image click - only navigate if not swiping
  const handleImageClick = useCallback(() => {
    if (!isSwiping) {
      navigate(`/booking/${carId}`);
    }
  }, [isSwiping, navigate, carId]);

  // Navigation functions with interaction type tracking
  const prevImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();

      // Prevent navigation if already in progress or if touch/mouse interaction is happening
      if (
        isNavigating ||
        (interactionType.current && interactionType.current !== "button")
      )
        return;

      // Set interaction type to button
      interactionType.current = "button";

      // Set navigation lock
      setIsNavigating(true);

      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );

      // Release navigation lock after animation completes
      setTimeout(() => {
        if (isMounted.current) {
          setIsNavigating(false);
          resetInteractionType();
        }
      }, 300);
    },
    [images?.length, isNavigating, resetInteractionType]
  );

  const nextImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();

      // Prevent navigation if already in progress or if touch/mouse interaction is happening
      if (
        isNavigating ||
        (interactionType.current && interactionType.current !== "button")
      )
        return;

      // Set interaction type to button
      interactionType.current = "button";

      // Set navigation lock
      setIsNavigating(true);

      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

      // Release navigation lock after animation completes
      setTimeout(() => {
        if (isMounted.current) {
          setIsNavigating(false);
          resetInteractionType();
        }
      }, 300);
    },
    [images?.length, isNavigating, resetInteractionType]
  );

  // Store event handlers in refs to avoid dependency cycles
  const handleMouseMoveRef = useRef(null);
  const handleMouseUpRef = useRef(null);

  // Touch handling with interaction type tracking
  const handleTouchStart = useCallback(
    (e) => {
      // Skip if we're already navigating or another interaction is in progress
      if (
        isNavigating ||
        (interactionType.current && interactionType.current !== "touch")
      )
        return;

      // Set interaction type to touch
      interactionType.current = "touch";

      // Store the starting position and time for velocity calculation
      const touchX = e.targetTouches[0].clientX;
      setTouchStart(touchX);
      setTouchEnd(touchX);
      lastX.current = touchX;
      touchStartTime.current = Date.now();
      setIsSwiping(false);
    },
    [isNavigating]
  );

  const handleTouchMove = useCallback(
    (e) => {
      // Skip if we're in navigation lock or if this isn't a touch interaction
      if (isNavigating || interactionType.current !== "touch") return;

      const currentX = e.targetTouches[0].clientX;
      setTouchEnd(currentX);

      // Calculate horizontal movement
      const horizontalDistance = Math.abs(lastX.current - currentX);

      // Update last position for next move event
      lastX.current = currentX;

      // Only block default scroll behavior if significant horizontal movement
      if (horizontalDistance > 5) {
        e.preventDefault();
        setIsSwiping(true);
      }
    },
    [isNavigating]
  );

  const handleTouchEnd = useCallback(() => {
    // Skip if we're in navigation lock or missing touch data or if this isn't a touch interaction
    if (
      isNavigating ||
      !touchStart ||
      !touchEnd ||
      interactionType.current !== "touch"
    )
      return;

    const distance = touchStart - touchEnd;
    const touchDuration = Date.now() - touchStartTime.current;

    // Calculate swipe velocity for more responsive feel
    const velocity = Math.abs(distance) / touchDuration;

    // Check if swipe was fast enough or distance was significant enough
    if (Math.abs(distance) >= minSwipeDistance || velocity > 0.2) {
      // Set navigation lock before changing image
      setIsNavigating(true);

      if (distance > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }

      // Release the navigation lock after animation completes
      setTimeout(() => {
        if (isMounted.current) {
          setIsNavigating(false);
          resetInteractionType();
        }
      }, 300);
    } else {
      // If no significant swipe, just reset the interaction type
      resetInteractionType();
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);

    // Use a short delay for more responsive feel
    const timer = setTimeout(() => {
      if (isMounted.current) {
        setIsSwiping(false);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [
    touchStart,
    touchEnd,
    minSwipeDistance,
    isNavigating,
    images?.length,
    resetInteractionType,
  ]);

  // Mouse handling with interaction type tracking
  useEffect(() => {
    // Define mouse move handler
    handleMouseMoveRef.current = (e) => {
      // Skip if navigation is locked or if this isn't a mouse interaction
      if (isNavigating || interactionType.current !== "mouse") return;

      setTouchEnd(e.clientX);
      if (Math.abs(lastX.current - e.clientX) > 3) {
        setIsSwiping(true);
      }
      lastX.current = e.clientX;
    };

    // Define mouse up handler
    handleMouseUpRef.current = (e) => {
      document.removeEventListener("mousemove", handleMouseMoveRef.current);
      document.removeEventListener("mouseup", handleMouseUpRef.current);

      // Skip if we're in navigation lock or missing touch data or if this isn't a mouse interaction
      if (isNavigating || !touchStart || interactionType.current !== "mouse")
        return;

      const distance = touchStart - e.clientX;
      const touchDuration = Date.now() - touchStartTime.current;
      const velocity = Math.abs(distance) / touchDuration;

      if (Math.abs(distance) >= minSwipeDistance || velocity > 0.2) {
        // Set navigation lock before changing image
        setIsNavigating(true);

        if (distance > 0) {
          setCurrentIndex((prevIndex) =>
            prevIndex === images?.length - 1 ? 0 : prevIndex + 1
          );
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images?.length - 1 : prevIndex - 1
          );
        }

        // Release navigation lock after animation completes
        setTimeout(() => {
          if (isMounted.current) {
            setIsNavigating(false);
            resetInteractionType();
          }
        }, 300);
      } else {
        // If no significant swipe, just reset the interaction type
        resetInteractionType();
      }

      setTouchStart(0);
      setTouchEnd(0);

      const timer = setTimeout(() => {
        if (isMounted.current) {
          setIsSwiping(false);
        }
      }, 50);

      return () => clearTimeout(timer);
    };
  }, [touchStart, isNavigating, images?.length, resetInteractionType]);

  const handleMouseDown = useCallback(
    (e) => {
      // Skip if in navigation lock or another interaction is in progress
      if (
        isNavigating ||
        (interactionType.current && interactionType.current !== "mouse")
      )
        return;

      // Set interaction type to mouse
      interactionType.current = "mouse";

      const mouseX = e.clientX;
      setTouchStart(mouseX);
      setTouchEnd(mouseX);
      lastX.current = mouseX;
      touchStartTime.current = Date.now();
      setIsSwiping(false);

      document.addEventListener("mousemove", handleMouseMoveRef.current);
      document.addEventListener("mouseup", handleMouseUpRef.current);
    },
    [isNavigating]
  );

  // Clean up event listeners on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
      document.removeEventListener("mousemove", handleMouseMoveRef.current);
      document.removeEventListener("mouseup", handleMouseUpRef.current);
    };
  }, []);

  // Apply touch events
  const touchProps = useMemo(
    () => ({
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
    }),
    [handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown]
  );

  // Pre-load adjacent images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      if (!images || images.length <= 1) return;

      // Load next image
      const nextIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;

      if (images[nextIndex]) {
        const nextImg = new Image();
        nextImg.src = images[nextIndex];
        nextImg.crossOrigin = "anonymous";
      }

      if (images[prevIndex]) {
        const prevImg = new Image();
        prevImg.src = images[prevIndex];
        prevImg.crossOrigin = "anonymous";
      }
    };

    preloadImages();
  }, [currentIndex, images]);

  // Handle indicator clicks with interaction type tracking
  const handleIndicatorClick = useCallback(
    (index, e) => {
      e.stopPropagation();

      // Skip if navigation is in progress or another interaction is happening
      if (
        isNavigating ||
        (interactionType.current && interactionType.current !== "button")
      )
        return;

      // Set interaction type to button
      interactionType.current = "button";

      // Set navigation lock
      setIsNavigating(true);

      setCurrentIndex(index);

      // Release navigation lock after animation completes
      setTimeout(() => {
        if (isMounted.current) {
          setIsNavigating(false);
          resetInteractionType();
        }
      }, 300);
    },
    [isNavigating, resetInteractionType]
  );

  return (
    <div
      className="rounded-lg bg-transparent mb-6 overflow-hidden relative cursor-pointer"
      onClick={handleImageClick}
    >
      {/* Image with optimized touch event handlers */}
      <div className="w-full h-full" {...touchProps}>
        <div className="relative w-full sm:h-[280px]">
          <FastImage
            src={images?.[currentIndex] || "/placeholder.svg"}
            alt={t("carImage")}
            className="w-full h-full transition-all duration-300"
            priority={currentIndex === 0}
            style={{
              willChange: "transform", // Hint browser to optimize transformations
            }}
          />
        </div>
      </div>

      {/* Navigation buttons with a disabled state */}
      <button
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 
                  hover:bg-opacity-70 text-white p-2 rounded-full transition-all
                  ${
                    isNavigating
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
        onClick={prevImage}
        aria-label={t("previousImage")}
        disabled={isNavigating}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 
                  hover:bg-opacity-70 text-white p-2 rounded-full transition-all
                  ${
                    isNavigating
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
        onClick={nextImage}
        aria-label={t("nextImage")}
        disabled={isNavigating}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image indicators */}
      {images && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50"
              } ${
                isNavigating ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              onClick={(e) => handleIndicatorClick(index, e)}
              aria-label={t("goToImage", { number: index + 1 })}
              disabled={isNavigating}
            />
          ))}
        </div>
      )}

      {/* Enhanced visual feedback during swipe for better UX */}
      {isSwiping && touchEnd !== 0 && !isNavigating && (
        <div
          className={`absolute inset-y-0 ${
            touchEnd < touchStart ? "right-0" : "left-0"
          } w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none`}
          style={{
            opacity: Math.min(0.6, Math.abs(touchEnd - touchStart) / 80),
            transition: "opacity 0.1s ease",
          }}
        />
      )}
    </div>
  );
};

// Add PropTypes validation for the ImageCarousel component
ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  carId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  navigate: PropTypes.func.isRequired,
};

// Fixed portion of Models.jsx

const Models = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Updated: Check for both "categories" and "category" URL parameters
  const categoryParam =
    searchParams.get("categories") || searchParams.get("category");
  const searchParam = searchParams.get("search");
  const fuelParam = searchParams.get("fuel");
  const transmissionParam = searchParams.get("transmission");
  const engineSizeParam = searchParams.get("engineSize");

  // Initialize state from URL params - convert to array if coming from single "category" param
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam
      ? categoryParam.includes(",")
        ? categoryParam.split(",")
        : [categoryParam]
      : []
  );
  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [selectedFuel, setSelectedFuel] = useState(fuelParam || "");
  const [selectedTransmission, setSelectedTransmission] = useState(
    transmissionParam || ""
  );
  const [selectedEngineSize, setSelectedEngineSize] = useState(
    engineSizeParam || ""
  );

  // Update URL params when filters change - now using "categories" consistently in the URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0)
      params.set("categories", selectedCategories.join(","));
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (selectedFuel) params.set("fuel", selectedFuel);
    if (selectedTransmission) params.set("transmission", selectedTransmission);
    if (selectedEngineSize) params.set("engineSize", selectedEngineSize);

    setSearchParams(params);
  }, [
    selectedCategories,
    searchQuery,
    selectedFuel,
    selectedTransmission,
    selectedEngineSize,
    setSearchParams,
  ]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const categories = [
    { name: t("categories.all"), icon: Car },
    { name: t("categories.suv"), icon: Car },
    { name: t("categories.sedan"), icon: Car },
    { name: t("categories.luxury"), icon: Car },
    { name: t("categories.sports"), icon: Car },
    { name: t("categories.economy"), icon: Car },
  ];

  // Extract unique values for filters from car data
  const fuelTypes = [...new Set(carModels.map((car) => car.features.fuel))];
  const transmissionTypes = [
    ...new Set(carModels.map((car) => car.features.transmission)),
  ];
  const engineSizes = [
    ...new Set(
      carModels.map((car) => car.features.engineSize.toString().split(" ")[0])
    ),
  ];

  // Toggle category selection
  const toggleCategory = (category) => {
    if (category === t("categories.all")) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          return prev.filter((cat) => cat !== category);
        } else {
          return [...prev, category];
        }
      });
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedFuel("");
    setSelectedTransmission("");
    setSelectedEngineSize("");
  };

  // Helper function to check if a car matches the selected filters
  const matchesFilters = (car) => {
    // Match categories
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((selected) =>
        (car.categories || [car.category]).includes(selected)
      );

    // Match fuel type
    const matchesFuel = !selectedFuel || car.features.fuel === selectedFuel;

    // Match transmission
    const matchesTransmission =
      !selectedTransmission ||
      car.features.transmission === selectedTransmission;

    // Match engine size - this is a bit trickier since engine sizes might be stored differently
    const matchesEngineSize =
      !selectedEngineSize ||
      car.features.engineSize.toString().includes(selectedEngineSize);

    // Match search query
    const matchesSearch =
      !searchQuery ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesCategories &&
      matchesFuel &&
      matchesTransmission &&
      matchesEngineSize &&
      matchesSearch
    );
  };

  const filteredCars = carModels.filter(matchesFilters);

  // Count active filters (excluding search)
  const activeFilterCount = [
    selectedCategories.length > 0,
    !!selectedFuel,
    !!selectedTransmission,
    !!selectedEngineSize,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-8">
      {/* Hero Section */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
              <Car className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{t("ourFleet")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {t("chooseYourPerfect")}{" "}
              <span className="text-red-600 whitespace-nowrap">
                {t("ride")}
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              {t("experiencePremiumService")}
            </p>
            <p className="text-sm font-medium text-red-600 bg-red-50 inline-block rounded-md py-2 px-4 shadow-sm border border-red-100">
              {t("minimumRentalPeriod")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search bar */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 sm:gap-6">
                {/* Search Bar */}
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder={t("searchForACar")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                      focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                      placeholder-gray-400 text-gray-900 text-sm sm:text-base"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative flex gap-2 overflow-x-auto pb-1 scrollbar-hide md:col-span-2">
                  <div className="flex gap-2 sm:gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => toggleCategory(category.name)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg whitespace-nowrap
                          transition-colors duration-200 min-w-[7rem] sm:min-w-[8.5rem]
                          ${
                            category.name === t("categories.all") &&
                            selectedCategories.length === 0
                              ? "bg-black text-white shadow-md"
                              : selectedCategories.includes(category.name)
                              ? "bg-black text-white shadow-md"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        <category.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          {category.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Always visible filters */}
            <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fuel Type Filter */}
                <div>
                  <h3 className="flex items-center gap-2 font-medium mb-3 text-gray-700">
                    <Fuel className="w-4 h-4" /> {t("fuelType")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {fuelTypes.map((fuel) => (
                      <button
                        key={fuel}
                        onClick={() =>
                          setSelectedFuel(selectedFuel === fuel ? "" : fuel)
                        }
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                        ${
                          selectedFuel === fuel
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {t(`fuel.${fuel.toLowerCase()}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transmission Filter */}
                <div>
                  <h3 className="flex items-center gap-2 font-medium mb-3 text-gray-700">
                    <Settings className="w-4 h-4" /> {t("transmissionType")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {transmissionTypes.map((transmission) => (
                      <button
                        key={transmission}
                        onClick={() =>
                          setSelectedTransmission(
                            selectedTransmission === transmission
                              ? ""
                              : transmission
                          )
                        }
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                        ${
                          selectedTransmission === transmission
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {t(`transmission.${transmission.toLowerCase()}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engine Size Filter */}
                <div>
                  <h3 className="flex items-center gap-2 font-medium mb-3 text-gray-700">
                    <Gauge className="w-4 h-4" /> {t("engineSize")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {engineSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          setSelectedEngineSize(
                            selectedEngineSize === size ? "" : size
                          )
                        }
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                          ${
                            selectedEngineSize === size
                              ? "bg-black text-white"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        {size}L
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              {activeFilterCount > 0 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={clearAllFilters}
                    className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                  >
                    {t("clearAllFilters")}
                  </button>
                </div>
              )}
            </div>

            {/* Active Filter Chips */}
            {(selectedCategories.length > 0 ||
              selectedFuel ||
              selectedTransmission ||
              selectedEngineSize) && (
              <div className="px-4 sm:px-6 pb-4 pt-2 flex flex-wrap gap-2 border-t border-gray-100">
                {selectedCategories.map((category) => (
                  <div
                    key={`selected-${category}`}
                    className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-sm"
                  >
                    <Car className="w-3 h-3" />
                    <span>{category}</span>
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-gray-300"
                      onClick={() => toggleCategory(category)}
                    />
                  </div>
                ))}

                {selectedFuel && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Fuel className="w-3 h-3" />
                    <span>{t(`fuel.${selectedFuel.toLowerCase()}`)}</span>
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-gray-300"
                      onClick={() => setSelectedFuel("")}
                    />
                  </div>
                )}

                {selectedTransmission && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Settings className="w-3 h-3" />
                    <span>
                      {t(`transmission.${selectedTransmission.toLowerCase()}`)}
                    </span>
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-gray-300"
                      onClick={() => setSelectedTransmission("")}
                    />
                  </div>
                )}

                {selectedEngineSize && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Gauge className="w-3 h-3" />
                    <span>{selectedEngineSize}L</span>
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-gray-300"
                      onClick={() => setSelectedEngineSize("")}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Car Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">{t("noCarsFound")}</p>
              </div>
            ) : (
              filteredCars.map((car) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className={`rounded-xl p-4 ${
                      car.color || "bg-gray-50"
                    } transition-all duration-300 
                               group-hover:-translate-y-2`}
                  >
                    {/* Replace static image with ImageCarousel component */}
                    <ImageCarousel
                      images={car.images || [car.image || "/placeholder.svg"]}
                      carId={car.id}
                      navigate={navigate}
                    />

                    {/* Car Info */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                          <div className="flex flex-wrap gap-2">
                            {(car.categories || [car.category]).map((cat) => (
                              <span
                                key={`${car.id}-${cat}`}
                                className="text-sm text-gray-600 bg-gray-100 py-0.5 px-2 rounded-full mr-2 mb-2"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-black">
                            €{car.price}
                          </span>
                          <span className="text-sm text-black">
                            /{t("day")}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap justify-between py-4 border-t border-gray-200 gap-y-3">
                        <div className="flex items-center gap-2">
                          <Fuel className="w-5 h-5 text-gray-500" />
                          <span>
                            {t(`fuel.${car.features.fuel.toLowerCase()}`)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Icon
                            icon="lucide-lab:gearbox"
                            className="w-5 h-5 text-gray-500"
                          />
                          <span>
                            {t(
                              `transmission.${car.features.transmission.toLowerCase()}`
                            )}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Icon
                            icon="mdi:engine"
                            className="w-5 h-5 text-gray-500"
                          />
                          <span>{car.features.engineSize}L</span>
                        </div>
                      </div>

                      {/* Rating and Book Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium">{car.rating}</span>
                          <span className="text-gray-600">
                            ({car.reviews} {t("reviews")})
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/booking/${car.id}`)}
                          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black
                                   transition-colors"
                        >
                          {t("bookNow")}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Quick Booking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-gray-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t("howToBook")}
              </h2>
            </div>
            <p className="text-gray-600">{t("streamlinedProcess")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Car,
                title: t("bookingSteps.chooseCar.title"),
                description: t("bookingSteps.chooseCar.description"),
              },
              {
                icon: Calendar,
                title: t("bookingSteps.pickDate.title"),
                description: t("bookingSteps.pickDate.description"),
              },
              {
                icon: MapPin,
                title: t("bookingSteps.bookAndEnjoy.title"),
                description: t("bookingSteps.bookAndEnjoy.description"),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 p-4 transition-all duration-300 hover:bg-gray-800">
                  <step.icon className="w-10 h-10 text-white flex-shrink-0" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
