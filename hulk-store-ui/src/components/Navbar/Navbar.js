import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className="block ml-2">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" className="navbar-menu is-active">
            <div className="navbar-start">
              <Link className="navbar-item" to="/store">
                Store
              </Link>
              <Link className="navbar-item" to="/admin">
                Admin
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
