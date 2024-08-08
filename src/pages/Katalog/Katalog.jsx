import { useEffect, useState } from "react";

const Katalog = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div>

    </div>
  )
}

export default Katalog