import React from "react";
import "./Modal.css";

const Modal = ({ show, handleClose, handleSave }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Simple Modal</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
