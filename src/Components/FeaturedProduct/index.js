import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import * as S from "./style";
import { Group3 } from "../../img";

function FeaturedProduct() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <>
      <h1>Featured Product</h1>
      <S.ProductMain>
        {products.map((product) => (
          <S.ProductDiv key={product._id}>
            <img src={product.src} alt="" />
            <div>
              <span>${product.price}</span>
              <button onClick={() => addCart(product._id)}>
                <img src={Group3} alt="" />
              </button>
            </div>
          </S.ProductDiv>
        ))}
      </S.ProductMain>
      <div style={{ textAlign: "center", marginTop: "3em" }}>
        <S.LoadMore href="#">Load more</S.LoadMore>
      </div>
    </>
  );
}

export default FeaturedProduct;
