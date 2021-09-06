import React, { useState } from "react";
import ItemModal from "../modals/ItemModal";

function SearchPanel() {
  const [toggle, setToggle] = useState({ isActive: false, name: "dropdown" });
  function handleDropdown() {
    if (!toggle.isActive) {
      setToggle({ isActive: true, name: "dropdown is-active" });
    } else {
      setToggle({ isActive: false, name: "dropdown" });
    }
  }

  return (
    <>
      <div className="box ml-3">
        <div className={toggle.name}>
          <div className="dropdown-trigger mr-2">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={handleDropdown}
            >
              <span>Type</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Toys
              </a>
              <a className="dropdown-item">Clothing</a>
              <a href="#" className="dropdown-item">
                Merch
              </a>
              <a href="#" className="dropdown-item">
                All
              </a>
              <hr className="dropdown-divider"></hr>
              <a href="#" className="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>
        <input
          class="input is-primary"
          type="text"
          placeholder="Product name"
        ></input>
      </div>
    </>
  );
}

export default SearchPanel;
