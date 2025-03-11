import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Errorpage from "./Pages/Errorpage";
import Login from "./components/default/Auth/Login";
import Register from "./components/default/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { MainLayout } from "./layout/MainLayout";
import { AuthLayout } from "./layout/AuthLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
      <ScrollToTop />
        <Routes>
          {/* Auth routes without Navbar and Footer */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Main routes with Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Errorpage />} />
            <Route
              path="/booking/:id"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
