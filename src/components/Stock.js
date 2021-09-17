import React from "react";

function Stock({ticker, name, price, id, portfolioStocks, setPortfolioStocks}) {
  function handleClick(id){
    if(portfolioStocks.find(stockId => stockId === id)) {
      setPortfolioStocks(portfolioStocks.filter(stockId => stockId !== id))
    } else {
      setPortfolioStocks([...portfolioStocks, id])
    }
  }
  return (
    <div>
      <div className="card" onClick={() => handleClick(id)} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
