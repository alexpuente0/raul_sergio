import React, { useRef, useState } from "react";
const Modal = ({ service, services, onClose, onNext, onPrev, ctaText }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const modalRef = useRef();

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      onNext();
    }
    if (touchStart - touchEnd < -50) {
      onPrev();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <h2>{service.title}</h2>
        
        <div className="modal-desktop">
          <div className="modal-image-container">
            <img
              src={require(`../assets/${service.id}.png`)}
              alt={service.title}
              className="modal-image"
            />
          </div>
          <div className="modal-content-right">
            <p>{service.description}</p>
            <button
              className="cta-button"
              onClick={() => {
                document.getElementById("contactModal").style.display = "block";
                document.body.style.overflow = "hidden";
              }}
            >
              {ctaText}
            </button>
          </div>
          <div className="modal-navigation">
            <button onClick={onPrev}>{"<"}</button>
            <button onClick={onNext}>{">"}</button>
          </div>
        </div>

        <div 
          className="modal-mobile"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="modal-image-container">
            <img
              src={require(`../assets/${service.id}.png`)}
              alt={service.title}
              className="modal-image"
            />
          </div>
          <div className="modal-content-bottom">
            <p>{service.description}</p>
            <button
              className="cta-button"
              onClick={() => {
                document.getElementById("contactModal").style.display = "block";
                document.body.style.overflow = "hidden";
              }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
