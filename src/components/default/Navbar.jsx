import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, UserPlus, LogOut, ChevronDown } from "lucide-react";
import { auth } from "./Auth/Firebase.js";
import { signOut } from "firebase/auth";
import useAuthStore from "../../store/store.js";
import "./Navbar.css";

const Navbar = () => {
  const { user, setUser, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        logout();
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    setIsOpen(false);

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setUser, logout, location]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsOpen(false);
      setAccountDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isLinkActive = (path) => {
    const [basePath, query] = path.split("?");
    const currentPath = location.pathname + location.search;
    
    if (query) {
      return currentPath === path;
    }
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/models",
      label: "Models",
      submenu: [
        { path: "/models?category=SUV", label: "SUV" },
        { path: "/models?category=Sedan", label: "Sedan" },
        { path: "/models?category=Luxury", label: "Luxury" },
        { path: "/models?category=Sports", label: "Sports" },
        { path: "/models?category=Economy", label: "Economy" },
      ]
    },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 h-16 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
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
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              item.submenu ? (
                <div
                  key={item.label}
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
                    {item.label}
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
                            {subItem.label}
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
                  {item.label}
                  {isLinkActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 top-12 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                    />
                  )}
                </Link>
              )
            ))}

            <div className="flex items-center gap-4 ml-4">
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span>Account</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${accountDropdownOpen ? "rotate-180" : ""}`}
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
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
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
                {navItems.map((item) => (
                  item.submenu ? (
                    <div key={item.label} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between px-4 py-3">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-900 font-medium"
                        >
                          {item.label}
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
                              {subItem.label}
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
                      {item.label}
                    </Link>
                  )
                ))}

                <div className="flex flex-col gap-2 pt-4 border-t mt-2">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Login</span>
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Sign Up</span>
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