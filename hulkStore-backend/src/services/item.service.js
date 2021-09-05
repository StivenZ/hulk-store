import Item from '../database/models/Item';

async function listOne (req) {
    try {
        const item = await Item.find({ name: req.name });
        return item;
    } catch (e) {
        throw new Error('There has been an error finding an item', e);
    }
}

async function listAll () {

    try {
        const allItems = await Item.find({});
        return allItems;
    } catch (e) {
        throw new Error('There has been an error finding all items', e);
    }
}

async function create (items) {
    // Here it's suposed to create every new item, not just one.
    // Check if this also works for editing
    try {
        const newItem = await Item.create(items);
        return newItem;
    } catch (e) {
        throw new Error('Could not create Item: ', e);
    }

}

async function deleteItems (items) {
    try {
        Item.deleteMany(items);
    } catch (e) {
        throw new Error('Could not delete items: ', e);
    }
}

async function sellItem (item, lot) {
    // Remove a unit from a specific item collection
    // before: size: 4; after: size: 4
    if (item.size > lot) {
        item.size = item.size - lot;
    } else {
        throw new Error('Not enough items');
    }
    try {
        const updatedItem = await Item.updateOne(item);
        return updatedItem;
    } catch (e) {
        throw new Error('Could not update item: ', e);
    }
}

export {
    listOne,
    listAll,
    create,
    deleteItems,
    updateOne,
    sellItem
};