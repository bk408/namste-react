import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 flex items-center text-left relative"
        >
          <div className="flex-grow">
            <div>
              <span>{item.card.info.name}</span>
            </div>
            <div>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs pt-1 pb-5">{item.card.info.description}</p>
            </div>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-40 h-28 rounded-md "
            alt={item.card.info.name}
          />
          <button className="absolute px-4 py-1 bg-white rounded-lg my-16 mx-10 cursor-pointer   text-green-700 right-2 top-8 shadow-md"
             onClick={() => handleAddItem(item)}
          >
            ADD +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
