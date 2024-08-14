import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Delivery from "./pages/Delivery/Delivery";
import Katalog from "./pages/Katalog/Katalog";
import Pay from "./pages/Pay/Pay";
import Contact from "./pages/Contact/Contact";
import Card from "./pages/Card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollTop from "./ScrollTop.jsx";
import { useTranslation } from "react-i18next";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [i18n] = useTranslation("global");

  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("");

  useEffect(() => {
    fetch("https://onemed.uz/api/products?category__parent", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  }, []);
  const buttons = Array.from(
    new Set(data.map((item) => item.category[`name_uz`]))
  );
  console.log(data);





  const [firstFilter, setFirstFilter] = useState(1);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setFirstFilter={setFirstFilter} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route
            path="/catalog"
            element={
              <Katalog
                firstFilter={firstFilter}
                buttons={buttons}
                data={data}
                setfilterCategory={setfilterCategory}
                filterCategory={filterCategory}
              />
            }
          />
          <Route path="/pay" element={<Pay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog/:id" element={<Card data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
