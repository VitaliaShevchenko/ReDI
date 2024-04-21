const recipeContainer = document.querySelector(".js-recipe-results");
const recipeTitle = document.querySelector(".js-recipe-title");
const recipeIngridients = document.querySelector(".js-recipe-ingridients");
const recipeInstructions = document.querySelector(".js-recipe-instructions")
let checkedIngredients = JSON.parse(localStorage.getItem("toggledButtons"));
import {recipes} from "./data/recipes.js";
const randomRecipeIndex = Math.floor(Math.random() * recipes.length - 1);

recipes.forEach(recipe => {
  // Check if all ingredients from checkedIngredients are included in the current recipe
  if (recipe.checkIngredientsMatch(checkedIngredients)) {
    const ingrArr = recipe.ingredients;
    recipeTitle.textContent = recipe.name;
    for(let i = 0; i < ingrArr.length; i++) {
      recipeIngridients.textContent += ingrArr[i] + ", ";
    }
    recipeInstructions.textContent = recipe.instructions;
  } else {
    //need code to display random recipe
  }
});

