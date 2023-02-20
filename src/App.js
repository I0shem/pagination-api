import React, { useState, useEffect } from "react";
import s from "./app.module.css";
import axios from "axios";
import Pages from "./components/Pages";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countElem, setCountElem] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setImages(response.data);
        console.log(images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [images]);

  const lastImageIndex = currentPage * countElem;
  const firstImageIndex = lastImageIndex - countElem;

  const currentImages = images.slice(firstImageIndex, lastImageIndex);

  return (
    <div className={s.App}>
      <div className={s.Images}>
        <Pages images={images} />
      </div>
    </div>
  );
}

export default App;
