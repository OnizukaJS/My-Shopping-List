import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/App.css";
import { Table } from "../../components";
import { Link } from "react-router-dom";

const CartPage = () => {
  const items = useSelector((state) => state.items);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = subTotal > 0 ? 10.0 : 0.0;

  //useEffect = componentDidUpdate()
  useEffect(() => {
    let totals = items.map((item) => {
      return item.quantity * item.details.price;
    });
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
  }, [items, subTotal, total]); //useEffect will be effective only if items, subTotal or total have changed

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table items={items} />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€ {subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">€{shipping.toFixed(2)}</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€{total.toFixed(2)}</li>
                </ul>
              </li>
            </ul>

            <Link
              to="checkout"
              className={`white btn btn-light btn-lg btn-block checkout ${
                !items.length && "disabled"
              } bg-crimson`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
