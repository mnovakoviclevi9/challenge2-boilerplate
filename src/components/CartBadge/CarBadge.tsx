import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import SvgIcon from "components/SvgIcon";

const CarBadge = () => {
  return (
    <Link to={"/cart"}>
      <span className={styles.cart_badge}>
        <SvgIcon type="cart" className={styles.cart_icon} />
        <span className={styles.cart_items_number}>14</span>
      </span>
    </Link>
  );
};

export default memo(CarBadge);
