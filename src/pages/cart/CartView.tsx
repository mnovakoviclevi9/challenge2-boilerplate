import  { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import fakedata from 'fakedata';
import { CartContext } from "context/cart/CartContext";
import CartItem from './components/CartItem';
import CartTotals from "./components/CartTotals";
import Button from "components/Button";

const CartView = () => {
  const { cartState, removeCartItem } = useContext(CartContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items } = cartState;
  return (
    <AppLayout>
      <Headline title="Cart" />
      <div className={styles.cartPage}>
      <div className={styles.cartItems}>
      {fakedata.map(item => ({...item, quantity:1})).map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              removeHandler={removeCartItem}
            />
          );
        })}
      </div>
      <div className={styles.cartTotalWrapp}>
      <CartTotals />
      <Button className={styles.proceedBtn}>Proceed to Checkout</Button>
      </div>
     
      </div>
    </AppLayout>
  );
};


export default CartView;
