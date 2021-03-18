import styled from "styled-components";

export const BamboMain = styled.div`
  background-color: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 10em;
  margin-top: 40px;
`;

export const ListProduct = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-bottom: 5em;
  & > li {
    margin-inline-start: 3em;
    color: #181813;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const BamboImg = styled.img`
  max-width: 100%;
  width: 28%;
  margin-inline-start: 3.5em;
`;
