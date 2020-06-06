import React, { useState } from "react";
import QuotesList from "./QuotesList";
import "./QuotesContainer.scss";
import QuotesFavorites from "./QuotesFavorites";

const QuotesContainer = () => {
  const [favorites, setFavorites] = useState([{ name: "Bitcoin", id: 1 }]);
  const [activeTab, setActiveTab] = useState("ASSETS");

  const onClickFavorites = (i: any) => {
    console.log("Favories", i);

    const fav = favorites.find(f => f.id === i.id);
    fav ? removeFavorites(fav) : addFavorites(i);
  };

  const addFavorites = (favorite: any) => {
    //GO TO DATABASE TO SAVE FAVORITES
    setFavorites(prevState => [
      ...prevState,
      {
        id: favorite.id,
        name: favorite.name
      }
    ]);
  };

  const removeFavorites = (favorite: any) => {
    //GO TO DATABASE TO REMOVE FAVORITES
    setFavorites(favorites.filter(f => f.id !== favorite.id));
  };

  const onClickTab = (tab: string) => {
    setActiveTab(tab);
  };

  //USE REDUX FOR STATE AND TYPE FAVORITES , QUOTES

  return (
    <>
      <ul className="tabs">
        <li
          className="tabs__item tabs__item--active"
          onClick={() => onClickTab("ASSETS")}
        >
          Assets
        </li>
        <li className="tabs__item" onClick={() => onClickTab("FAVORITES")}>
          Favorites
        </li>
      </ul>
      <div className="assets-tab">
        {activeTab === "ASSETS" ? (
          <QuotesList
            onClickFavorites={onClickFavorites}
            favorites={favorites}
          />
        ) : (
          <QuotesFavorites favorites={favorites} />
        )}
      </div>
    </>
  );
};

export default QuotesContainer;
