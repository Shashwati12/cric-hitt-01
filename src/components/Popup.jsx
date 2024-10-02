
import React, { useState } from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  function handleNext(){
    navigate('/form')
  }
  return (
    <>
      <button onClick={togglePopup} className="open-popup-btn">view Tournament</button>
      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Popup Content</h2>
            <p>This is a popup with a blurred background.</p>
            <button onClick={togglePopup} className="close-popup-btn">Close</button>
            <button className="register" onClick={handleNext}>Register</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
