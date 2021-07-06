class FilteredData {
    constructor(data) {

        this.name = data.name;
        this.img = data.img

    }


}

class DrinkModel {

    constructor(data) {

        this.name = data.name;
        this.img = data.img
        const FilteredDrink = data.dDrink.map(data => new FilteredData(date));

        this.dDrink = FilteredDrink;

        this.id = data["_id"]
    }


}

module.exports = DrinkModel;