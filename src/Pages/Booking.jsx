import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cars = [
  {
    id: 1,
    name: "Mercedes Benz S-class",
    category: "Sedan",
    price: 89,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
  {
    id: 12,
    name: "Mercedes Benz S-class",
    category: "Sports",
    price: 449,
    image: "/Sclass.jpg",
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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
    imageBehind: "/Sclass2.jpg",
    imageInside: "/Sclass3.jpg",
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


const CarDetailPage = () => {
  const { id } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const car = cars.find(car => car.id === parseInt(id));
    setSelectedCar(car);
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
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Create WhatsApp message
    const message = `Hello! I want to book the ${selectedCar.name} ($${selectedCar.price}/day).
    
📅 Rental Period:
- Pick-up: ${formatDate(rentalDetails.pickUpDate)}
- Drop-off: ${formatDate(rentalDetails.dropOffDate)}

📍 Pickup Location: ${rentalDetails.location}

Car Details:
🚗 ${selectedCar.category}
💺 ${selectedCar.features.seats} seats
🧳 ${selectedCar.features.luggage} luggage
⛽ ${selectedCar.features.fuel}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (include country code without + sign)
    const whatsappNumber = '355688172927';

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    selectedCar ? (
      <div className="container mx-auto p-6 mt-20">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Car Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row gap-4 h-full">
              {/* Main Image */}
              <div className="w-full md:w-2/3 h-64 md:h-auto relative group">
                <img
                  src={selectedCar.image}
                  alt={`${selectedCar.name} main view`}
                  className="w-full h-full object-cover rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                />
                <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                  Front View
                </span>
              </div>

              {/* Thumbnails Column */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="relative group h-32 md:h-1/2">
                  <img
                    src={selectedCar.imageBehind}
                    alt={`${selectedCar.name} rear view`}
                    className="w-full h-full object-cover rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                  />
                  <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                    Rear View
                  </span>
                </div>

                <div className="relative group h-32 md:h-1/2">
                  <img
                    src={selectedCar.imageInside}
                    alt={`${selectedCar.name} interior`}
                    className="w-full h-full object-cover rounded-lg border hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                  />
                  <span className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded text-sm">
                    Interior
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCar.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{selectedCar.category} - ${selectedCar.price}/day</p>

            {/* Car Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-semibold text-gray-500">{selectedCar.rating}</span>
                <div className="flex text-sm text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < Math.floor(selectedCar.rating) ? "currentColor" : "none"}
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
              <span className="text-sm text-gray-500">({selectedCar.reviews} reviews)</span>
            </div>

            {/* Car Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">💺</div>
                <span>{selectedCar.features.seats} seats</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">🧳</div>
                <span>{selectedCar.features.luggage} luggage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">
                  {selectedCar.features.fuel === 'Electric' ? '⚡' :
                    selectedCar.features.fuel === 'Hybrid' ? '🌱' : '⛽'}
                </div>
                <span>{selectedCar.features.fuel} fuel</span>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="pickUpDate" className="text-sm text-gray-600">Pick-up Date</label>
                  <input
                    type="date"
                    name="pickUpDate"
                    value={rentalDetails.pickUpDate}
                    onChange={handleChange}
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dropOffDate" className="text-sm text-gray-600">Drop-off Date</label>
                  <input
                    type="date"
                    name="dropOffDate"
                    value={rentalDetails.dropOffDate}
                    onChange={handleChange}
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    min={rentalDetails.pickUpDate || new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="location" className="text-sm text-gray-600">Pickup Location</label>
                  <input
                    type="text"
                    name="location"
                    value={rentalDetails.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition ease-in-out duration-200"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    ) : (
      <div className="container mx-auto p-4">Loading...</div>
    )
  );
};

export default CarDetailPage;