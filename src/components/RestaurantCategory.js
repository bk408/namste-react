import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, SetShowIndex }) => {
  const handleClick = () => {
    SetShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-white shadow-xl p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "▲" : "▼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
