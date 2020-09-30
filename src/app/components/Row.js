import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../lib/actions";

const Row = (props) => {
  const { quantity, details, id } = props.item;
  //To make it easier to understand
  const item = details;
  //Using the state hook
  const [qty, setQty] = useState(quantity);
  //To dispatch action via the store
  const dispatch = useDispatch();

  const update = (action) => {
    if (action === "increment") {
      setQty(qty + 1);
    }
    if (action === "decrement") {
      setQty(qty - 1);
    }
  };

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    dispatch(updateCart(id, qty));
  }, [qty]);

  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={
            process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
          }
          alt={item.name}
        />
      </td>
      <td>{item.ref}</td>
      <td>€ {item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (qty > 1) {
                update("decrement");
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{qty}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              update("increment");
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>€ {(item.price * qty).toFixed(2)}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => remove(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default Row;
