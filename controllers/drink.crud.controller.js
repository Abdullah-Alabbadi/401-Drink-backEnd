const mongoose = require("mongoose");
const drinkModelMonogoose = require('../models/drink.mongoose.model');

const DB = process.env.DATABASE_URL;


mongoose.connect(`${DB}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true
});

cont addFavDrink = (req, res) => {
    const { name, dDrink, img, id } = req.body;

    drinkModelMonogoose.find({ id: id }, (error, drink) => {
        if (drink.length > 0)

            res.send('the drink is already in the fav list');

        else {

            const newfavDrink = new drinkModelMonogoose({

                name: name,
                dDrink: dDrink,
                img: img,
                id: id

            })
            newfavDrink.save();
            res.send(newfavDrink);

        }
    })
};


const getFavDrink = (req, res) => {

    drinkModelMonogoose.find({}, (error, drink) => {
        res.send(characters);

    })

}


const deleteFavDrink = (req, res) => {

    const id = req.parms.id;
    drinkModelMonogoose.findOneAndRemove({ id: id }, (error, deletedDrink) => {
        res.send(`the drink has been deleted ${deletedDrink} `);

    })

}

const updateFavDrink = (req, res) => {

    const id = req.params.id;
    const { name, img } = req.body;

    drinkModelMonogoose.find({ id: id }, (error, favDrink) => {
        favDrink[0].name = name;
        favDrink[0].img = img;
        favDrink[0].save();
        res.send(favDrink[0]);
    })

}

module.export = { addFavDrink, getFavDrink, deleteFavDrink, updateFavDrink };