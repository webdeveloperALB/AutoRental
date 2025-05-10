"use client";

import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
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
  ChevronRight
} from "lucide-react";
import { Icon } from "@iconify/react";

const carModels = [
  {
    id: 1,
    name: "Mercedes Benz S-Class W222",
    categories: ["Sedan", "Luxury", "Sports"],
    price: 250,
    // Add array of images for carousel
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
      "/cars/bmw seria 6/image2.jpg",
      "/cars/bmw seria 6/image3.jpg",
      "/cars/bmw seria 6/image4.jpg",
      "/cars/bmw seria 6/image5.jpg",
      "/cars/bmw seria 6/image6.jpg",
      "/cars/bmw seria 6/image7.jpg",
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
      "/cars/passat cc/image2.jpg",
      "/cars/passat cc/image3.jpg",
      "/cars/passat cc/image4.jpg",
      "/cars/passat cc/image5.jpg",
      "/cars/passat cc/image6.jpg",
      "/cars/passat cc/image7.jpg",
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
    image: "/cars/audi a7 white/7V3A8612.jpg",
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
    image: "/cars/c-class 1.8/7V3A9658.jpg",
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
    image: "/cars/bmw x6/7V3A8659.jpg",
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
    image: "/cars/golf 7/7V3A9591.jpg",
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
    image: "/cars/audi a7 gri/7V3A9798.jpg",
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
    image: "/cars/e-class 3.0/7V3A8709.jpg",
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
    image: "cars/e class 2.2/7V3A9763.jpg",
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
    image: "cars/bmw seria 4/7V3A9724.jpg",
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
    image: "cars/c class w204 wagon/3.jpg",
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
    name: "Hyundai Santa Fe",
    categories: ["SUV"],
    price: 50,
    image: "/cars/hyundai santa fe/3.jpg",
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
    image: "/cars/touran/3.jpg",
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
    image: "/cars/hyundai accent/3.jpg",
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

// Create a new ImageCarousel component
const ImageCarousel = ({ images, carId, navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the booking page when the image is clicked
  const handleImageClick = () => {
    navigate(`/booking/${carId}`);
  };

  // Go to the previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to the next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="aspect-[4/3] rounded-lg bg-white mb-6 overflow-hidden relative cursor-pointer"
      onClick={handleImageClick}
    >
      {/* Image */}
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt="Car image"
        className="w-full h-full object-cover transition-all duration-300"
      />

      {/* Image counter */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-white bg-opacity-50"
              }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Models = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("categories");
  const searchParam = searchParams.get("search");
  const fuelParam = searchParams.get("fuel");
  const transmissionParam = searchParams.get("transmission");
  const engineSizeParam = searchParams.get("engineSize");

  // Initialize state from URL params
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? categoryParam.split(",") : []
  );
  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [selectedFuel, setSelectedFuel] = useState(fuelParam || "");
  const [selectedTransmission, setSelectedTransmission] = useState(transmissionParam || "");
  const [selectedEngineSize, setSelectedEngineSize] = useState(engineSizeParam || "");

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0)
      params.set("categories", selectedCategories.join(","));
    if (searchQuery.trim())
      params.set("search", searchQuery.trim());
    if (selectedFuel)
      params.set("fuel", selectedFuel);
    if (selectedTransmission)
      params.set("transmission", selectedTransmission);
    if (selectedEngineSize)
      params.set("engineSize", selectedEngineSize);

    setSearchParams(params);
  }, [selectedCategories, searchQuery, selectedFuel, selectedTransmission, selectedEngineSize, setSearchParams]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const categories = [
    { name: "All", icon: Car },
    { name: "SUV", icon: Car },
    { name: "Sedan", icon: Car },
    { name: "Luxury", icon: Car },
    { name: "Sports", icon: Car },
    { name: "Economy", icon: Car },
  ];

  // Extract unique values for filters from car data
  const fuelTypes = [...new Set(carModels.map(car => car.features.fuel))];
  const transmissionTypes = [...new Set(carModels.map(car => car.features.transmission))];
  const engineSizes = [...new Set(carModels.map(car => car.features.engineSize.toString().split(" ")[0]))];

  // Toggle category selection
  const toggleCategory = (category) => {
    if (category === "All") {
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
    const matchesCategories = selectedCategories.length === 0 ||
      selectedCategories.some(selected => (car.categories || [car.category]).includes(selected));

    // Match fuel type
    const matchesFuel = !selectedFuel || car.features.fuel === selectedFuel;

    // Match transmission
    const matchesTransmission = !selectedTransmission || car.features.transmission === selectedTransmission;

    // Match engine size - this is a bit trickier since engine sizes might be stored differently
    const matchesEngineSize = !selectedEngineSize ||
      car.features.engineSize.toString().includes(selectedEngineSize);

    // Match search query
    const matchesSearch = !searchQuery || car.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategories && matchesFuel && matchesTransmission && matchesEngineSize && matchesSearch;
  };

  const filteredCars = carModels.filter(matchesFilters);

  // Count active filters (excluding search)
  const activeFilterCount = [
    selectedCategories.length > 0,
    !!selectedFuel,
    !!selectedTransmission,
    !!selectedEngineSize
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
              <span className="text-white font-medium">Our Fleet</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Choose Your Perfect{" "}
              <span className="text-red-600 whitespace-nowrap">Ride</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Experience premium service with unlimited miles and flexible
              pick-up options at unbeatable prices. Select from our wide range
              of well-maintained vehicles.
            </p>
            <p className="text-sm font-medium text-red-600 bg-red-50 inline-block rounded-md py-2 px-4 shadow-sm border border-red-100">
              Minimum rental period: 2 days for all vehicles
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
                    placeholder="Search for a car..."
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
                            ${category.name === "All" &&
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
                    <Fuel className="w-4 h-4" /> Fuel Type
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {fuelTypes.map((fuel) => (
                      <button
                        key={fuel}
                        onClick={() => setSelectedFuel(selectedFuel === fuel ? "" : fuel)}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                          ${selectedFuel === fuel
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transmission Filter */}
                <div>
                  <h3 className="flex items-center gap-2 font-medium mb-3 text-gray-700">
                    <Settings className="w-4 h-4" /> Transmission
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {transmissionTypes.map((transmission) => (
                      <button
                        key={transmission}
                        onClick={() => setSelectedTransmission(selectedTransmission === transmission ? "" : transmission)}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                          ${selectedTransmission === transmission
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
                      >
                        {transmission}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engine Size Filter */}
                <div>
                  <h3 className="flex items-center gap-2 font-medium mb-3 text-gray-700">
                    <Gauge className="w-4 h-4" /> Engine Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {engineSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedEngineSize(selectedEngineSize === size ? "" : size)}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                          ${selectedEngineSize === size
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
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
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Active Filter Chips */}
            {(selectedCategories.length > 0 || selectedFuel || selectedTransmission || selectedEngineSize) && (
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
                    <span>{selectedFuel}</span>
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-gray-300"
                      onClick={() => setSelectedFuel("")}
                    />
                  </div>
                )}

                {selectedTransmission && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-sm">
                    <Settings className="w-3 h-3" />
                    <span>{selectedTransmission}</span>
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
                <p className="text-xl text-gray-600">
                  No cars found matching your search criteria.
                </p>
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
                    className={`rounded-xl p-6 ${car.color} transition-all duration-300 
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
                          <span className="text-sm text-black">/day</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap justify-between py-4 border-t border-gray-200 gap-y-3">
                        <div className="flex items-center gap-2">
                          <Fuel className="w-5 h-5 text-gray-500" />
                          <span>{car.features.fuel}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Icon
                            icon="lucide-lab:gearbox"
                            className="w-5 h-5 text-gray-500"
                          />
                          <span>{car.features.transmission}</span>
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
                            ({car.reviews} reviews)
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/booking/${car.id}`)}
                          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black
                                   transition-colors"
                        >
                          Book Now
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
              <h2 className="text-3xl font-bold text-gray-900">How to Book</h2>
            </div>
            <p className="text-gray-600">
              We have streamlined our rental process to get you on the road
              quickly and safely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Car,
                title: "Choose Your Car",
                description: "Select from our wide range of premium vehicles",
              },
              {
                icon: Calendar,
                title: "Pick Date & Location",
                description: "Choose your pickup date and preferred location",
              },
              {
                icon: MapPin,
                title: "Book & Enjoy",
                description: "Complete your booking and enjoy your journey",
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