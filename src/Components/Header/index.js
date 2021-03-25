import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <S.HeaderMain>
      <S.DivBar>
        <FontAwesomeIcon icon={faBars} />
      </S.DivBar>
      <S.RightSide>
        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "20px" }} />
        <span style={{ position: "relative" }}>
          <span>{cart.length}</span>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </span>
      </S.RightSide>
    </S.HeaderMain>
  );
}

export default Header;
