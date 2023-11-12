const mongoose = require("mongoose");
const CocktailSchema = new mongoose.Schema(
    
    {
    name: { type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"] },
    ingredients: { type: String,
        required: [true, "Ingredients are required"],
        minlength: [3, "Ingredients must be at least 3 characters long"]},
    technique: { type: String,
        required: [true, "Technique is required"],
        minlength: [3, "Technique must be at least 3 characters long"]},
    riffName: { type: String },
    riffIngredients: { type: String},
    riffTechnique: { type: String},    
    userId:{type: String}
    }, 
    { timestamps: true }
);



const Cocktail = mongoose.model("Cocktail", CocktailSchema);

module.exports = Cocktail;

