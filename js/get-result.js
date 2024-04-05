const recipeContainer = document.querySelector('.js-recipe-results');
let checkedIngridients = JSON.parse(localStorage.getItem('toggledButtons'));
console.log(checkedIngridients.length);

class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  displayRecipe() {
    console.log(`Recipe: ${this.name}`);
    console.log('Ingredients:');
    this.ingredients.forEach((ingredient, index) => {
      console.log(`${index + 1}. ${ingredient}`);
    });
    console.log('Instructions:');
    this.instructions.forEach((instruction, index) => {
      console.log(`${index + 1}. ${instruction}`);
    });
  }
}

const vegetableStirFry = new Recipe(
  'Vegetable Stir-Fry',
  ['Onion', 'Bell pepper', 'Carrot', 'Broccoli', 'Garlic', 'Soy sauce', 'Olive oil'],
  [
    'Heat olive oil in a pan over medium heat.',
    'Add chopped onion and minced garlic. Cook until softened.',
    'Add sliced bell pepper, julienned carrot, and broccoli florets. Cook until tender.',
    'Drizzle soy sauce over the vegetables and toss to combine.',
    'Serve hot as a side dish or over rice as a main course.'
  ]
);

const fruitSalad = new Recipe(
  'Fruit Salad',
  ['Apple', 'Banana', 'Orange', 'Strawberry', 'Grape', 'Yogurt', 'Honey'],
  [
    'Wash and chop all the fruits into bite-sized pieces.',
    'In a bowl, mix the chopped fruits with yogurt.',
    'If desired, drizzle honey over the fruit salad for added sweetness.',
    'Serve chilled as a refreshing snack or dessert.'
  ]
);
