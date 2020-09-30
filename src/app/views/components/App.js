import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../../components";
import CartPage from "./Cart";
import Home from "./Home";
import Checkout from "./Checkout";
import { Confirm } from "./Confirm";
import { list } from "../../data";
import "../../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfileContextProvider from "../../lib/UserProfileContext";

const App = (props) => {
  const { items, saveLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(0);

  const loadCategory = (index) => {
    setCategory(index);
  };

  const filterResults = (input) => {
    //.flat() gathers all the lists and make only one
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    //Le state devient la chaîne de caractères qui est dans l'input
    setFiltered(results);
  };

  //useEffet() is like componentDidMount(). It will run each time "items" changes
  useEffect(() => {
    saveLocalStorage(items);
  }, [items]);

  const update = () => {};

  return (
    <Fragment>
      <Router>
        <UserProfileContextProvider>
          <Navbar
            filter={filterResults}
            setFiltering={setFiltering}
            count={count}
          />

          {/* All the Routes */}
          <Route
            exact
            path="/"
            component={(props) => (
              <Home
                category={category}
                loadCategory={loadCategory}
                list={list}
                isFiltering={isFiltering}
                filtered={filtered}
              />
            )}
          />
          <Route path="/cart" component={CartPage} />

          <Route path="/checkout" component={Checkout} />

          <Route path="/confirm" component={Confirm} />
        </UserProfileContextProvider>
      </Router>
    </Fragment>
  );
};
export default App;
