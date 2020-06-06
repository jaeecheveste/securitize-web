import React from "react";
import "./QuotesFavorites.scss";
import TableComponent from "./shared/TableComponent";
const QuotesFavorites = ({ favorites }: any) => {
  //Start: Read from CMS
  const columns = [
    {
      key: "name",
      title: "Name"
    }
  ];
  const onClickAction = () => {
    //Not implemented
  };
  return (
    <div className="box">
      <div className="box__header">
        <h2>Favorites assets</h2>
      </div>
      <TableComponent
        list={favorites}
        onClickAction={onClickAction}
        columns={columns}
      />
    </div>
  );
};

export default QuotesFavorites;
