"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, UserPlus, LogOut, ChevronDown } from "lucide-react";
import useAuthStore from "../../store/store.js";
import Flag from "./Flag.jsx";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";

const Navbar = () => {
  const { user, setUser, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);

  // Supported languages with flag and name properties
  const languages = [
    { code: "en", countryCode: "us", name: "English", flag: "🇺🇸" },
    { code: "de", countryCode: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", countryCode: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "es", countryCode: "es", name: "Español", flag: "🇪🇸" },
    { code: "sq", countryCode: "al", name: "Shqip", flag: "🇦🇱" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      // Only close if clicking outside the dropdown
      const isClickingOutsideDesktopDropdown =
        languageDropdownOpen && !event.target.closest(".language-dropdown");

      const isClickingOutsideMobileDropdown =
        mobileLangDropdownOpen &&
        !event.target.closest(".mobile-language-dropdown");

      if (isClickingOutsideDesktopDropdown) {
        setLanguageDropdownOpen(false);
      }

      if (isClickingOutsideMobileDropdown) {
        setMobileLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    setIsOpen(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setUser, logout, location, languageDropdownOpen, mobileLangDropdownOpen]);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
    setMobileLangDropdownOpen(false);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsOpen(false);
    setAccountDropdownOpen(false);
    navigate("/");
  };

  const isLinkActive = (path) => {
    const currentPath = location.pathname + location.search;

    if (path.includes("?")) {
      return currentPath === path;
    }
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", translationKey: "Home" },
    {
      path: "/models",
      translationKey: "Models",
      submenu: [
        { path: "/models?category=SUV", translationKey: "suv" },
        { path: "/models?category=Sedan", translationKey: "sedan" },
        { path: "/models?category=Luxury", translationKey: "luxury" },
        { path: "/models?category=Sports", translationKey: "sports" },
        { path: "/models?category=Economy", translationKey: "economy" },
      ],
    },
    { path: "/testimonials", translationKey: "Testimonials" },
    { path: "/contact", translationKey: "Contact" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 h-16 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="flex items-center h-full p-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="/Logo Auto Rental Tirana Black.png"
              alt="Auto Rental Tirana Logo"
              className="responsive-logo"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.translationKey}
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => setModelsDropdownOpen(true)}
                  onMouseLeave={() => setModelsDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center gap-1 h-full text-sm font-medium ${
                      isLinkActive(item.path) ? "text-black" : "text-black"
                    }`}
                  >
                    {t(item.translationKey)}
                  </Link>
                  <ChevronDown className="w-4 h-4 ml-1" />

                  <AnimatePresence>
                    {modelsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors ${
                              isLinkActive(subItem.path) ? "bg-gray-100" : ""
                            }`}
                            onClick={() => setModelsDropdownOpen(false)}
                          >
                            {t(subItem.translationKey)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative h-full flex items-center text-sm font-medium ${
                    isLinkActive(item.path) ? "text-black" : "text-black"
                  } transition-colors`}
                >
                  {t(item.translationKey)}
                  {isLinkActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 top-12 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                    />
                  )}
                </Link>
              )
            )}

            <div className="flex items-center gap-4 ml-4">
              {/* Desktop Language Dropdown */}
              <div className="relative language-dropdown">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="language-dropdown-btn"
                >
                  <div className="language-flag-text">
                    <Flag
                      country={currentLanguage.countryCode}
                      width={20}
                      height={15}
                    />
                    <span className="text-sm font-medium">
                      {currentLanguage.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      languageDropdownOpen ? "rotate-chevron" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {languageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="language-dropdown-content"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="language-dropdown-item"
                        >
                          <div className="language-flag-text">
                            <Flag
                              country={lang.countryCode}
                              width={20}
                              height={15}
                            />
                            <span>{lang.name}</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span>{user.displayName || user.email}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        accountDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {accountDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>{t("logout")}</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                </>
              )}
            </div>
          </div>

          {/* Mobile Language Dropdown and Menu Button */}
          <div className="lg:hidden flex items-center">
            <div className="relative mobile-language-dropdown mr-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  setMobileLangDropdownOpen(!mobileLangDropdownOpen);
                }}
                className="language-dropdown-btn py-2 px-3 min-w-0"
              >
                <div className="language-flag-text">
                  <Flag
                    country={currentLanguage.countryCode}
                    width={20}
                    height={15}
                  />
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileLangDropdownOpen ? "rotate-chevron" : ""
                    }`}
                  />
                </div>
              </motion.button>

              {mobileLangDropdownOpen && (
                <div className="language-dropdown-content open">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        handleLanguageChange(lang.code);
                      }}
                      className="language-dropdown-item"
                    >
                      <div className="language-flag-text">
                        <Flag
                          country={lang.countryCode}
                          width={20}
                          height={15}
                        />
                        <span className="text-sm">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 w-full bg-white shadow-lg border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) =>
                  item.submenu ? (
                    <div
                      key={item.translationKey}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between px-4 py-3">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-900 font-medium"
                        >
                          {t(item.translationKey)}
                        </Link>
                        <button
                          onClick={() => setMobileModelsOpen(!mobileModelsOpen)}
                          className="p-1"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              mobileModelsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {mobileModelsOpen && (
                        <div className="flex flex-col gap-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileModelsOpen(false);
                              }}
                              className={`px-6 py-2 rounded-lg ${
                                isLinkActive(subItem.path)
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50"
                              } transition-colors`}
                            >
                              {t(subItem.translationKey)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg ${
                        isLinkActive(item.path)
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50"
                      } transition-colors`}
                    >
                      {t(item.translationKey)}
                    </Link>
                  )
                )}

                <div className="flex flex-col gap-2 pt-4 border-t mt-2">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t("logout")}</span>
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>{t("login")}</span>
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>{t("signUp")}</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
