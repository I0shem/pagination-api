import React from "react";
import s from "./Pages.module.css";

const Pagination = (CountElem, totalCount) => {
  const pageNumber = [];
  for (let i = 1; i <= totalCount / CountElem; i++) {
    pageNumber.push(i);
  }
  return (
    <div className={s.paginationBox}>
      <ul className={s.paginationList}>{}</ul>
    </div>
  );
};

export default Pagination;
