import styled from "styled-components";

export const ProductMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductDiv = styled.div`
  &:nth-child(2),
  &:nth-child(5),
  &:nth-child(8),
  &:nth-child(11) {
    margin-top: 25px;
    span {
      top: 88%;
    }
  }
  position: relative;

  span {
    visibility: hidden;
    background: linear-gradient(0deg, #181813 0%, rgba(24, 24, 19, 0) 174.29%);
    position: absolute;
    width: 100%;
    border-radius: 5px;
    top: 83.4%;
    left: 0;
    height: 60px;
    z-index: 20;
  }
  img {
    &:hover ~ span {
      visibility: visible;
    }
  }
`;
export const ProductTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;
