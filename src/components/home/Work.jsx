import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  MapPin,
  Calendar,
  MessageCircle,
  CheckCircle,
  CircleHelp,
} from "lucide-react";

const Work = () => {
  const navigate = useNavigate();
  const [setSelectedFilter] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      icon: Car,
      title: "Select Your Car",
      description:
        "Choose from our wide range of premium vehicles for any occasion",
      bgcolor: "bg-blue-50",
      iconcolor: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "Pick-up Location",
      description:
        "Select from our numerous convenient pick-up and drop-off locations",
      bgcolor: "bg-green-50",
      iconcolor: "text-green-500",
    },
    {
      icon: Calendar,
      title: "Pick-up Date",
      description: "Choose your rental duration and preferred pick-up timing",
      bgcolor: "bg-purple-50",
      iconcolor: "text-purple-500",
    },
    {
      icon: MessageCircle,
      title: "Contact Us",
      description:
        "Send your booking details at us for confirmation and assistance",
      bgcolor: "bg-orange-50",
      iconcolor: "text-orange-500",
    },
  ];

  const carTypes = [
    {
      name: "SUV",
      image: "/suv.png",
    },
    {
      name: "Sedan",
      image: "/sedan.png",
    },
    {
      name: "Luxury",
      image: "/luxury.png",
    },
    {
      name: "Sports",
      image: "/sports.png",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="container mx-auto px-4">
        {/* New Filters Section */}
        <div className="mb-40 mt-20 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-center mb-8">
            Explore Our Fleet
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-20 px-2 sm:px-4 mx-auto max-w-screen-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {carTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative cursor-pointer group w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
                onClick={() => setSelectedFilter(type.name)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-28 sm:h-32 overflow-hidden rounded-lg">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-80 h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <span className="absolute left-4 text-black font-bold text-lg drop-shadow-md">
                  {type.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-4">
            <CircleHelp className="w-5 h-5 text-white" />
            <span className="text-white font-medium">How It Works?</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 mt-2">
            Rent Your Dream Car in 4 Easy Steps
          </h2>
          <p className="text-black text-lg leading-relaxed">
            We have streamlined our rental process to get you on the road
            quickly and safely. Follow these simple steps to begin your journey
            with us.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative group">
              <div
                className={`${step.bgcolor} rounded-xl p-8 h-full transition-all duration-300 
                           group-hover:shadow-xl group-hover:-translate-y-2`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 ${step.bgcolor} rounded-full flex items-center 
                               justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-8 h-8 ${step.iconcolor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full 
                              flex items-center justify-center text-white font-bold"
                  >
                    {index + 1}
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 left-full w-8 border-t-2 
                               border-dashed border-orange-300 -translate-y-1/2 z-10"
                  ></div>
                )}
              </div>

              {/* Completion Check */}
              <div className="absolute bottom-4 right-4">
                <CheckCircle
                  className="w-6 h-6 text-gray-300 group-hover:text-green-500 
                                   transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-black mb-6">
            Ready to get started? Book your dream car now!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/models")}
            className="px-8 py-4 bg-black text-white rounded-lg shadow-lg 
                     shadow-black hover:bg-black transition-all"
          >
            Book a Car Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;