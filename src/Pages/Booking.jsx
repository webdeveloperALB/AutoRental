"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Booking.css";

const cars = [
  {
    id: 1,
    name: "Mercedes Benz S Class Lungo",
    category: "Sedan",
    categories: ["Sedan", "Sports", "Luxury"],
    price: 89,
    //image: "/cars/s-class/7V3A8562.png",
    //imageBehind: "/cars/s-class/7V3A8540.png",
    //imageInside: "/cars/s-class/7V3A8562.png",
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
      seats: "4",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 128,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "BMW Seria 6 M Packet",
    category: "Sports",
    price: 129,
    //image: "/Sclass.jpg",
    //imageBehind: "/Sclass2.jpg",
    //imageInside: "/Sclass3.jpg",
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
      seats: "4",
      fuel: "Diesel",
    },
    rating: 4.8,
    reviews: 96,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    name: "Volkswagen Passat CC",
    category: "Sedan",
    price: 199,
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
      seats: "4",
      fuel: "Diesel",
    },
    rating: 4.9,
    reviews: 156,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    name: "AUDI A7 BITDI",
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
    category: "Sports",
    price: 249,
    features: {
      seats: "4",
      fuel: "Diesel",
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
    price: 159,
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
      seats: "5",
      fuel: "Petrol",
    },
    rating: 4.7,
    reviews: 92,
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 6,
    name: "Bmw X6 M Packet",
    category: "Sedan",
    price: 69,
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
      seats: "5",
      fuel: "Diesel",
    },
    rating: 4.6,
    reviews: 215,
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    name: "Volkswagen Golf 7",
    category: "SUV",
    price: 189,
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
    },
    rating: 4.8,
    reviews: 145,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Mercedes Benz S-class",
    category: "Sports",
    price: 399,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
    features: {
      seats: "2",
      luggage: "1",
      fuel: "Petrol",
    },
    rating: 5.0,
    reviews: 42,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    id: 9,
    name: "Mercedes Benz S-class",
    category: "SUV",
    price: 149,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
    features: {
      seats: "7",
      luggage: "4",
      fuel: "Hybrid",
    },
    rating: 4.7,
    reviews: 168,
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: 10,
    name: "Mercedes Benz S-class",
    category: "Luxury",
    price: 179,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Hybrid",
    },
    rating: 4.8,
    reviews: 134,
    color: "bg-gray-50",
    iconColor: "text-gray-500",
  },
  {
    id: 11,
    name: "Mercedes Benz S-class",
    category: "Sedan",
    price: 59,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Petrol",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

const CarDetailPage = () => {
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

  useEffect(() => {
    const car = cars.find((car) => car.id === Number.parseInt(id));
    setSelectedCar(car);

    // Set the total number of slides based on the images array if available
    if (car && car.images && car.images.length > 0) {
      setTotalSlides(car.images.length);
    } else {
      setTotalSlides(3); // Fallback to 3 for backward compatibility
    }
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
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    // Get categories as comma-separated string
    const carCategories = selectedCar.categories
      ? selectedCar.categories.join(", ")
      : selectedCar.category;

    // Create WhatsApp message
    const message = `Hello! I want to book the ${selectedCar.name} ($${
      selectedCar.price
    }/day).
    
📅 Rental Period:
- Pick-up: ${formatDate(rentalDetails.pickUpDate)}
- Drop-off: ${formatDate(rentalDetails.dropOffDate)}

📍 Pickup Location: ${rentalDetails.location}

Car Details:
🚗 ${carCategories}
💺 ${selectedCar.features.seats} seats
⛽ ${selectedCar.features.fuel}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (include country code without + sign)
    const whatsappNumber = "355688172927";

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
    },
    [totalSlides]
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

  return selectedCar ? (
    <div className="container mx-auto p-6 mt-20">
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Car Image Gallery */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            {/* Gallery Container */}
            <div
              className="relative overflow-hidden rounded-lg"
              style={{ height: "400px" }}
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
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={`${selectedCar.name} - ${image.label}`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                        {image.label}
                      </span>
                    </div>
                  ))
                ) : (
                  // Fallback for backward compatibility
                  <>
                    {/* Front View */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <img
                        src={selectedCar.image || "/placeholder.svg"}
                        alt={`${selectedCar.name} main view`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                        Front View
                      </span>
                    </div>

                    {/* Rear View */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <img
                        src={selectedCar.imageBehind || "/placeholder.svg"}
                        alt={`${selectedCar.name} rear view`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                        Rear View
                      </span>
                    </div>

                    {/* Interior */}
                    <div className="relative flex-shrink-0 w-full h-full">
                      <img
                        src={selectedCar.imageInside || "/placeholder.svg"}
                        alt={`${selectedCar.name} interior`}
                        className="w-full h-full object-cover rounded-lg"
                        draggable="false"
                      />
                      <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                        Interior
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Arrows */}
              {activeIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {activeIndex < totalSlides - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {selectedCar.images && selectedCar.images.length > 0
                ? selectedCar.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIndex === index ? "bg-black w-4" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))
                : // Fallback for backward compatibility
                  [0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIndex === index ? "bg-black w-4" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
            </div>
          </div>
        </div>

        {/* Car Details */}
        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {selectedCar.name}
          </h2>

          {/* Display multiple categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCar.categories ? (
              // Display multiple categories as tags if available
              selectedCar.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))
            ) : (
              // Fallback to single category
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {selectedCar.category}
              </span>
            )}
            <span className="ml-auto text-xl font-semibold">
              ${selectedCar.price}/day
            </span>
          </div>

          {/* Car Rating */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-semibold text-gray-500">
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
                    className="h-5 w-5"
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
            <span className="text-sm text-gray-500">
              ({selectedCar.reviews} reviews)
            </span>
          </div>

          {/* Car Features */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="text-xl text-gray-600">💺</div>
              <span>{selectedCar.features.seats} seats</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-xl text-gray-600">
                {selectedCar.features.fuel === "Electric"
                  ? "⚡"
                  : selectedCar.features.fuel === "Hybrid"
                  ? "🌱"
                  : "⛽"}
              </div>
              <span>{selectedCar.features.fuel} fuel</span>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="pickUpDate" className="text-sm text-gray-600">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  name="pickUpDate"
                  value={rentalDetails.pickUpDate}
                  onChange={handleChange}
                  className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dropOffDate" className="text-sm text-gray-600">
                  Drop-off Date
                </label>
                <input
                  type="date"
                  name="dropOffDate"
                  value={rentalDetails.dropOffDate}
                  onChange={handleChange}
                  className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  min={
                    rentalDetails.pickUpDate ||
                    new Date().toISOString().split("T")[0]
                  }
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="location" className="text-sm text-gray-600">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={rentalDetails.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out duration-500"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mx-auto p-4">Loading...</div>
  );
};

export default CarDetailPage;
