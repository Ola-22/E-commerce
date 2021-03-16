import { HeroImg, Group1, Group2 } from "../../img";
import * as S from "./style.js";
import Slider from "react-slick";
import SliderContent from "./SliderContent";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <S.NextArrow className={className} onClick={onClick}>
      <S.GroupOne src={Group2} alt="img" />
    </S.NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.PrevArrow
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        left: "2%",
        zIndex: "5",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <S.GroupOne src={Group1} alt="img" />
    </S.PrevArrow>
  );
}

export default function SliderComp() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //       height: "20px",
    //       borderRadius: "50%",
    //       marginLeft: "40px"
    //     }}
    //   >
    //     {/* {i + 1} */}
    //   </div>
    // )
  };

  return (
    <div style={{ position: "relative", marginBottom: "40px" }}>
      <Slider {...settings}>
        <div>
          <S.SliderImg src={HeroImg} alt="img" />
          <SliderContent />
        </div>
        <div>
          <S.SliderImg src={HeroImg} alt="img" />
          <SliderContent />
        </div>
        <div>
          <S.SliderImg src={HeroImg} alt="img" />
          <SliderContent />
        </div>
      </Slider>
    </div>
  );
}
