import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderMain>
      <S.DivBar>
        <FontAwesomeIcon icon={faBars} />
      </S.DivBar>
      <S.RightSide>
        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "20px" }} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </S.RightSide>
    </S.HeaderMain>
  );
}

export default Header;
