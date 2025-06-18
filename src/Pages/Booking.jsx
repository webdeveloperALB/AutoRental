import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Fuel, Battery, Leaf } from "lucide-react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import "./Booking.css";
import PropTypes from "prop-types";

// Import images using Vite's import.meta.glob for automatic optimization
// This allows Vite to optimize and hash the images during build
const carImages = import.meta.glob("/public/cars/**/*.jpg", { eager: true });

const cars = [
  {
    id: 1,
    name: "Mercedes Benz S-Class W222 Lungo - 6.3 AMG Look",
    categories: ["Sedan", "Luxury", "Sports"],
    price: 250,
    images: [
      {
        url: "/cars/s-class/7V3A8562.jpg",
        label: "Front View",
      },
      {
        url: "/cars/s-class/7V3A8568.jpg",
        label: "Front View",
      },
      {
        url: "/cars/s-class/7V3A8544.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/s-class/7V3A8540.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/s-class/7V3A8572.jpg",
        label: "Interior",
      },
      {
        url: "/cars/s-class/7V3A8587.jpg",
        label: "Interior Behind",
      },
      {
        url: "/cars/s-class/7V3A8554.jpg",
        label: "Side View",
      },
    ],
    features: {
      transmission: "Automatic",
      engineSize: "V8 Biturbo 4.7L",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 128,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "BMW Seria 6 M Packet BiTurbo 400 HP",
    categories: ["Sports", "Luxury"],
    price: 150,
    images: [
      {
        url: "/cars/bmw seria 6/7V3A9685.jpg",
        label: "Front View",
      },
      {
        url: "/cars/bmw seria 6/7V3A9677.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/bmw seria 6/7V3A9702.jpg",
        label: "Interior",
      },
      {
        url: "/cars/bmw seria 6/7V3A9698.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.8,
    reviews: 96,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    name: "Volkswagen Passat CC",
    categories: [" Sedan"],
    price: 50,
    images: [
      {
        url: "/cars/passat cc/7V3A9613.jpg",
        label: "Front View",
      },
      {
        url: "/cars/passat cc/7V3A9625.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/passat cc/7V3A9628.jpg",
        label: "Interior",
      },
      {
        url: "/cars/passat cc/7V3A9606.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.9,
    reviews: 156,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    name: "AUDI A7 BiTDI 3x S-line",
    images: [
      {
        url: "/cars/audi a7 white/7V3A8612.jpg",
        label: "Front View",
      },
      {
        url: "/cars/audi a7 white/7V3A8622.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/audi a7 white/7V3A8624.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/audi a7 white/7V3A8603.jpg",
        label: "Interior",
      },
      {
        url: "/cars/audi a7 white/7V3A8600.jpg",
        label: "Side View",
      },
    ],
    categories: ["Sports", "Sedan", "Luxury"],
    price: 150,
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 5.0,
    reviews: 84,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 5,
    name: "Mercedes Benz C Class",
    category: "Sedan",
    price: 60,
    images: [
      {
        url: "/cars/c-class 1.8/7V3A9658.jpg",
        label: "Front View",
      },
      {
        url: "/cars/c-class 1.8/7V3A9673.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/c-class 1.8/7V3A9654.jpg",
        label: "Interior",
      },
      {
        url: "/cars/c-class 1.8/7V3A9646.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "1.8",
    },
    rating: 4.7,
    reviews: 92,
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 6,
    name: "Bmw X6 M Packet",
    category: "Suv",
    price: 150,
    images: [
      {
        url: "/cars/bmw x6/7V3A8659.jpg",
        label: "Front View",
      },
      {
        url: "/cars/bmw x6/7V3A8657.jpg",
        label: "Front View",
      },
      {
        url: "/cars/bmw x6/7V3A8677.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/bmw x6/7V3A8670.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/bmw x6/7V3A8637.jpg",
        label: "Interior",
      },
      {
        url: "/cars/bmw x6/7V3A8646.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.6,
    reviews: 215,
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    name: "Volkswagen Golf 7",
    category: "Economy",
    price: 60,
    images: [
      {
        url: "/cars/golf 7/7V3A9591.jpg",
        label: "Front View",
      },
      {
        url: "/cars/golf 7/7V3A9598.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/golf 7/7V3A9585.jpg",
        label: "Interior",
      },
      {
        url: "/cars/golf 7/7V3A9578.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "1.6",
    },
    rating: 4.8,
    reviews: 145,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Audi A7 SuperCharger",
    categories: ["Sports", "Luxury"],
    price: 150,
    images: [
      {
        url: "/cars/audi a7 gri/7V3A9798.jpg",
        label: "Front View",
      },
      {
        url: "/cars/audi a7 gri/7V3A9805.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/audi a7 gri/7V3A9808.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/audi a7 gri/7V3A9794.jpg",
        label: "Interior",
      },
      {
        url: "/cars/audi a7 gri/7V3A9780.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 5.0,
    reviews: 42,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    id: 9,
    name: "Mercedes Benz E-Class W213",
    categories: ["Sports", "Sedan"],
    price: 230,
    images: [
      {
        url: "/cars/e-class 3.0/7V3A8709.jpg",
        label: "Front View",
      },
      {
        url: "/cars/e-class 3.0/7V3A8716.jpg",
        label: "Front View",
      },
      {
        url: "/cars/e-class 3.0/7V3A8726.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/e-class 3.0/7V3A8723.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/e-class 3.0/7V3A8700.jpg",
        label: "Interior",
      },
      {
        url: "/cars/e-class 3.0/7V3A8681.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      engineSize: "3.0",
    },
    rating: 4.7,
    reviews: 168,
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: 10,
    name: "Mercedes Benz E-Class W212",
    categories: ["Luxury", "Sedan"],
    price: 80,
    images: [
      {
        url: "/cars/e class 2.2/7V3A9763.jpg",
        label: "Front View",
      },
      {
        url: "/cars/e class 2.2/7V3A9770.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/e class 2.2/7V3A9758.jpg",
        label: "Interior",
      },
      {
        url: "/cars/e class 2.2/7V3A9746.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.8,
    reviews: 134,
    color: "bg-gray-50",
    iconColor: "text-gray-500",
  },
  {
    id: 11,
    name: "BMW Seria 4",
    categories: ["Coupe", "Sports", "Luxury"],
    price: 80,
    images: [
      {
        url: "/cars/bmw seria 4/7V3A9724.jpg",
        label: "Front View",
      },
      {
        url: "/cars/bmw seria 4/7V3A9742.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/bmw seria 4/7V3A9716.jpg",
        label: "Interior",
      },
      {
        url: "/cars/bmw seria 4/7V3A9706.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 12,
    name: "C-Class W204 Wagon",
    category: "Sedan",
    price: 35,
    images: [
      {
        url: "/cars/c class w204 wagon/3.jpg",
        label: "Front View",
      },
      {
        url: "/cars/c class w204 wagon/4.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/c class w204 wagon/2.jpg",
        label: "Interior",
      },
      {
        url: "/cars/c class w204 wagon/1.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.2",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 13,
    name: "Hyundai Santa Fe",
    categories: ["SUV"],
    price: 50,
    images: [
      {
        url: "/cars/3.jpg",
        label: "Front View",
      },
      {
        url: "/cars/hyundai santa fe/4.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/hyundai santa fe/2.jpg",
        label: "Interior",
      },
      {
        url: "/cars/hyundai santa fe/1.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "2.0",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 14,
    name: "Volkswagen Touran 5+2",
    categories: ["Economy", "SUV"],
    price: 50,
    images: [
      {
        url: "/cars/touran/3.jpg",
        label: "Front View",
      },
      {
        url: "/cars/touran/4.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/touran/2.jpg",
        label: "Interior",
      },
      {
        url: "/cars/touran/1.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Manual",
      engineSize: "1.9",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 15,
    name: "Hyundai Accent",
    categories: ["Economy"],
    price: 35,
    images: [
      {
        url: "/cars/hyundai accent/3.jpg",
        label: "Front View",
      },
      {
        url: "/cars/hyundai accent/4.jpg",
        label: "Rear View",
      },
      {
        url: "/cars/hyundai accent/2.jpg",
        label: "Interior",
      },
      {
        url: "/cars/hyundai accent/1.jpg",
        label: "Side View",
      },
    ],
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      engineSize: "1.6",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

// Helper function to get optimized image URL
const getOptimizedImageUrl = (path) => {
  // Remove leading slash if present for matching with import.meta.glob paths
  const normalizedPath = path.startsWith("/") ? path.substring(1) : path;

  // Try to find the image in the imported images
  const matchingImage = Object.entries(carImages).find(([key]) =>
    key.includes(normalizedPath)
  );

  // If found, return the optimized URL, otherwise return the original path
  return matchingImage ? matchingImage[1].default : path;
};

// Image component with lazy loading and optimization
const OptimizedImage = ({ src, alt, className, draggable = false }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const optimizedSrc = getOptimizedImageUrl(src);

  useEffect(() => {
    // Set up intersection observer for lazy loading
    const currentImgRef = imgRef.current;
    if (!currentImgRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When image comes into view, load it
            const img = entry.target;
            img.src = optimizedSrc;
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "200px" }
    ); // Start loading when image is 200px from viewport

    observer.observe(currentImgRef);

    return () => {
      if (currentImgRef) observer.unobserve(currentImgRef);
    };
  }, [optimizedSrc]);

  return (
    <img
      ref={imgRef}
      src={
        loaded
          ? optimizedSrc
          : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4="
      } // Tiny placeholder
      alt={alt}
      className={`${className} ${!loaded ? "blur-sm" : ""}`}
      draggable={draggable}
      onLoad={() => setLoaded(true)}
      loading="lazy"
      decoding="async"
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  draggable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

OptimizedImage.defaultProps = {
  className: "",
  draggable: false,
};

const CarDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(3); // Default to 3 for backward compatibility
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [dragThreshold, setDragThreshold] = useState(100); // Threshold to trigger slide change
  const [galleryHeight, setGalleryHeight] = useState(400); // Dynamic gallery height
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const car = cars.find((car) => car.id === Number.parseInt(id));
    setSelectedCar(car);

    // Set the total number of slides based on the images array if available
    if (car && car.images && car.images.length > 0) {
      setTotalSlides(car.images.length);

      // Preload the first 3 images for faster initial display
      if (car.images.length > 0) {
        car.images.slice(0, 3).forEach((image) => {
          const img = new Image();
          img.src = getOptimizedImageUrl(image.url);
        });
      }
    } else {
      setTotalSlides(3); // Fallback to 3 for backward compatibility
    }

    // Set mobile view state
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
      // Adjust gallery height based on screen dimensions for mobile
      if (window.innerWidth < 768) {
        const aspectRatio = 3 / 4; // Common car photo aspect ratio
        const availableWidth = window.innerWidth - 32; // Account for padding
        setGalleryHeight(availableWidth * aspectRatio);
      } else {
        setGalleryHeight(400); // Default height for desktop
      }
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, [id]);

  const [rentalDetails, setRentalDetails] = useState({
    pickUpDate: "",
    dropOffDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format dates
    const formatDate = (dateString) => {
      const options = { day: "numeric", month: "long", year: "numeric" };
      return new Date(dateString).toLocaleDateString(t("locale"), options);
    };

    // Get categories as comma-separated string
    const carCategories = selectedCar.categories
      ? selectedCar.categories.join(", ")
      : selectedCar.category;

    // Create WhatsApp message
    const message = t("whatsappMessage", {
      carName: selectedCar.name,
      price: selectedCar.price,
      pickUpDate: formatDate(rentalDetails.pickUpDate),
      dropOffDate: formatDate(rentalDetails.dropOffDate),
      location: rentalDetails.location,
      categories: carCategories,
      transmission: selectedCar.features.transmission,
      engineSize: selectedCar.features.engineSize,
      fuel: selectedCar.features.fuel,
    });

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (include country code without + sign)
    const whatsappNumber = "355698357378";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index) => {
      if (!scrollContainerRef.current) return;

      // Ensure index is within bounds
      const newIndex = Math.max(0, Math.min(index, totalSlides - 1));

      setActiveIndex(newIndex);

      // Get container width for precise sliding
      const containerWidth = scrollContainerRef.current.clientWidth;

      // Apply smooth transition
      scrollContainerRef.current.style.transition = "transform 0.3s ease-out";
      const newTranslate = -newIndex * containerWidth;
      scrollContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
      setPrevTranslate(newTranslate);
      setCurrentTranslate(newTranslate);

      // Preload the next image if it exists
      if (
        selectedCar &&
        selectedCar.images &&
        selectedCar.images[newIndex + 1]
      ) {
        const nextImage = new Image();
        nextImage.src = getOptimizedImageUrl(
          selectedCar.images[newIndex + 1].url
        );
      }
    },
    [totalSlides, selectedCar]
  );

  // Navigate to previous slide
  const prevSlide = () => {
    goToSlide(activeIndex - 1);
  };

  // Navigate to next slide
  const nextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  // Mouse down event for drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);

    // Disable transition during drag
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition = "none";
    }

    // Prevent default behavior
    e.preventDefault();
  };

  // Touch start event for mobile drag scrolling
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);

    // Disable transition during drag
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition = "none";
    }
  };

  // Mouse move event for drag scrolling
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const diff = currentX - startX;
    const newTranslate = prevTranslate + diff;

    setCurrentTranslate(newTranslate);

    // Apply the translation
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  // Touch move event for mobile drag scrolling
  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const newTranslate = prevTranslate + diff;

    setCurrentTranslate(newTranslate);

    // Apply the translation
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  // End dragging
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate which slide to snap to based on drag distance
    const dragDistance = currentTranslate - prevTranslate;

    if (Math.abs(dragDistance) > dragThreshold) {
      // If dragged far enough, move to next/prev slide
      if (dragDistance > 0) {
        // Dragged right -> go to previous slide
        goToSlide(activeIndex - 1);
      } else {
        // Dragged left -> go to next slide
        goToSlide(activeIndex + 1);
      }
    } else {
      // If not dragged far enough, snap back to current slide
      goToSlide(activeIndex);
    }
  };

  // Set initial slide position when component mounts
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Initialize container position
      goToSlide(0);

      // Update drag threshold based on container width
      setDragThreshold(scrollContainerRef.current.clientWidth * 0.15); // 15% of container width
    }
  }, [selectedCar, goToSlide]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        // Re-calculate position on resize
        goToSlide(activeIndex);

        // Update drag threshold
        setDragThreshold(scrollContainerRef.current.clientWidth * 0.15);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, goToSlide]);

  // Loading state
  if (!selectedCar) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-700">
          {t("loading")}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:p-6 mt-16 md:mt-20">
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-10">
        {/* Car Image Gallery */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="relative">
            {/* Gallery Container */}
            <div
              className="relative overflow-hidden rounded-lg shadow-md"
              style={{ height: `${galleryHeight}px` }}
            >
              {/* Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex h-full w-full"
                style={{
                  cursor: isDragging ? "grabbing" : "grab",
                  transform: "translateX(0px)",
                  willChange: "transform",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleDragEnd}
              >
                {selectedCar.images && selectedCar.images.length > 0 ? (
                  // Render from images array if available
                  selectedCar.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-full h-full"
                    >
                      <OptimizedImage
                        src={image.url || "/placeholder.svg"}
                        alt={`${selectedCar.name} - ${t(image.label)}`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                        {t(image.label)}
                      </span>
                    </div>
                  ))
                ) : (
                  // Fallback for backward compatibility
                  <>
                    {/* Front View */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <OptimizedImage
                        src={selectedCar.image || "/placeholder.svg"}
                        alt={`${selectedCar.name} ${t("frontView")}`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                        {t("frontView")}
                      </span>
                    </div>

                    {/* Rear View */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <OptimizedImage
                        src={selectedCar.imageBehind || "/placeholder.svg"}
                        alt={`${selectedCar.name} ${t("rearView")}`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                        {t("rearView")}
                      </span>
                    </div>

                    {/* Interior */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <OptimizedImage
                        src={selectedCar.imageInside || "/placeholder.svg"}
                        alt={`${selectedCar.name} ${t("interior")}`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                        {t("interior")}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Arrows - Larger touch targets for mobile */}
              {activeIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 shadow-md z-10 transition-all"
                  aria-label={t("previousImage2")}
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              )}

              {activeIndex < totalSlides - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 shadow-md z-10 transition-all"
                  aria-label={t("nextImage2")}
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              )}
            </div>

            {/* Pagination Indicators - More compact for mobile */}
            <div className="flex justify-center mt-3 gap-1.5 md:gap-2">
              {selectedCar.images && selectedCar.images.length > 0
                ? selectedCar.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? "bg-black w-3 md:w-4"
                          : "bg-gray-300"
                      }`}
                      aria-label={t("goToImage2", { number: index + 1 })}
                    />
                  ))
                : // Fallback for backward compatibility
                  [0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? "bg-black w-3 md:w-4"
                          : "bg-gray-300"
                      }`}
                      aria-label={t("goToImage2", { number: index + 1 })}
                    />
                  ))}
            </div>
          </div>
        </div>

        {/* Car Details - Improved padding and font sizes for mobile */}
        <div className="w-full md:w-1/2 bg-white shadow-lg md:shadow-xl rounded-lg p-5 md:p-8">
          {/* Car Name - More compact for mobile */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {selectedCar.name}
          </h2>

          {/* Display multiple categories - Improved wrapping */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
            {selectedCar.categories ? (
              // Display multiple categories as tags if available
              selectedCar.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm"
                >
                  {t(`categories.${category.toLowerCase().trim()}`)}
                </span>
              ))
            ) : (
              // Fallback to single category
              <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm">
                {t(`categories.${selectedCar.category.toLowerCase().trim()}`)}
              </span>
            )}
            <span className="ml-auto text-lg md:text-xl font-semibold">
              €{selectedCar.price}/{t("day2")}
            </span>
          </div>

          {/* Rest of the component remains the same */}
          {/* Car Rating - Compressed for mobile */}
          <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
            <div className="flex items-center space-x-1">
              <span className="text-xl md:text-2xl font-semibold text-gray-500">
                {selectedCar.rating}
              </span>
              <div className="flex text-sm text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={
                      index < Math.floor(selectedCar.rating)
                        ? "currentColor"
                        : "none"
                    }
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.25l-6.403 3.377 1.233-7.264L1.43 7.642l7.361-.734L12 1.5l3.522 5.377 7.361.734-5.733 5.721 1.233 7.264L12 17.25z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-xs md:text-sm text-gray-500">
              ({selectedCar.reviews} {t("reviews2")})
            </span>
          </div>

          {/* Car Features - Better grid for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              {selectedCar.features.fuel === "Electric" ? (
                <Battery className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
              ) : selectedCar.features.fuel === "Hybrid" ? (
                <Leaf className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
              ) : (
                <Fuel className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
              )}
              <span>
                {t(`fuel.${selectedCar.features.fuel.toLowerCase()}`)}{" "}
                {t("fuelType2")}
              </span>
            </div>
            {selectedCar.features.transmission && (
              <div className="flex items-center space-x-2">
                <Icon
                  icon="lucide-lab:gearbox"
                  className="h-4 w-4 md:h-5 md:w-5 text-gray-600"
                />
                <span>
                  {t(
                    `transmission.${selectedCar.features.transmission.toLowerCase()}`
                  )}{" "}
                  {t("transmissionType2")}
                </span>
              </div>
            )}
            {selectedCar.features.engineSize && (
              <div className="flex items-center space-x-2">
                <Icon
                  icon="mdi:engine"
                  className="h-4 w-4 md:h-5 md:w-5 text-gray-600"
                />
                <span>
                  {t("engineSize2")}: {selectedCar.features.engineSize}
                </span>
              </div>
            )}
          </div>

          {/* Booking Form - Better spacing on mobile */}
          <form onSubmit={handleSubmit} className="mt-2 md:mt-0">
            <div className="space-y-4 md:space-y-6">
              {/* Date inputs side by side on wider mobile screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="pickUpDate"
                    className="text-xs md:text-sm text-gray-600 mb-1"
                  >
                    {t("booking.pickUpDate")}
                  </label>
                  <input
                    type="date"
                    name="pickUpDate"
                    value={rentalDetails.pickUpDate}
                    onChange={handleChange}
                    className="p-2 md:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="dropOffDate"
                    className="text-xs md:text-sm text-gray-600 mb-1"
                  >
                    {t("booking.dropOffDate")}
                  </label>
                  <input
                    type="date"
                    name="dropOffDate"
                    value={rentalDetails.dropOffDate}
                    onChange={handleChange}
                    className="p-2 md:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                    required
                    min={
                      rentalDetails.pickUpDate ||
                      new Date().toISOString().split("T")[0]
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="location"
                  className="text-xs md:text-sm text-gray-600 mb-1"
                >
                  {t("booking.pickupLocation")}
                </label>
                <input
                  type="text"
                  name="location"
                  value={rentalDetails.location}
                  onChange={handleChange}
                  placeholder={t("booking.enterLocation")}
                  className="p-2 md:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  required
                />
              </div>
            </div>

            {/* Fixed at bottom on mobile for better UX */}
            <button
              type="submit"
              className={`mt-4 md:mt-6 w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 active:scale-95 transition-all duration-300 text-sm md:text-base font-medium ${
                isMobileView ? "sticky bottom-4" : ""
              }`}
            >
              {t("booking.confirmBooking")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
