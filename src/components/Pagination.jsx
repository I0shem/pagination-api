import React from "react";
import s from "./Pages.module.css";

const Pagination = ({
  currentPage,
  countElem,
  totalCount,
  point,
  pointBack,
  pointForward,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCount / countElem); i++) {
    pages.push(i);
  }
  return (
    <div className={s.paginationBox}>
      <ul className={s.paginationList}>
        <a className={s.Arrow} onClick={() => pointBack(currentPage)}>
          {" "}
          ←{" "}
        </a>
        {pages.map((number) => {
          return (
            <li className={s.paginationListItem} key={number}>
              {number === currentPage ? (
                <a
                  className={s.highlight}
                  href="#"
                  onClick={() => point(number)}
                >
                  {number}
                </a>
              ) : (
                <a href="#" onClick={() => point(number)}>
                  {number}
                </a>
              )}
            </li>
          );
        })}
        <a className={s.Arrow} onClick={() => pointForward(currentPage)}>
          {" "}
          →{" "}
        </a>
      </ul>
    </div>
  );
};

export default Pagination;
