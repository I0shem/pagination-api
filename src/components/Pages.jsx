import React from "react";
import s from "./Pages.module.css";

const Pages = ({ images }) => {
  return (
    <ul className={s.Pages}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.Page}>
            <span>
              {image.id}: {image.title}
            </span>
            <img src={image.url} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;
