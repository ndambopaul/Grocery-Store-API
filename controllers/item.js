const Item = require("../models/item");


const getItems = async(req, res) => {
    const items =  await Item.find({});
    res.send({"count": items.length, "items": items}).status(200)
};


const getItemById = async(req, res) => {
    const { id } = req.params

    try {
        const item = await Item.findById({ id })
        if(!item) return res.status(404).send({"error": `Item with id: ${id} not found!!`})
        res.send(item).status(200)
        
    } catch (error) {
        console.log(error.message);
        return res.send({"error": error.message}).status(400)
    }
}

const createItem = async(req, res) => {
    const item = await Item.create(req.body);
    if(!item) return res.status(400).send({"message": "Item create failed!!"})
    res.send(item).status(201);
};

const createManyItems = async(req, res) => {
    const items = await Item.insertMany(req.body)
    if(!items) return res.status(400).send({"error": "Items could not be created!!"})
    return res.send(items).status(201);
}

const updateItem = async(req, res) => {
    const { body, params: { id } } = req

    try {
        const item = await Item.findByIdAndUpdate(id, {...body}, {new: true})

        if(!item) return res.status(404).send({"message": `Item with id: ${id} not found!!`})

        return res.send(item).status(201);
        
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": error.message})
    }
};

const deleteItem = async(req, res) => {
    const { id } = req.params;

    try{
        const item = await Item.findByIdAndDelete({ id })
        if(!item) return res.status(404).send({"message": `Item with Id: ${id} not found!!`})
        res.send({"success": `Item with id: ${id} deleted successfully!!`})
    } catch(error) {
        console.log(error.message);
        return res.status(400).send({"error": error.message})
    }
}

module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    createManyItems
}