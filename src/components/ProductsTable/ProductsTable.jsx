import { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Error/Errorbox";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineDollar } from "react-icons/ai";

const ProductsTable = ({allProducts, getAllProducts}) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [productID, setProductID] = useState(null);
  const [currentPdoduct, setCurrentPdoduct] = useState({});

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCount, setProductCount] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPopularity, setProductPopularity] = useState("");
  const [productSale, setProductSale] = useState("");
  const [productColors, setProductColors] = useState("");



  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
        
        toast.success("کالا با موفقیت حذف شد.");
      });
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    const updatedProductInfos = {
      title: productTitle,
      price: productPrice,
      count: productCount,
      img: productImg,
      popularity: productPopularity,
      sale: productSale,
      colors: productColors,
    }
    
    fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProductInfos),
    }).then((response) => response.json())
      .then(result=>{
        console.log(result);
        getAllProducts();
        setIsShowEditModal(false)
        toast("محصول با موفقیت به روز رسانی شد.");
    
      })
  };

  return (
    <>
    <ToastContainer/>
      <h1 className="header-table">لیست محصولات</h1>

      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => {
              return (
                <tr key={product.id} className="products-table-tr">
                  <td>
                    <img
                      src={product.img}
                      alt="oil image"
                      className="products-table-img"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} تومان</td>
                  <td>{product.count}</td>
                  <td>
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setCurrentPdoduct(product)
                      }}
                    >
                      جزئیات
                    </button>
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setProductID(product.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowEditModal(true);

                        setProductID(product.id)
                        setProductTitle(product.title);
                        setProductPrice(product.price);
                        setProductCount(product.count);
                        setProductImg(product.img);
                        setProductPopularity(product.popularity);
                        setProductSale(product.sale);
                        setProductColors(product.colors);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ ندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentPdoduct.popularity}</td>
                <td>{currentPdoduct.sale.toLocaleString()}</td>
                <td>{currentPdoduct.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان محصول"
              className="edit-product-input"
              value={productTitle}
              onChange={(event)=>setProductTitle(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="مبلغ محصول"
              className="edit-product-input"
              value={productPrice}
              onChange={(event)=>setProductPrice(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="موجودی محصول"
              className="edit-product-input"
              value={productCount}
              onChange={(event)=>setProductCount(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="آدرس کاور محصول"
              className="edit-product-input"
              value={productImg}
              onChange={(event)=>setProductImg(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="میزان محبوبیت محصول"
              className="edit-product-input"
              value={productPopularity}
              onChange={(event)=>setProductPopularity(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="میزان فروش"
              className="edit-product-input"
              value={productSale}
              onChange={(event)=>setProductSale(event.target.value)}
            />
          </div>
          <div className="edit-products-form-goup">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="تعداد رنگ بندی"
              className="edit-product-input"
              value={productColors}
              onChange={(event)=>setProductColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
};

export default ProductsTable;
