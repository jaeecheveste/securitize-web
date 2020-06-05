import React, { useState } from "react";
import QuotesList from "./QuotesList";
import QuotesFavorites from "./QuotesFavorites";

const QuotesContainer = () => {
  const defaultTab = "ASSETS";
  const [favorites, setFavorites] = useState([{ name: "Bitcoin" }]);
  const [activeTab, setActiveTab] = useState("ASSETS");

  const onAddFavorites = (i: any) => {
    console.log("Favories", i);
  };
  return (
    <>
      <div className="active-tab">
        <h2>Assets</h2>
        <h2>Favorites</h2>
      </div>
      <div className="assets-tab">
        <QuotesList onAddFavorites={onAddFavorites} />
        <QuotesFavorites favorites={favorites} />
      </div>
    </>
  );
};

export default QuotesContainer;
