import { CartContext } from "context/cart/CartContext";
import { FC, useContext } from "react";
import styles from './styles.module.css';

interface IProps {
  id:number;
  quantity:number;
  cb?: (operation:'plus' | 'minus') => void;
}

const QuantityButton:FC<IProps> = ({id, quantity = 1, cb}) => {

  const {  updateQuantity } = useContext(CartContext);
  const onClickHandler =(operation: 'plus' | 'minus') => {
    updateQuantity(id, operation)
    cb && cb(operation)
  }
  return (
    <div className={styles.quantity}>
      <span
        onClick={() => onClickHandler('minus')}
        className={`${styles.quantity_button} ${styles.quantity_button_minus}`}>
       -</span>
      <input
        readOnly
        type="text"
        className={styles.quantity_input}
        step="1"
        min="1"
        max=""
        name="quantity"
        value={quantity}
        title="Qty"
        size={2}
        inputMode="numeric"
      />
      <span  onClick={() => onClickHandler('plus')} className={styles.quantity_button}>+</span>
    </div>
  );
};

export default QuantityButton;
