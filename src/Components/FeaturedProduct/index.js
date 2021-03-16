import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import * as S from "./style";

function FeaturedProduct() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <>
      <S.ProductTitle>Featured Product</S.ProductTitle>
      <S.ProductMain>
        {products.map((product) => (
          <S.ProductDiv key={product._id}>
            <img src={product.src} alt="" />

            <span key={product._id}>${product.price}</span>
          </S.ProductDiv>
        ))}
      </S.ProductMain>
    </>
  );
}

export default FeaturedProduct;
