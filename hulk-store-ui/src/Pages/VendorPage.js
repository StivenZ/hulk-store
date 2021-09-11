import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Layout from "../components/Layout/Layout";
import ItemCard from "../components/Item/ItemCard";
import { getItems } from "../services/client";
import Navbar from "./../components/Navbar/Navbar";

function VendorPage() {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState("");

  function handleInputChange(value) {
    setShowItems(value);
  }

  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);

  const filteredItems = items.filter((item) => {
    return item.name.includes(showItems);
  });
  console.log(filteredItems);

  return (
    <>
      <Navbar />
      <Layout>
        <div>
          <SearchBar handleInput={handleInputChange} itemToShow={showItems} />
          <div className="box">
            <div className="columns mt-5 is-8 is-variable is-flex-wrap-wrap">
              {filteredItems.map((item, index) => {
                return <ItemCard key={index} data={item} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default VendorPage;
