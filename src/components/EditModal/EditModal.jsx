import { useEffect, useState } from "react";
import "./EditModal.css";
import { AiOutlineDollar } from "react-icons/ai";
const EditModal = ({ children, onClose, onSubmit }) => {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });


  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد کنید</h1>
            {children}
        <button className="edit-form-submit" onClick={onSubmit}>
          ثبت اطلاعات جدید
        </button>
      </form>
    </div>
  );
};

export default EditModal;
