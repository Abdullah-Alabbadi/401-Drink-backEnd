const superagent = require('superagent');



const drinkModel = require('../models/getDrink.model');


const getDrink = (req, res) => {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;

    superagent.get(url).then(data => {

        const organizedData = data.body.map(data => new drinkModel(data))
        res.send(organizedData);
    }).catch(error => res.send(error));

};

module.exports = getDrink