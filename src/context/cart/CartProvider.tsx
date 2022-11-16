import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { ICartItem } from "interfaces";

type PaymentMathodType = "cash_delivery" | "bank_transfer" | "paypal";
export interface CartState {
  items: ICartItem[];
  tax: number;
  amount: number;
  paymentMethod: PaymentMathodType;
}

export type CartContextProps = {
  cartState: CartState;
  addToCart: (item: ICartItem) => void;
  removeCartItem: (id: number) => void;
  updateQuantity: (id: number, type: "plus" | "minus") => void;
};

const INITIAL_STATE: CartState = {
  items: [],
  tax: 20,
  amount: 0,
  paymentMethod: "cash_delivery",
};
interface props {
  children: JSX.Element;
}

export const CartProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (item: ICartItem) => {
    const product = state.items.find((pr) => pr.id === item.id);
    if (product) return false;

    dispatch({
      type: "addToCart",
      payload: { ...item, quantity: 1 },
    });
    updateAmount();
  };

  const removeCartItem = (id: number) => {
    dispatch({ type: "removeFromCart", payload: id });
    updateAmount();
  };
  const updateQuantity = (id: number, type: "plus" | "minus") => {
    if(state.items.length === 0) return;
    const index = state.items.findIndex((item) => item.id === id);

    if (type === "plus" && state.items[index].quantity < 10) {
      state.items[index].quantity = state.items[index].quantity + 1;
    }
    if (type === "minus" && state.items[index].quantity > 1) {
      state.items[index].quantity = state.items[index].quantity - 1;
    }
    dispatch({ type: "updateQuantity", payload: state.items });
    updateAmount();
  };

  const updateAmount = () => {
    dispatch({ type: "amountUpdate" });
  };

  return (
    <CartContext.Provider
      value={{
        cartState: state,
        addToCart,
        removeCartItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
