import styled from "styled-components";

export const SliderImg = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const PrevArrow = styled.div`
  &:before {
    display: none;
  }
  &:hover {
    color: #ffb338;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  color: #252525;
  top: 45%;
  right: 4%;
  text-align: center;
  outline: none;
  cursor: pointer;
  width: 20px;
  &:before {
    display: none;
  }
  &:hover {
    color: #ffb338;
  }
`;

export const GroupOne = styled.img`
  width: 45px;
`;
