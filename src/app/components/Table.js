import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <table>
      <tr>
        <th width="200">Product</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>

      {items.map((item) => {
        return <Row item={item} />;
      })}
    </table>
  );
};

export default Table;
