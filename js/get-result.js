const recipeContainer = document.querySelector(".js-recipe-results");
let checkedIngredients = JSON.parse(localStorage.getItem("toggledButtons"));

class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  checkIngredientsMatch(checkedIngredients) {
    // Check if every ingredient in checkedIngredients is included in this.ingredients
    return this.ingredients.every(ingredient => checkedIngredients.includes(ingredient));
  }
}



const recipes = [
  new Recipe(
    "Vegetable Stir-Fry",
    ["Onion", "Carrot", "Bell pepper", "Mushroom", "Garlic", "Soy sauce"],
    "Stir-fry sliced onion, carrot, bell pepper, and mushroom with minced garlic. Add soy sauce to taste."
  ),
  new Recipe(
    "Tomato and Mozzarella Salad",
    ["Tomato", "Lettuce", "Basil", "Olive oil", "Mozzarella cheese"],
    "Slice tomato and mozzarella cheese.", "Arrange on a plate with lettuce leaves. Drizzle with olive oil and garnish with basil leaves."
  ),
  new Recipe(
    "Grilled Chicken Breast",
    ["Chicken breast", "Olive oil", "Lemon", "Garlic", "Rosemary"],
    "Marinate chicken breast in olive oil, lemon juice, minced garlic, and chopped rosemary. Grill until cooked through."
  ),
  new Recipe(
    "Pasta Primavera",
    ["Pasta", "Bell pepper", "Zucchini", "Tomato", "Onion", "Garlic", "Olive oil"],
    "Cook pasta according to package instructions. Sauté sliced bell pepper, zucchini, tomato, and onion in olive oil with minced garlic. Toss with cooked pasta."
  ),
  new Recipe(
    "Beef Steak with Mushroom Sauce",
    ["Beef steak", "Mushroom", "Garlic", "Butter", "Red wine", "Thyme"],
    "Season beef steak with salt and pepper. Sear in a hot pan until cooked to desired doneness. In the same pan, sauté sliced mushrooms with minced garlic, butter, red wine, and thyme to make a sauce."
  ),
  new Recipe(
    "Spinach and Feta Stuffed Bell Peppers",
    ["Bell pepper", "Spinach", "Feta cheese", "Onion", "Garlic"],
    "Hollow out bell peppers and stuff with a mixture of cooked spinach, crumbled feta cheese, diced onion, and minced garlic. Bake until peppers are tender."
  ),
  new Recipe(
    "Salmon Fillet with Lemon-Dill Sauce",
    ["Salmon fillet", "Lemon", "Dill", "Olive oil", "Garlic"],
    "Season salmon fillet with salt, pepper, and minced garlic. Squeeze lemon juice over the top and sprinkle with chopped dill. Bake or grill until cooked through."
  ),
  new Recipe(
    "Pineapple Chicken Skewers",
    ["Chicken breast", "Pineapple", "Bell pepper", "Onion", "Soy sauce", "Honey"],
    "Cut chicken breast and pineapple into chunks. Thread onto skewers with sliced bell pepper and onion. Grill or broil, brushing with a mixture of soy sauce and honey."
  ),
  new Recipe(
    "Creamy Mushroom Risotto",
    ["Arborio rice", "Mushroom", "Onion", "Garlic", "White wine", "Parmesan cheese", "Butter"],
    "Sauté sliced mushrooms, diced onion, and minced garlic in butter. Add Arborio rice and cook until translucent. Deglaze with white wine. Gradually add chicken broth, stirring until absorbed. Finish with grated Parmesan cheese."
  ),
  new Recipe(
    "Caprese Salad",
    ["Tomato", "Basil", "Mozzarella cheese", "Balsamic glaze", "Olive oil"],
    "Slice tomato and mozzarella cheese. Arrange on a plate with basil leaves. Drizzle with balsamic glaze and olive oil."
  ),
  new Recipe(
    "Stuffed Zucchini Boats",
    ["Zucchini", "Ground beef", "Onion", "Tomato sauce", "Garlic", "Parmesan cheese"],
    "Cut zucchini in half lengthwise and scoop out the center. Brown ground beef with diced onion and minced garlic. Mix with tomato sauce and spoon into zucchini halves. Top with grated Parmesan cheese and bake until zucchini is tender."
  ),
  new Recipe(
    "Broccoli Cheddar Soup",
    ["Broccoli", "Onion", "Garlic", "Chicken broth", "Cheddar cheese", "Heavy cream"],
    "Sauté diced onion and minced garlic in butter. Add chopped broccoli and chicken broth. Simmer until broccoli is tender. Blend until smooth, then stir in shredded cheddar cheese and heavy cream."
  ),
  new Recipe(
    "Cucumber and Tomato Salad",
    ["Cucumber", "Tomato", "Red onion", "Olive oil", "Red wine vinegar", "Dill"],
    "Slice cucumber, tomato, and red onion. Toss with olive oil, red wine vinegar, and chopped dill. Season with salt and pepper."
  ),
  new Recipe(
    "Pork Chops with Apple Compote",
    ["Pork chops", "Apple", "Onion", "Brown sugar", "Cinnamon"],
    "Sear pork chops until golden brown. In the same pan, sauté sliced apples and onions with brown sugar and cinnamon until soft. Serve pork chops topped with apple compote."
  ),
  new Recipe(
    "Garlic Butter Shrimp",
    ["Shrimp", "Garlic", "Butter", "Lemon juice", "Parsley"],
    "Sauté shrimp in garlic-infused butter until pink and opaque. Finish with a squeeze of lemon juice and chopped parsley."
  ),
  new Recipe(
    "Stuffed Mushrooms",
    ["Mushroom", "Cream cheese", "Garlic", "Parmesan cheese", "Bread crumbs"],
    "Remove stems from mushrooms and fill with a mixture of cream cheese, minced garlic, grated Parmesan cheese, and bread crumbs. Bake until mushrooms are tender and filling is golden brown."
  ),
  new Recipe(
    "Carrot Ginger Soup",
    ["Carrot", "Onion", "Garlic", "Ginger", "Coconut milk", "Vegetable broth"],
    "Sauté diced onion, minced garlic, and grated ginger in olive oil. Add sliced carrots and vegetable broth. Simmer until carrots are soft. Blend until smooth, then stir in coconut milk."
  ),
  new Recipe(
    "Baked Eggplant Parmesan",
    ["Eggplant", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Bread crumbs"],
    "Slice eggplant and layer in a baking dish with tomato sauce, shredded mozzarella cheese, and grated Parmesan cheese. Repeat layers and top with bread crumbs. Bake until golden and bubbly."
  ),
  new Recipe(
    "Lemon Garlic Butter Green Beans",
    ["Green beans", "Lemon", "Garlic", "Butter", "Almonds"],
    "Blanch green beans until tender-crisp. Sauté in a mixture of melted butter, minced garlic, and lemon zest. Garnish with toasted almonds."
  ),
  new Recipe(
    "Beetroot Salad with Goat Cheese",
    ["Beetroot", "Goat cheese", "Walnuts", "Arugula", "Balsamic vinegar"],
    "Roast or boil beetroot until tender. Slice and arrange on a bed of arugula. Crumble goat cheese and sprinkle with chopped walnuts. Drizzle with balsamic vinegar."
  ),
  new Recipe(
    "Cauliflower Rice Stir-Fry",
    ["Cauliflower", "Bell pepper", "Onion", "Carrot", "Soy sauce", "Sesame oil"],
    "Pulse cauliflower florets in a food processor until rice-like. Stir-fry with sliced bell pepper, onion, and carrot in a mixture of soy sauce and sesame oil."
  ),
  new Recipe(
    "Pumpkin Soup with Coconut Milk",
    ["Pumpkin", "Onion", "Garlic", "Coconut milk", "Curry powder"],
    "Sauté diced onion and minced garlic in coconut oil. Add cubed pumpkin and curry powder. Simmer until pumpkin is soft. Blend until smooth, then stir in coconut milk."
  ),
  new Recipe(
    "Stuffed Bell Peppers with Quinoa",
    ["Bell pepper", "Quinoa", "Black beans", "Corn", "Tomato", "Cilantro"],
    "Cook quinoa according to package instructions. Mix with black beans, corn, diced tomato, and chopped cilantro. Stuff into halved bell peppers and bake until peppers are tender."
  ),
  new Recipe(
    "Spaghetti Aglio e Olio",
    ["Spaghetti", "Garlic", "Olive oil", "Red pepper flakes", "Parsley"],
    "Cook spaghetti according to package instructions. Sauté minced garlic in olive oil with red pepper flakes until golden. Toss with cooked spaghetti and chopped parsley."
  ),
  new Recipe(
    "Beer-Battered Fish and Chips",
    ["Cod fillet", "Potato", "Beer", "Flour", "Baking powder"],
    "Cut cod fillet into pieces. Dredge in a mixture of flour, baking powder, and beer batter. Fry until golden brown and serve with homemade potato chips."
  )
];

recipes.forEach(recipe => {
  // Check if all ingredients from checkedIngredients are included in the current recipe
  if (recipe.checkIngredientsMatch(checkedIngredients)) {
    console.log(`${recipe.name}: Yes`);
  } else {
    console.log(`${recipe.name}: No`);
  }
});
