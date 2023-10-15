import React from "react";
const showListMo = ({ items }) => {
  console.log(items);
  return (
    <div className="modal">
      {items.map((item) => (
        <div className="item-container" key={item.id}>
          <h1>{item.name}</h1>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  );
};

export default showListMo;
