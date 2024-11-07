import React from "react";
import "../css/modal.css";

const Modal = () =>{
    return (
       
    <div className="modal-container">
      <div className="form-container">
        <form action="">
          <label for="file">upload files</label>
          <input name="file" type="file" multiple />
          <button className="submit-button" type="submit">
            <span>upload</span>
          </button>
        </form>
        <span className="remove-icon"><i className="fa-solid fa-remove"></i></span>
      </div>
    </div>

    );

}
export default Modal;