import React from "react";
import "./Table.css";
function Table({ props }) {
  return (
    <div>
      <h1 className="h-primary">Crypto And About Them</h1>
      <table className="table">
        <thead className="table_heading">
          <tr>
            <th>Name</th>
            <th>id</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {props.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ele.name}</td>
                <td>{ele.id}</td>
                <td>{ele.symbol}</td>
                <td>{ele.current_price}</td>
                <td>{ele.total_volume}</td>
                <td className="image">
                  <img src={ele.image} alt="images" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
