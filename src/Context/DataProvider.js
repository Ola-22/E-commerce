import { useEffect } from "react";
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
      price: "400.0",
    },
    {
      _id: "2",
      src: `${Product2}`,
      price: "500.0",
    },
    {
      _id: "3",
      src: `${Product3}`,
      price: "40.0",
    },
    {
      _id: "4",
      src: `${Product4}`,
      price: "400.0",
    },
    {
      _id: "5",
      src: `${Product5}`,
      price: "400.0",
    },
    {
      _id: "6",
      src: `${Product6}`,
      price: "400.0",
    },
    {
      _id: "7",
      src: `${Product7}`,
      price: "400.0",
    },
    {
      _id: "8",
      src: `${Product8}`,
      price: "400.0",
    },
    {
      _id: "9",
      src: `${Product9}`,
      price: "400.0",
    },
    {
      _id: "10",
      src: `${Product10}`,
      price: "400.0",
    },
    {
      _id: "11",
      src: `${Product11}`,
      price: "400.0",
    },
    {
      _id: "12",
      src: `${Product12}`,
      price: "400.0",
    },
  ]);

  const [cart, setCart] = useState([]);

  function addCart(id) {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    }
  }
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}

export default DataProvider;
