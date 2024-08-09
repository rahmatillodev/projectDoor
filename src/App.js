import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Delivery from "./pages/Delivery/Delivery";
import Katalog from "./pages/Katalog/Katalog";
import Pay from "./pages/Pay/Pay";
import Contact from "./pages/Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  
  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [filterCategory]);
  const buttons = Array.from(
    new Set(data.map((category) => category.category))
  );


  const [firstFilter, setFirstFilter] = useState(1)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setFirstFilter={setFirstFilter} />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/catalog" element={<Katalog firstFilter={firstFilter} buttons={buttons} data={data} setfilterCategory={setfilterCategory} filterCategory={filterCategory} />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

