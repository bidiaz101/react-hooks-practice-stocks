import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, portfolioStocks, setPortfolioStocks}) {
  const stocksToDisplay = stocks.filter(stock => {
    return portfolioStocks.find(stockId => stockId===stock.id)
  })

  const stockComponents = stocksToDisplay.map(stock => {
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
      <h2>My Portfolio</h2>
      {stockComponents}
    </div>
  );
}

export default PortfolioContainer;
