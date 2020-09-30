import React from "react";
import { SideMenu, List } from "../../components";

const Home = (props) => {
  const {
    isFiltering,
    filtered,
    list,
    category,

    updateCart,
    loadCategory,
  } = props;
  return (
    <div className="container">
      <div className="row">
        <SideMenu loadCategory={loadCategory} category={category} />
        <div className="col-sm">
          <div className="row">
            {/* S'il y a un mot tapé, on sort la liste filtrée, sinon on sort toutes les options */}
            <List
              data={isFiltering ? filtered : list[category]}
              category={category}
              updateCart={updateCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
