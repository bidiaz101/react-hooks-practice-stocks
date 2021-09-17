import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sort, setSort] = useState("None")
  const [filter, setFilter] = useState("All")

  return (
    <div>
      <SearchBar setSort={setSort} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            setStocks={setStocks} 
            portfolioStocks={portfolioStocks} 
            setPortfolioStocks={setPortfolioStocks}
            sort={sort}
            filter={filter}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={stocks}
            portfolioStocks={portfolioStocks} 
            setPortfolioStocks={setPortfolioStocks} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
