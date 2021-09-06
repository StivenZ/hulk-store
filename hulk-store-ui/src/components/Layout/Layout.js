import React from "react";
import "./Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="block is-large">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
