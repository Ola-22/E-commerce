import styled from "styled-components";

export const SliderContent = styled.div`
  position: absolute;
  top: 12%;
  line-height: 55px;
  font-family: Merriweather;
  width: 80rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

export const SliderPara = styled.p`
  width: 30%;
  font-size: 24px;
  margin: auto;
  line-height: 34px;
`;

export const SliderBtn = styled.button`
  width: 120px;
  padding: 10px 15px;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 15px;
  background-color: var(--primary-color);
  margin: auto;
  margin-top: 20px;
`;
