import React from "react";
import s from "./Pages.module.css";

const Pagination = (CountElem, totalCount) => {
  const pageNumber = [];
  for (let i = 1; i <= totalCount / CountElem; i++) {}
  return <div className={s.Pagination}>Pagination</div>;
};

export default Pagination;
