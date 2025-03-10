import { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Filter,
  Search,
  Fuel,
  Users,
  Briefcase,
  Star,
  HelpCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Models = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
  ];

  const carModels = [
    {
      id: 1,
      name: "Mercedes Benz S-class",
      category: "Sedan",
      price: 89,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "3",
        fuel: "Electric",
      },
      rating: 4.9,
      reviews: 128,
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      name: "Mercedes Benz S-class",
      category: "SUV",
      price: 129,
      image: "/Sclass.jpg",
      features: {
        seats: "7",
        luggage: "5",
        fuel: "Hybrid",
      },
      rating: 4.8,
      reviews: 96,
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      id: 3,
      name: "Mercedes Benz S-class",
      category: "Luxury",
      price: 199,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "4",
        fuel: "Petrol",
      },
      rating: 4.9,
      reviews: 156,
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      id: 4,
      name: "Mercedes Benz S-class",
      category: "Sports",
      price: 249,
      image: "/Sclass.jpg",
      features: {
        seats: "2",
        luggage: "2",
        fuel: "Petrol",
      },
      rating: 5.0,
      reviews: 84,
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      id: 5,
      name: "Mercedes Benz S-class",
      category: "SUV",
      price: 159,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "4",
        fuel: "Electric",
      },
      rating: 4.7,
      reviews: 92,
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      id: 6,
      name: "Mercedes Benz S-class",
      category: "Sedan",
      price: 69,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "3",
        fuel: "Hybrid",
      },
      rating: 4.6,
      reviews: 215,
      color: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      id: 7,
      name: "Mercedes Benz S-class",
      category: "SUV",
      price: 189,
      image: "/Sclass.jpg",
      features: {
        seats: "7",
        luggage: "5",
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
    {
      id: 12,
      name: "Mercedes Benz S-class",
      category: "Sports",
      price: 449,
      image: "/Sclass.jpg",
      features: {
        seats: "2",
        luggage: "1",
        fuel: "Petrol",
      },
      rating: 4.9,
      reviews: 36,
      color: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      id: 13,
      name: "Mercedes Benz S-class",
      category: "Luxury",
      price: 599,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "4",
        fuel: "Petrol",
      },
      rating: 5.0,
      reviews: 28,
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      id: 14,
      name: "Mercedes Benz S-class",
      category: "SUV",
      price: 199,
      image: "/Sclass.jpg",
      features: {
        seats: "7",
        luggage: "5",
        fuel: "Electric",
      },
      rating: 4.8,
      reviews: 156,
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      id: 15,
      name: "Mercedes Benz S-class",
      category: "Luxury",
      price: 449,
      image: "/Sclass.jpg",
      features: {
        seats: "4",
        luggage: "3",
        fuel: "Petrol",
      },
      rating: 4.9,
      reviews: 48,
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      id: 16,
      name: "Mercedes Benz S-class",
      category: "Sedan",
      price: 55,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "3",
        fuel: "Petrol",
      },
      rating: 4.6,
      reviews: 198,
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      id: 17,
      name: "Mercedes Benz S-class",
      category: "Sports",
      price: 499,
      image: "/Sclass.jpg",
      features: {
        seats: "2",
        luggage: "1",
        fuel: "Petrol",
      },
      rating: 5.0,
      reviews: 32,
      color: "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
    {
      id: 18,
      name: "Mercedes Benz S-class",
      category: "Sports",
      price: 399,
      image: "/Sclass.jpg",
      features: {
        seats: "4",
        luggage: "2",
        fuel: "Petrol",
      },
      rating: 4.9,
      reviews: 45,
      color: "bg-teal-50",
      iconColor: "text-teal-500",
    },
    {
      id: 19,
      name: "Mercedes Benz S-class",
      category: "SUV",
      price: 89,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "4",
        fuel: "Electric",
      },
      rating: 4.7,
      reviews: 124,
      color: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      id: 20,
      name: "Mercedes Benz S-class",
      category: "Luxury",
      price: 159,
      image: "/Sclass.jpg",
      features: {
        seats: "5",
        luggage: "4",
        fuel: "Petrol",
      },
      rating: 4.8,
      reviews: 86,
      color: "bg-gray-50",
      iconColor: "text-gray-500",
    },
  ];

  const filteredCars = carModels.filter((car) => {
    const matchesCategory =
      selectedCategory === "All" || car.category === selectedCategory;
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-8">
      {/* Hero Section */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
              <Car className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Our Fleet</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Perfect <span className="text-red-600">Ride</span>
            </h1>
            <p className="text-black text-lg leading-relaxed">
              Experience premium service with unlimited miles and flexible
              pick-up options at unbeatable prices. Select from our wide range
              of well-maintained vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for a car..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none 
                           focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <Filter className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>

              {/* Category Filter */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap
                             ${selectedCategory === category.name
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}>
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group">
                <div
                  className={`rounded-xl p-6 ${car.color} transition-all duration-300 
                             group-hover:-translate-y-2`}>
                  {/* Car Image */}
                  <div className="aspect-[4/3] rounded-lg bg-white mb-6 overflow-hidden">
                    <a href={`/booking/${car.id}`}>
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>

                  {/* Car Info */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                        <span className="text-sm text-gray-600">
                          {car.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-black">
                          €{car.price}
                        </span>
                        <span className="text-sm text-black">/day</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex justify-between py-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-500" />
                        <span>{car.features.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-500" />
                        <span>{car.features.luggage} Luggage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-5 h-5 text-gray-500" />
                        <span>{car.features.fuel}</span>
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
                                 transition-colors">
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-black" />
              <h2 className="text-3xl font-bold">How to Book</h2>
            </div>
            <p className="text-black">
              We have streamlined our rental process to get you on the road
              quickly and safely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-gray-50 rounded-lg p-6 text-center">
                <div
                  className="w-16 h-16 bg-black rounded-full flex items-center justify-center 
                             mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
