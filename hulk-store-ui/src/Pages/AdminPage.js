import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import SearchPanel from "../components/Admin/SearchPanel";
import ControlPanel from "../components/Admin/ControlPanel";
import { getItems } from "../services/client";
import ItemModal from "./../components/modals/ItemModal";
import Navbar from "./../components/Navbar/Navbar";

function AdminPage() {
  const [showAddItemPanel, setShowItemPanel] = useState(false);
  const [items, setItems] = useState([]);

  const toggleAddItem = () => setShowItemPanel((state) => !state);
  const fetchItems = () => {
    getItems().then((res) => setItems(res));
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Layout>
        <SearchPanel />
        <button class="button ml-6 is-primary" onClick={toggleAddItem}>
          Add item
        </button>
        <ItemModal
          isActive={showAddItemPanel}
          toggleIsActive={toggleAddItem}
          getItems={fetchItems}
        />
        <ControlPanel items={items} />
      </Layout>
    </React.Fragment>
  );
}

export default AdminPage;
