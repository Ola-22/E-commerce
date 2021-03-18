import { useState } from "react";
import { Rectangle1, Rectangle2, Rectangle3 } from "../../img";
import Tab from "./TabsProduct/Tab";
import TabNav from "./TabsProduct/TabNav";
import * as S from "./style";

function BamboProduct(props) {
  const Img = [`${Rectangle1}`, `${Rectangle2}`, `${Rectangle3}`];
  const [selected, setSelected] = useState("Chair");

  const SelectTab = (tab) => {
    setSelected(tab);
  };
  return (
    <S.BamboMain>
      <h1>Bamboo Products</h1>
      <TabNav
        tabs={["Chair", "Cabinet", "sofa", "bench"]}
        selected={selected}
        SelectTab={SelectTab}
      >
        <Tab isSelected={selected === "Chair"}>
          {Img.map((name, index) => (
            <S.BamboImg key={index} src={name} alt="" />
          ))}
        </Tab>
        <Tab isSelected={selected === "Cabinet"}>
          {Img.reverse().map((name, index) => (
            <S.BamboImg key={index} src={name} alt="" />
          ))}
        </Tab>
        <Tab isSelected={selected === "sofa"}>
          {Img.reverse().map((name, index) => (
            <S.BamboImg key={index} src={name} alt="" />
          ))}
        </Tab>
        <Tab isSelected={selected === "bench"}>
          {Img.reverse().map((name, index) => (
            <S.BamboImg key={index} src={name} alt="" />
          ))}
        </Tab>
      </TabNav>
    </S.BamboMain>
  );
}

export default BamboProduct;
