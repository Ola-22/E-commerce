import styled from "styled-components";

export const ProductMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductDiv = styled.div`
  @media (max-width: 1200px) {
    margin-top: 20px;
  }
  &:nth-child(2),
  &:nth-child(5),
  &:nth-child(8),
  &:nth-child(11) {
    margin-top: 25px;
    @media (max-width: 1200px) {
      margin-top: 0;
    }
    div {
      top: 88%;
    }
  }
  &:nth-child(2) > img {
    border-radius: 10px;
  }
  position: relative;

  div {
    background: linear-gradient(0deg, #181813 0%, rgba(24, 24, 19, 0) 174.29%);
    position: absolute;
    width: 100%;
    border-radius: 0 0 15px 15px;
    top: 83.7%;
    height: 60px;
    color: var(--white-color);
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    align-items: center;
    & > button {
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-inline-end: 2.5em;
      & > img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        &:hover {
          border: none;
        }
      }
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
    /* &:hover ~ div {
      width: 98.4%;
      left: 3px;
      top: 83.4%;
    } */
    @media (max-width: 800px) {
      width: 450px;
    }
    &:hover {
      border: 3px solid var(--primary-color);
      border-radius: 15px;
      transition: 0.1s ease;
    }
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
