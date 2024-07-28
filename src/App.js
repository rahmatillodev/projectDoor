import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Delivery from "./pages/Delivery/Delivery";
import Katalog from "./pages/Katalog/Katalog";
import Pay from "./pages/Pay/Pay";
import Contact from "./pages/Contact/Contact";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
