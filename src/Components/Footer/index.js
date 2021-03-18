import * as S from "./style";
import { Facebook, Twitter, Instagram, Arrow, Logo } from "../../img";

function Footer() {
  return (
    <div style={{ backgroundColor: "#181813", color: "#F2F2F2" }}>
      <S.FooterTop>
        <div style={{ display: "flex" }}>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input type="text" placeholder="Enter Your E-mail Address Here" />
          <S.ArrowImg src={Arrow} alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <h4>Join us on</h4>
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </S.FooterTop>
      <S.FooterBottom>
        <h5>TERMS & CODITION POLICY</h5>
        <img src={Logo} alt="" />
        <h5>© 2019 Bamboo All Rights Reserved</h5>
      </S.FooterBottom>
    </div>
  );
}

export default Footer;
