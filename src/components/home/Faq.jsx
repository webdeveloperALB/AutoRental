import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  ClipboardCheck,
  Calendar,
  IdCard,
  CreditCard,
  Shield
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      title: "Reservation & Rental Requirements",
      icon: ClipboardCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      questions: [
        {
          question: "How do I make a car reservation?",
          answer: "Select a vehicle, choose pickup and return dates, and confirm your booking."
        },
        {
          question: "Can I modify my reservation?",
          answer: "Modifications and cancellations are allowed within specific timeframes."
        },
        {
          question: "What documents do I need to rent a car?",
          answer: "A valid driver's license and proof of identity are required. Additional documentation may apply."
        },
        {
          question: "What are the age requirements?",
          answer: "Minimum age and driving experience requirements apply based on vehicle type."
        }
      ],
      subCategories: [
        { title: "Booking Process", icon: Calendar },
        { title: "Driver Requirements", icon: IdCard }
      ]
    },
    {
      title: "Financial Policies & Protection",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
      questions: [
        {
          question: "What payment methods are accepted?",
          answer: "Various payment methods are accepted, and security deposits may be required."
        },
        {
          question: "What insurance options are available?",
          answer: "Insurance options vary, offering different levels of protection."
        },
        {
          question: "What is your fuel policy?",
          answer: "Vehicles must be returned with a full tank, or a prepaid fuel option is available."
        },
        {
          question: "What happens if I return late?",
          answer: "Late returns may result in additional charges, with penalties for excessive delays."
        }
      ],
      subCategories: [
        { title: "Payments", icon: CreditCard },
        { title: "Safety Policies", icon: Lock }
      ]
    }
  ];


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Need Help?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Find quick answers to common questions about our car rental services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div
                className={`flex items-center gap-3 p-4 ${category.bgColor} rounded-lg`}
              >
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {category.questions.map((item, itemIndex) => {
                const index = `${categoryIndex}-${itemIndex}`;
                return (
                  <div
                    key={itemIndex}
                    className="border border-gray-200 hover:border-black rounded-lg bg-white transition-colors"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {item.question}
                      </span>
                      <div
                        className={`p-2 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-100"
                          } transition-colors`}
                      >
                        {activeIndex === index ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
                            <p className="text-black leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-10"></div>
          <div className="relative bg-white border border-orange-100 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Still have questions?
              </h3>
              <p className="text-black mb-8">
                Cant find what you are looking for? Our customer support team is
                here to help you 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {/* Email Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:support@yourcompany.com"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Support</span>
                </motion.a>

                {/* Phone Dropdown */}
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-3 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Support</span>
                  </motion.button>

                  {/* Dropdown Options */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                      href="tel:+355698357378"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-green-500" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href="https://wa.me/355698357378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
