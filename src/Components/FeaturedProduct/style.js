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
    div {
      top: 87%;
    }
  }
  &:nth-child(2) > img {
    border-radius: 10px;
  }
  position: relative;
  z-index: 1;

  div {
    visibility: hidden;
    background: linear-gradient(0deg, #181813 0%, rgba(24, 24, 19, 0) 174.29%);
    position: absolute;
    width: 98.5%;
    border-radius: 0 0 15px 15px;
    top: 83.2%;
    left: 3px;
    height: 0;
    z-index: 2;
    color: var(--white-color);
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    align-items: center;
    & > img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      margin-inline-end: 2em;
      z-index: 3;
    }
    span {
      font-family: "JacquesFrancois";
      margin-inline-start: 7em;
      z-index: 4;
    }
  }
  img {
    width: 400px;
    height: 520px;
    &:hover ~ div {
      visibility: visible;
      z-index: 20;
      height: 60px;
    }
    /* &:hover {
      border: 3px solid var(--primary-color);
      border-radius: 15px;
      transition: 0.1s ease;
    } */
  }
`;

export const LoadMore = styled.a`
  text-decoration: none;
  color: var(--black-color);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background: var(--primary-color);
  border-radius: 20px;
  padding: 9px 18px;
`;
