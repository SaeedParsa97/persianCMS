import { useEffect, useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import "./Products.css";

const Products = () => {

  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:3000/api/products/")
      .then((response) => response.json())
      .then((products) => setAllProducts(products));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts} />

      <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts} />
    </>
  );
};

export default Products;
