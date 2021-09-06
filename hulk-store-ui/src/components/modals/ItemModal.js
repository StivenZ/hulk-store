import React from "react";
import { useState } from "react";
import { createItem } from "./../../services/client";

function ItemModal({ isActive, toggleIsActive, getItems }) {
  const [item, setItem] = useState({
    name: "",
    type: "",
    size: 0,
    price: 0,
    available: false,
  });

  const onChangeHandler = ({ target: { name, value } }) => {
    setItem((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const checkboxChangeHandler = ({ target: { checked, name } }) =>
    setItem((state) => ({
      ...state,
      [name]: checked,
    }));

  const onSubmitHandler = () => {
    let isValidItemObject = false;

    if (item.name && item.type) {
      isValidItemObject = true;
    }

    if (isValidItemObject) {
      createItem(item)
        .then((res) => {
          console.log("Item created successfully", res);
          getItems();
          toggleIsActive();
        })
        .catch((err) => console.error(err));
    } else {
      alert("Name and type are required fields");
    }
  };

  return (
    <React.Fragment>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box is-flex-direction-column is-justify-content-center">
            <div className="block">
              <div className="field">
                <label className="label">Name*</label>
                <div className="control is-flex-direction-column is-justify-content-center">
                  <input
                    className="input is-fullwidth"
                    type="text"
                    placeholder="Product / Item name"
                    name="name"
                    onChange={onChangeHandler}
                  ></input>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="field">
                <label className="label">Type*</label>
                <div className="control">
                  <input
                    className="input is-fullwidth"
                    type="text"
                    placeholder="Product / Item cathegory"
                    name="type"
                    onChange={onChangeHandler}
                  ></input>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input
                    className="input is-fullwidth"
                    type="number"
                    placeholder="How many?"
                    name="size"
                    onChange={onChangeHandler}
                  ></input>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="field">
                <label className="label">Unit price</label>
                <div className="control">
                  <input
                    className="input is-fullwidth"
                    type="number"
                    placeholder="How much?"
                    name="price"
                    onChange={onChangeHandler}
                  ></input>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="field is-flex is-align-items-center">
                <label className="label m-0">Available</label>
                <input
                  className="ml-1"
                  type="checkbox"
                  name="available"
                  onChange={checkboxChangeHandler}
                ></input>
              </div>
            </div>
            <button
              className="button is-fullwidth is-primary"
              onClick={onSubmitHandler}
            >
              Create item
            </button>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={toggleIsActive}
        ></button>
      </div>
    </React.Fragment>
  );
}

export default ItemModal;
