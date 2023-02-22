import React, { useState, useEffect } from "react";
import s from "./app.module.css";
import axios from "axios";
import Pages from "./components/Pages";
import Pagination from "./components/Pagination";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countElem] = useState(100);
  const [btnText, setBtnText] = useState("Click me to scroll down");

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
  }, []);

  const lastImageIndex = currentPage * countElem;
  const firstImageIndex = lastImageIndex - countElem;

  const currentImages = images.slice(firstImageIndex, lastImageIndex);
  const paginationPoint = (pageNumber) => {
    handleButtonClick();
    setCurrentPage(pageNumber);
  };

  const paginationPointBack = (pageNumber) => {
    if (pageNumber >= 2) {
      handleButtonClick();
      setCurrentPage(pageNumber - 1);
    } else {
    }
  };

  const paginationPointForward = (pageNumber) => {
    if (pageNumber < Math.ceil(images.length / countElem)) {
      handleButtonClick();
      setCurrentPage(pageNumber + 1);
    } else {
    }
  };
  const [isScrollingTop, setIsScrollingTop] = useState(false);
  const handleButtonClick = () => {
    if (isScrollingTop) {
      setBtnText("Click me to scroll down");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setBtnText("Click me to scroll up");
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    setIsScrollingTop(!isScrollingTop);
  };
  return (
    <div className={s.App}>
      <button className={s.scrollDownBtn} onClick={handleButtonClick}>
        {btnText}
      </button>
      <div className={s.Images}>
        <Pages images={currentImages} />
        <Pagination
          currentPage={currentPage}
          countElem={countElem}
          totalCount={images.length}
          point={paginationPoint}
          pointBack={paginationPointBack}
          pointForward={paginationPointForward}
        />
      </div>
    </div>
  );
}

export default App;
