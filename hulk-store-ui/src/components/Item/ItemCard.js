import React from "react";
import { Circle } from "../Circle";
import { formatDateInTimeAgo } from "./../../helpers";

function ItemCard({
  index,
  data: { _id, name, price, size, type, createdAt },
}) {
  return (
    <li key={index} id={_id} className="column is-4-tablet is-3-desktop">
      <div className="column is-12">
        <div className="card is-1by1">
          <div className="card-image">
            <figure className="image">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Product rep"
              ></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="block" style={{ width: "100%" }}>
                <span className="icon-text is-flex is-justify-content-space-between is-align-items-center w-100">
                  <span className="title is-4 m-0">{name}</span>
                  <Circle
                    color={size <= 5 ? "orange" : size === 0 ? "red" : "green"}
                    size="15"
                  />
                </span>
                <p className="subtitle is-6">@{type}</p>
                <p className="subtitle is-6">${price}</p>
                <p className="subtitle is-6">Total: {size}</p>
              </div>
            </div>

            <div className="content">
              <p>created: {formatDateInTimeAgo(createdAt)}</p>
            </div>
          </div>

          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Sell
            </a>
          </footer>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
