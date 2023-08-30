import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100 ">
      <img
        className="rounded-lg"
        alt="res"
        rounded-lg
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold font-serif py-4 text-lg">{name}</h3>
      <h4 className="">{cuisines.join(",")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
