'use strict'
const express = require('express')
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();

const app = express()

cont PORT = process.env.${ PORT };

app.use(cors());
app.use(express.json());

// controller
const getdirnk = require('./controllers/getDrink.controller');
const dirnk = require('./controllers/drink.crud.controller');


//API
app.get('/', (req, res) => {
    res.send('All is working');

});

app.get('/get-drink', getdrink);

//add new fav drink
app.post('favorite', drink.addFavDrink);

//get new fav drink
app.get('/favorite', drink.getFavDrink);

//delete fav drink
app.delete('/favorite/id', drink.deleteFavDrink);

//update fav drink

app.put('/favorite/id', drink.updateFavDrink);

app.listen(PORT, () => {

    console.log('server start on ${PORT}');

});