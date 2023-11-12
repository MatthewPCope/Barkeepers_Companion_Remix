const Cocktail = require('../models/cocktail.model.jsx');

module.exports = {
    getAllCocktails: (req, res) => {
        Cocktail.find({})
            .then((allCocktails) => res.json(allCocktails))
            .catch((err) => console.log(err));
    },
        
    getOneCocktail: (req, res) => {
        Cocktail.findOne({ _id: req.params.id})
            .then((oneCocktail) => res.json(oneCocktail))
            .catch(err => res.json(err));
    },

    createCocktail: (req, res) => {
        Cocktail.create(req.body)
        .then((newCocktail) => res.json(newCocktail))
        .catch(err => res.status(400).json(err)
        );
    },

    updateCocktail: (req, res) => {
        Cocktail.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then((updatedCocktail) => res.json(updatedCocktail))
            .catch(err => res.status(400).json(err))
        },

    deleteCocktail: (req, res) => {
        Cocktail.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    },

}

