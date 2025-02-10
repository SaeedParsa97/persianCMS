import "./DeleteModal.css";
import { createPortal } from "react-dom";

const DeleteModal = ({ deleteModalCancelAction, deleteModalSubmitAction }) => {
  return (
    <>
      {createPortal(
        <div className="modal-parent active">
          <div className="delete-modal">
            <h1>آیااز حذف اطمینان دارید؟</h1>
            <div className="delete-modal-btns">
              <button
                className="delete-btn delete-modal-accept-btn"
                onClick={() => deleteModalSubmitAction()}
              >
                بله
              </button>
              <button
                className="delete-btn delete-modal-reject-btn"
                onClick={() => deleteModalCancelAction()}
              >
                خیر
              </button>
            </div>
          </div>
        </div>,
        document.getElementById("modals-parent")
      )}
    </>
  );
};

export default DeleteModal;
