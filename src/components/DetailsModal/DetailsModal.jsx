import { useEffect } from "react";
import "./DetailsModal.css";

const DetailsModal = ({ onHide, children }) => {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onHide();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <div className="modal-parent active">
      <div className="details-modal">{children}</div>
    </div>
  );
};

export default DetailsModal;
