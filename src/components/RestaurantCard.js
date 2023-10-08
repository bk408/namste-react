import { CDN_URL } from "../utils/constant";
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-white hover:bg-gray-50">
      <img className="rounded-lg" alt="res" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl py-2">{name}</h3>

      <h4 className="text-yellow-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <span>{avgRating}</span>
      </h4>
      <h4 className="text-gray-600">
        {cuisines.length > 4
          ? `${cuisines.slice(0, 2).join(", ")}...`
          : cuisines.join(", ")}
      </h4>

      <h4 className="text-gray-700">{deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard  {...props} />
       </div>
     )
   }
}

export default RestaurantCard;
