import React from "react";
const Modal = ({ service, services, onClose, onNext, onPrev }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <h2>{service.title}</h2>
        <div className="modal-description">
          <img
            src={require(`../assets/${service.id}.png`)}
            alt={service.title}
            className="modal-image"
          />

          <div className="txt-cta">
            <p>{service.description}</p>

            <div class="cta">
              <a href="../index.html#contact" class="cta-button">
                Request Consultation
              </a>
            </div>
          </div>
        </div>
        <div className="modal-navigation">
          <button onClick={onPrev}>{"<"}</button>
          <button onClick={onNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
