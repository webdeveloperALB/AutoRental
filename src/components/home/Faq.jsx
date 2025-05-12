import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  Plus,
  Minus,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  ClipboardCheck,
} from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = t('faq.categories', { returnObjects: true });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{t('faq.helpBadge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Main content container - flex on desktop, column on mobile */}
        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* FAQ Questions Section */}
          <div className="lg:w-1/2">
            <div className="grid md:grid-cols-1 gap-8 w-full">
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
                    <ClipboardCheck className={`w-6 h-6 ${category.color}`} />
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
                              <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 max-w-full">
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
          </div>

          {/* Contact Support Section - Side by side on desktop */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-10"></div>
              <div className="relative bg-white border border-orange-100 rounded-2xl p-8 h-full flex flex-col justify-center">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t('faq.contactSupport.title')}
                  </h3>
                  <p className="text-black mb-8">
                    {t('faq.contactSupport.description')}
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
                      <span>{t('faq.contactSupport.emailButton')}</span>
                    </motion.a>

                    {/* Phone Dropdown */}
                    <div className="relative group">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>{t('faq.contactSupport.contactButton')}</span>
                      </motion.button>

                      {/* Dropdown Options */}
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a
                          href="tel:+355698357378"
                          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-green-500" />
                          <span>{t('faq.contactSupport.callOption')}</span>
                        </a>
                        <a
                          href="https://wa.me/355698357378"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition-colors"
                        >
                          <MessageCircle className="w-5 h-5 text-green-500" />
                          <span>{t('faq.contactSupport.whatsappOption')}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;