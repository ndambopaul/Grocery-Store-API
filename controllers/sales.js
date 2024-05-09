const Sale = require("../models/sales");
const Item = require("../models/item");


const getSales = async(req, res) => {
    const sales =  await Sale.find({});
    res.send({"count": sales.length, "sales": sales}).status(200)
};


const getSaleById = async(req, res) => {
    const { id } = req.params

    try {
        const sale = await Sale.findById({ id })
        if(!sale) return res.status(404).send({"error": `Sale with id: ${id} not found!!`})
        res.send(sale).status(200)
        
    } catch (error) {
        console.log(error.message);
        return res.send({"error": error.message}).status(400)
    }
}

const createSale = async(req, res) => {
    const { item_id, quantity } = req.body

    try {
        const item = await Item.findById({ "_id": item_id });
        if(!item) return res.status(400).send({"message": `No item with id: ${item_id} found`});

        if(quantity > item.quantity) return res.status(400).send({error: `You can only sell: ${item.quantity} ${item.name}s or less`})

        let sale = new Sale({
            item: item.name,
            quantity: quantity,
            total_cost: item.price * quantity
        });
        await sale.save();
        if(!sale) return res.status(400).send({"message": "Sale create failed!!"})

        item.quantity -= quantity
        await item.save()
        
        res.send(sale).status(201);
        
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": error.message})
    }
}

const updateSale = async(req, res) => {
    const { body, params: { id } } = req

    try {
        const sale = await Sale.findByIdAndUpdate(id, {...body}, {new: true})

        if(!sale) return res.status(404).send({"message": `Sale with id: ${id} not found!!`})

        return res.send(sale).status(201);
        
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({"error": error.message})
    }
};

const deleteSale = async(req, res) => {
    const { id } = req.params;

    try{
        const sale = await Sale.findByIdAndDelete({ id })
        if(!sale) return res.status(404).send({"message": `Sale with Id: ${id} not found!!`})
        res.send({"success": `Sale with id: ${id} deleted successfully!!`})
    } catch(error) {
        console.log(error.message);
        return res.status(400).send({"error": error.message})
    }
}

module.exports = {
    getSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
}