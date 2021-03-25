import styled from "styled-components";

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  &:first-of-type {
    margin-inline-start: 1em;
    padding: 30px;
    position: relative;
    & h4 {
      align-self: center;
    }
    & input {
      background: #292929;
      border-radius: 20px;
      border: 1px solid #292929;
      width: 249px;
      height: 30px;
      padding: 15px;
      margin-inline-start: 1em;
      @media (max-width: 800px) {
        width: 180px;
      }
    }
  }
  &:nth-last-of-type(2) {
    margin-inline-end: 6em;
    @media (max-width: 1000px) {
      margin: 0;
    }
    & h4 {
      width: 50%;
      text-transform: uppercase;
      margin-inline-end: 1em;
      @media (max-width: 800px) {
        width: 30%;
      }
    }
    & img {
      margin-inline-end: 1em;
      @media (max-width: 1000px) {
        margin-inline-end: 0.5em;
        width: 20px;
        height: 30px;
      }
    }
  }
`;

export const ArrowImg = styled.img`
  position: absolute;
  left: 43.5%;
  display: flex;
  top: 45%;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2em;
  border-top: 2px solid #ededed;
  & h5 {
    font-size: 12px;
  }
  & img {
    width: 80px;
    margin-inline-start: 5em;
  }
`;
