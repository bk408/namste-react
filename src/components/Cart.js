import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((store) => store.cart.items)
    
    const handleClearCart = () => {
      dispatch(clearCart());
    };



    return (
      <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-blue-300 text-white rounded-md"
                  onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && <h1 className="font-bold m-5 p-5">Your Cart is empty<p>Pick up where you left off</p></h1>}
                <ItemList items={cartItems} />
            </div>
      </div>
    );
}

export default Cart;