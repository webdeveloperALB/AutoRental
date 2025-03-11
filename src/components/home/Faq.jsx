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
        // Original Booking Process
        {
          question: "How do I make a car reservation?",
          answer:
            "Making a reservation is simple:\n\n" +
            "1. Select your desired car model\n" +
            "2. Choose pickup location\n" +
            "3. Select pickup and return dates\n" +
            "4. Confirm reservation details\n" +
            "5. Submit booking request\n\n" +
            "Our team will confirm availability and finalize your reservation within 2 business hours.",
        },
        {
          question: "Can I modify my reservation?",
          answer:
            "Modifications allowed up to 48 hours before pickup:\n" +
            "• Date/time changes: Free first adjustment\n" +
            "• Vehicle upgrades: Price difference applies\n" +
            "• Location changes: Subject to availability\n" +
            "• Cancellations: 24h free cancellation policy",
        },
        // Original Rental Requirements
        {
          question: "What documents do I need to rent a car?",
          answer:
            "Required documentation:\n\n" +
            "✓ Valid driver's license (minimum 2 years validity)\n" +
            "✓ Credit card with available deposit amount\n" +
            "✓ Proof of address (utility bill or bank statement)\n" +
            "✓ International renters: Passport + IDP translation\n" +
            "✓ Corporate rentals: Company authorization letter",
        },
        {
          question: "What are the age requirements?",
          answer:
            "Age restrictions:\n\n" +
            "• Standard vehicles: 21+ years\n" +
            "• Premium vehicles: 25+ years\n" +
            "• Young driver fee (21-24): $25/day\n" +
            "• Senior drivers (70+): Medical clearance required\n" +
            "• All drivers must have 3+ years driving experience",
        },
      ],
      subCategories: [
        { title: "Booking Process", icon: Calendar },
        { title: "Driver Requirements", icon: IdCard },
      ],
    },
    {
      title: "Financial Policies & Protection",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
      questions: [
        // Original Payments & Insurance
        {
          question: "What payment methods are accepted?",
          answer:
            "Payment options:\n\n" +
            "• Visa/Mastercard/Amex (primary)\n" +
            "• Apple Pay/Google Pay\n" +
            "• Bank transfers (48h advance)\n" +
            "• Corporate accounts\n" +
            "• Debit cards ($500 security hold)\n\n" +
            "No cash payments accepted",
        },
        {
          question: "What insurance options are available?",
          answer:
            "Insurance packages:\n\n" +
            "1. Basic Cover (included):\n   - $2500 damage deductible\n   - Third party liability\n\n" +
            "2. Complete Protection (+$29/day):\n   - $0 deductible\n   - Personal accident cover\n   - Roadside assistance\n\n" +
            "3. Premium Package (+$49/day):\n   - Includes all above\n   - Tire/windshield protection\n   - Key replacement",
        },
        // Original Policies & Protection
        {
          question: "What is your fuel policy?",
          answer:
            "Fuel options:\n\n" +
            "A) Full-to-Full:\n" +
            "   - Receive car with full tank\n" +
            "   - Return full to avoid fees\n\n" +
            "B) Prepaid Fuel:\n" +
            "   - Pay for full tank upfront\n" +
            "   - Return empty (no refund)\n\n" +
            "C) Partial Refuel:\n" +
            "   - $7 service fee + local fuel rates",
        },
        {
          question: "What happens if I return late?",
          answer:
            "Late return policy:\n\n" +
            "• Grace period: 59 minutes\n" +
            "• 1-3 hours late: $35/hour\n" +
            "• 4+ hours late: Full day rate\n" +
            "• Repeated delays may incur:\n   - $150 admin fee\n   - Account suspension\n\n" +
            "Always contact us for extensions",
        },
      ],
      subCategories: [
        { title: "Payments", icon: CreditCard },
        { title: "Safety Policies", icon: Lock },
      ],
    },
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
                        className={`p-2 rounded-full ${
                          activeIndex === index ? "bg-black" : "bg-gray-100"
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
