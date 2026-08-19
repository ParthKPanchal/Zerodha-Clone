import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";
import Signup from "./pages/signup/SignupPage";
import Pricing from "./pages/pricing/PricingPage";
import About from "./pages/about/AboutPage";
import Product from "./pages/product/ProductPage";
import Support from "./pages/support/SupportPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/login/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
