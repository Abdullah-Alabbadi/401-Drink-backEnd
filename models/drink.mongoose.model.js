const mongoose = require("mongoose");

const Drink = new mongoose.Schema({

    name: String,
    img: String,
    dDrink: [{ name: String }],
    id: {
        type: String,
        unique: true,

    }

});

const drinkModelMonogoose = mongoose.model('drink', Drink);


module.exports = drinkModelMonogoose;