const CocktailController = require('../controllers/cocktail.controller.jsx')

module.exports = (app) => {
    app.post('/api/cocktail', CocktailController.createCocktail);
    app.get('/api/cocktail', CocktailController.getAllCocktails);
    app.get('/api/cocktail/:id', CocktailController.getOneCocktail)
    app.put("/api/cocktail/:id", CocktailController.updateCocktail);
    app.delete("/api/cocktail/:id", CocktailController.deleteCocktail);
}