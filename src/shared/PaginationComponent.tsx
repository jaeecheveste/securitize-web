import React from "react";
import "./PaginationComponent.scss";
interface PaginationSchema {
  activePage: number;
  items: Array<any>;
  onClickPaginate: (i: any) => any;
}
const PaginationComponent = ({
  activePage,
  items,
  onClickPaginate
}: PaginationSchema) => {
  const getItemClasses = (item: any) => {
    return item === activePage
      ? "pagination-box__item--active"
      : "pagination-box__item--inactive";
  };

  return (
    <div className="pagination-box">
      <ul className="pagination-box__list">
        <li className={`pagination-box__item ${getItemClasses(1)}`} key="first">
          <span onClick={() => onClickPaginate(1)}>First</span>
        </li>
        {items.map((item, i) => (
          <li
            className={`pagination-box__item ${getItemClasses(item)}`}
            key={i}
          >
            <span onClick={() => onClickPaginate(item)}>{item}</span>
          </li>
        ))}
        <li
          className={`pagination-box__item ${getItemClasses(items.length)}`}
          key="last"
        >
          <span onClick={() => onClickPaginate(items.length)}>Last</span>
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
