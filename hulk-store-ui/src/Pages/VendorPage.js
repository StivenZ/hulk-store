import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Layout from "../components/Layout/Layout";
import ItemCard from "../components/Item/ItemCard";
import { getItems } from "../services/client";
import Navbar from "./../components/Navbar/Navbar";

function VendorPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);
  return (
    <>
      <Navbar />
      <Layout>
        <div>
          <SearchBar />
          <div className="box">
            <div className="columns mt-5 is-8 is-variable is-flex-wrap-wrap">
              {items.map((item, index) => (
                <ItemCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default VendorPage;
