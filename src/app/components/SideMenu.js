import React from "react";

const SideMenu = ({ loadCategory, category }) => {
  const links = ["Fruits", "Vegetables", "Fresh Products", "Grocery", "Drinks"];

  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              className={category === index && "active"}
              key={index}
              onClick={() => loadCategory(index)}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
