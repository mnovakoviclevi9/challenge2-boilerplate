import QuantityButton from "components/QuantityButton/QuantityButton";
import SvgIcon from "components/SvgIcon";
import { ICartItem } from "interfaces";
import styles from './styles.module.css';

interface ICartProps extends ICartItem {
    removeHandler: (id: number) => void;
  }
  
const CartItem = ({
    id,
    title,
    price,
    quantity,
    image,
    removeHandler,
  }: ICartProps) => {

    return (
      <div className={styles.cartItem}>
        <img className={styles.cartItem_image} src={image} alt={title} />
        <div className={styles.cartItem_info}>
          <p className={styles.cartItem_title}>{title}</p>
          <span className={styles.cartItem_priceInfo}>
            ${price} x {quantity}
          </span>
        </div>
        <QuantityButton quantity={quantity} id={id} />
        <div>sum: ${(price * quantity).toFixed(2)}</div>
        <span onClick={() => removeHandler(id)} >
           <SvgIcon type='remove' width={20} height={20} color="#928F8F" />
        </span>
  
      </div>
    );
  };

export default CartItem;