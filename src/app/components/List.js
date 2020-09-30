import React from "react";
import { Card } from "../components";

export const List = (props) => {
  const { data, updateCart } = props;

  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item) => (
          <Card key={item.ref} item={item} updateCart={updateCart} />
        ))}
      </div>
    </div>
  );
};

export default List;
