import React, { useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ 
  stocks, 
  setStocks, 
  portfolioStocks, 
  setPortfolioStocks, 
  sort,
  filter
}) {
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(stockData => setStocks(stockData))
  }, [])

  const stocksToDisplay = stocks.sort((stock1, stock2) => {
    switch (sort) {
      case "None":
        return 0
      case "Alphabetically":
        if(stock1.ticker>stock2.ticker) {
          return 1
        } else {
          return -1
        }
      case "Price":
        return stock1.price-stock2.price
    }
  }).filter(stock => {
    if(filter === "All"){
      return true
    }
    return stock.type === filter
  }).map(stock => {
    return <Stock 
      ticker={stock.ticker} 
      name={stock.name} 
      price={stock.price} 
      key={stock.id}
      id={stock.id}
      portfolioStocks={portfolioStocks}
      setPortfolioStocks={setPortfolioStocks}
    />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
