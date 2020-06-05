import React, { useState, useEffect } from "react";
import TableComponent from "./shared/TableComponent";
import PaginationComponent from "./shared/PaginationComponent";
import { getQuotes } from "./api/quotesService";

const QuotesList = ({ onAddFavorites }: any) => {
  //Start: Read from CMS
  const columns = [
    {
      key: "name",
      title: "Name"
    },
    {
      key: "marketPrice",
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

  const paginationItems = ["First", ...items, "Last"];
  const itemsPerPage = 25;
  const defaultPage = 1;
  const [activePage, setActivePage] = useState(defaultPage);

  //Action to load Currencies
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    // const getCryptoList = async () => {
    //   const cryptoList = await getQuotes();
    //   console.log("List", cryptoList);
    // };
    // getCryptoList();
  }, [itemsPerPage, activePage]);

  //Replace any by types
  const onClickPaginate = (i: any) => {
    let activeIndex;
    activeIndex = +i;

    if (i == "First") activeIndex = 1;
    if (i == "Last") activeIndex = items.length;

    setActivePage(activeIndex);
    console.log("on click paginate", i);
  };

  return (
    <>
      <div className="title">Cryptocurrencies</div>
      <TableComponent
        onClickAction={onAddFavorites}
        columns={columns}
        action={action}
      />
      <PaginationComponent
        activePage={1}
        items={paginationItems}
        onClickPaginate={onClickPaginate}
      />
    </>
  );
};

export default QuotesList;
