import React from "react";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [toggle, setToggle] = useState({ isActive: false, name: "dropdown" });

  function handleDropdown() {
    if (!toggle.isActive) {
      setToggle({ isActive: true, name: "dropdown is-active" });
    } else {
      setToggle({ isActive: false, name: "dropdown" });
    }
  }

  return (
    <React.Fragment>
      <div className="box">
        <input
          className="input is-primary"
          type="text"
          placeholder="Product name"
          size="1"
        ></input>

        <div className={toggle.name}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={handleDropdown}
            >
              <span>Item type</span>
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
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
