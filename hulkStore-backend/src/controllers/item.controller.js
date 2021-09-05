import * as services from "./../services/item.service.js";

export const getItems = async (req, res) => {
  const items = await services.listAll();
  res.send(items);
};

export const createItem = async ({ body }, res) => {
  const newItem = await services.create(body);
  res.send(newItem);
};

export const updateItem = async ({ body, params }, res) => {
  const { id } = params;
  const updatedItem = await services.updatedItem(id, body);
  res.send(updatedItem);
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  const deleted = services.deleteItems(id);
  res.send(deleted);
};
