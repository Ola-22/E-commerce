import styled from "styled-components";

export const HeaderMain = styled.div`
  display: flex;
  position: absolute;
  /* bottom: 0;
  right: 0; */
  min-width: 100%;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  background-color: rgba(24, 24, 19, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--white-color);
  padding: 15px 0;
`;

export const DivBar = styled.div`
  margin-left: 5%;
`;

export const RightSide = styled.div`
  margin-right: 5%;
  & span {
    &:first-child {
      position: absolute;
      top: -12px;
      right: -7px;
      background: var(--primary-color);
      font-size: 10px;
      color: white;
      padding: 3px 5px;
      border-radius: 50%;
      z-index: -1;
    }
  }
`;
