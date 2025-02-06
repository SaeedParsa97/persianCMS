import Errorbox from "../Error/Errorbox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import "./Products.css";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <Errorbox msg="هیچ محصولی یافت نشد" />
      <ProductsTable />
    </>
  );
};

export default Products;
