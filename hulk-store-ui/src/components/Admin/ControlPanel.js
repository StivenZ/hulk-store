import React from "react";
import { mockData } from "../../mockData";
import { formatDateInTimeAgo } from "./../../helpers";

function ControlPanel({ items }) {
  const rows = items.map((item, index) => {
    return (
      <tr key={index}>
        <th>{item.name}</th>
        <th>{item._id}</th>
        <th>{item.size}</th>
        <th>{item.price}</th>
        <th>{item.size * item.price}</th>
        <th>{formatDateInTimeAgo(item.createdAt)}</th>
        <th>{item.type}</th>
        <th>
          {" "}
          <button className="button is-primary"> edit </button>{" "}
        </th>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <div className="box ml-5 mr-5">
        <table className="table is-stripped is-hoverable is-bordered is-fullwidth">
          <thead>
            <tr>
              <th> NAME </th>
              <th> ID </th>
              <th> TOTAL </th>
              <th> UNIT_PRICE </th>
              <th> TOTAL_PRICE </th>
              <th> CREATION_DATE </th>
              <th> TYPE </th>
              <th> EDIT </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ControlPanel;
