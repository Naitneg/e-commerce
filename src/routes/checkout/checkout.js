import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../components/store/cart-context";

const Checkout = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      {cartCtx.cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.quantity}</p>

          <button
            onClick={() => {
              cartCtx.addItemToCart(item);
            }}
          >
            increase
          </button>
          <button
            onClick={() => {
              cartCtx.removeItemFromCart(item);
            }}
          >
            decrease
          </button>
          <button
            onClick={() => {
              cartCtx.deleteItemFromCart(item);
            }}
          >
            remove
          </button>
          <h1>{cartCtx.totalPrice}</h1>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
