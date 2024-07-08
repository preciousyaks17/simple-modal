// src/App.js
import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Form saved");
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Form Modal Example</h1>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
}

export default App;
