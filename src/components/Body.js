import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [listOfRestaurants, setListOfRestraunt] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  let [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("API Response:", json);
    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <h1>
        Seems like your internet is not working. Kindly check your internet
        connectivity !!!
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-x-hidden">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-soid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-2 bg-green-200 rounded-lg hover:bg-green-300"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4">
          <label>UserName:</label>
          <input
            className="border px-4 py-2 m-2 border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
