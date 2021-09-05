import Item from "../models/Item.js";

async function listAll() {
  try {
    const allItems = await Item.find();
    return allItems;
  } catch (e) {
    throw new Error("There has been an error finding all items", e);
  }
}

async function create(items) {
  // Here it's suposed to create every new item, not just one.
  // Check if this also works for editing
  try {
    const newItem = await Item.create(items);
    return newItem;
  } catch (e) {
    throw new Error("Could not create Item: ", e);
  }
}

async function updatedItem(id, { name, price, size, available, type }) {
  const updated = await Item.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        price,
        size,
        available,
        type,
      },
    }
  );
  return updated;
}

async function deleteItems(id) {
  try {
    const deletedItem = await Item.findOneAndRemove(id);
    return deletedItem;
  } catch (e) {
    throw new Error("Could not delete items: ", e);
  }
}

export { updatedItem, listAll, create, deleteItems };
