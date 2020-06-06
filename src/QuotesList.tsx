import React, { useState, useEffect } from "react";
import TableComponent from "./shared/TableComponent";
import PaginationComponent from "./shared/PaginationComponent";
import { getQuotes } from "./api/quotesService";
import { buildQueryParams } from "./api/queryBuilder";
import "./QuotesList.scss";
const QuotesList = ({ onClickFavorites, favorites }: any) => {
  //Start: Read from CMS
  const columns = [
    {
      key: "name",
      title: "Name"
    },
    {
      key: "price",
      title: "Market Price"
    },
    {
      key: "circulatingSupply",
      title: "Circulating Supply"
    }
  ];

  let action = {
    key: "favorites",
    icon: "fa favoritesicon",
    title: "Favorites"
  };

  const items = [1, 2, 3, 4, 5];
  //end CMS

  //Pagination Config
  const paginationItems = items;
  const limit = 25;
  const defaultPage = 1;
  const [startPage, setStartPage] = useState(defaultPage);

  //Action to load Currencies
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const getCryptoList = async () => {
      try {
        const response = await getQuotes(
          buildQueryParams({ startPage, limit })
        );

        response.forEach((quote: any) => {
          let fav = favorites.find((f: any) => f.id === quote.id);
          if (fav) quote.liked = true;
        });
        setCryptoList(response);
      } catch (e) {
        //Show a toast
      }
    };
    getCryptoList();
  }, [startPage, limit]);

  //Replace any by types
  const onClickPaginate = (i: any) => {
    let activeIndex;
    activeIndex = +i;

    setStartPage(activeIndex);
  };

  return (
    <>
      <h3>Cryptocurrencies</h3>
      <TableComponent
        list={cryptoList}
        onClickAction={onClickFavorites}
        columns={columns}
        action={action}
      />
      <PaginationComponent
        activePage={startPage}
        items={paginationItems}
        onClickPaginate={onClickPaginate}
      />
    </>
  );
};

export default QuotesList;
