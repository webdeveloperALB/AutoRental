import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Errorpage from "./Pages/Errorpage";
import { MainLayout } from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes>
          {/* Main routes with Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
