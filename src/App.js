import { useEffect, useState } from "react";

import Table from "./Component/Table/Table";

function App() {
  let [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((Json) => {
  //       return setData(Json);
  //     }, []);
  // });

  useEffect(() => {
    async function fetching() {
      let res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      let data = await res.json();
      return setData(data);
    }
    fetching();
  }, []);
  return (
    <div className="App">
      <Table props={data} />
    </div>
  );
}

export default App;
