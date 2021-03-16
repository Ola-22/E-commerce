import { createContext, useState } from "react";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
  Product11,
  Product12,
} from "../img";
export const DataContext = createContext();

function DataProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "1",
      src: `${Product1}`,
      price: "40",
    },
    {
      _id: "2",
      src: `${Product2}`,
      price: "40",
    },
    {
      _id: "3",
      src: `${Product3}`,
      price: "40",
    },
    {
      _id: "4",
      src: `${Product4}`,
      price: "40",
    },
    {
      _id: "5",
      src: `${Product5}`,
      price: "40",
    },
    {
      _id: "6",
      src: `${Product6}`,
      price: "40",
    },
    {
      _id: "7",
      src: `${Product7}`,
      price: "40",
    },
    {
      _id: "8",
      src: `${Product8}`,
      price: "40",
    },
    {
      _id: "9",
      src: `${Product9}`,
      price: "40",
    },
    {
      _id: "10",
      src: `${Product10}`,
      price: "40",
    },
    {
      _id: "11",
      src: `${Product11}`,
      price: "40",
    },
    {
      _id: "12",
      src: `${Product12}`,
      price: "40",
    },
  ]);

  const value = {
    products: [products, setProducts],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}

export default DataProvider;
