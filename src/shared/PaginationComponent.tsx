import React from "react";

interface PaginationSchema {
  activePage: number;
  items: Array<any>;
  onClickPaginate: (i: string) => any;
}
const PaginationComponent = ({
  activePage,
  items,
  onClickPaginate
}: PaginationSchema) => {
  return (
    <div className="pagination-box">
      <ul>
        {items.map((i, index) => (
          <li key={index}>
            <button onClick={() => onClickPaginate(i)}>{i}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginationComponent;
