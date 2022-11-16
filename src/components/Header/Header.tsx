import { memo } from 'react';
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";
import Container from "components/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.logo_wrapp}>
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </div>
          <nav>
            <ul className={styles.nav_items}>
              <Link to={"/"}>
                <li className={styles.nav_item}>Home</li>
              </Link>
              <Link to={"/example"}>
                <li className={styles.nav_item}>Example</li>
              </Link>
            </ul>
           
          </nav>
          <div className="flex">
            <WishlistBadge />
            <CartBadge />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
