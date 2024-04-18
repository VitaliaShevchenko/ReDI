const recipeContainer = document.querySelector(".js-recipe-results");
let checkedIngredients = JSON.parse(localStorage.getItem("toggledButtons"));
const randomNumber = Math.floor(Math.random() * 103);

import {recipes} from "./data/recipes.js";
let displayedRecipes;

function getRandomRecipe(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

recipes.forEach(recipe => {
  displayedRecipes = 0;
  // Check if all ingredients from checkedIngredients are included in the current recipe
  if (recipe.checkIngredientsMatch(checkedIngredients)) {
    recipeContainer.innerHTML = `<p class="recipe-name">${recipe.name}</p><br><p class="recipe-ingridients">${recipe.ingredients}</p><br><p class="recipe-instructions">${recipe.instructions}</p>`;
    displayedRecipes++;
    console.log(displayedRecipes);
  } else {
    console.log(`${recipe.name}: No`);
  }

  if (displayedRecipes == 1) {
    return;
  }
});