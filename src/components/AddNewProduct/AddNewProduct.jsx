import { useState } from "react";
import "./AddNewProduct.css";

const AddNewProduct = ({ getAllProducts }) => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCount, setProductCount] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPopularity, setProductPopularity] = useState("");
  const [productSale, setProductSale] = useState("");
  const [productColors, setProductColors] = useState("");

  const newProductInfos = {
    title: productTitle,
    price: productPrice,
    count: productCount,
    img: productImg,
    popularity: productPopularity,
    sale: productSale,
    colors: productColors,
  };

  const addnewProduct = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductInfos),
    })
      .then((response) =>response.json())
      .then((text) => {
        console.log(text);
        // getAllProducts();
        // setEmptyInputs();
      });
  };

  function setEmptyInputs() {
    setProductTitle("");
    setProductPrice("");
    setProductCount("");
    setProductImg("");
    setProductPopularity("");
    setProductSale("");
    setProductColors("");
  }

  return (
    <div className="products-mian">
      <h1 className="products-title">افزودن محصول جدید</h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-products-input"
              value={productTitle}
              onChange={(event) => setProductTitle(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-products-input"
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-products-input"
              value={productCount}
              onChange={(event) => setProductCount(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-products-input"
              value={productImg}
              onChange={(event) => setProductImg(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-products-input"
              value={productPopularity}
              onChange={(event) => setProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-products-input"
              value={productSale}
              onChange={(event) => setProductSale(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-products-input"
              value={productColors}
              onChange={(event) => setProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-products-submit" onClick={addnewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
