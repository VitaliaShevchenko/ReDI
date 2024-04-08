const recipeContainer = document.querySelector(".js-recipe-results");
let checkedIngredients = JSON.parse(localStorage.getItem("toggledButtons"));
const randomNumber = Math.floor(Math.random() * 103);

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
    "Simple Tomato Salad",
    ["Tomato", "Basil", "Olive oil"],
    "Slice tomatoes and arrange on a plate. Drizzle with olive oil and garnish with fresh basil leaves."
  ),
  new Recipe(
    "Basic Vegetable Stir-Fry",
    ["Onion", "Carrot", "Bell pepper", "Mushroom", "Garlic", "Soy sause"],
    "Sauté sliced onion, carrot, bell pepper, and mushroom with minced garlic. Add soy sauce to taste."
  ),
  new Recipe(
    "Classic Grilled Cheese Sandwich",
    ["Bread", "Cheddar cheese", "Butter"],
    "Spread butter on bread slices. Place cheddar cheese between slices and grill until golden brown."
  ),
  new Recipe(
    "Easy Caprese Pasta",
    ["Pasta", "Tomato", "Basil", "Mozzarella cheese", "Olive oil"],
    "Cook pasta according to package instructions. Toss with diced tomatoes, fresh basil, mozzarella cheese, and olive oil."
  ),
  new Recipe(
    "Roasted Garlic Potatoes",
    ["Potato", "Garlic", "Olive oil", "Rosemary", "Red wine", "Thyme"],
    "Cut potatoes into wedges, toss with minced garlic, olive oil, and rosemary. Roast until golden brown."
  ),
  new Recipe(
    "Simple Greek Salad",
    ["Tomato", "Cucumber", "Olive oil", "Onion", "Feta cheese"],
    "Chop tomatoes, cucumbers, and onions. Toss with olive oil and top with crumbled feta cheese."
  ),
  new Recipe(
    "Vegetable Omelette",
    ["Egg", "Bell pepper", "Onion", "Tomato", "Spinach"],
    "Beat eggs and pour on a hot pan. Add chopped bell pepper, onion, tomato, and spinach. Cook until set."
  ),
  new Recipe(
    "Homemade Marinara Sauce",
    ["Tomato", "Onion", "Garlic", "Olive oil", "Basil"],
    "Instructions: Sauté minced garlic and diced onions in olive oil. Add diced tomatoes and simmer until thickened. Stir in chopped basil."
  ),
  new Recipe(
    "Stuffed Bell Peppers",
    ["Bell pepper", "Ground beef", "Rice", "Tomato sauce", "Onion", "Garlic"],
    "Cook rice. Brown ground beef with diced onion and minced garlic. Mix with cooked rice and tomato sauce. Stuff into bell peppers and bake until tender."
  ),
  new Recipe(
    "Caprese Salad",
    ["Tomato", "Basil", "Mozzarella cheese", "Balsamic glaze", "Olive oil"],
    "Slice tomato and mozzarella cheese. Arrange on a plate with basil leaves. Drizzle with balsamic glaze and olive oil."
  ),
  new Recipe(
    "Garlic Butter Pasta",
    ["Pasta", "Garlic", "Butter", "Parmesan cheese"],
    "Cook pasta according to package instructions. Sauté minced garlic in butter, toss with cooked pasta and grated Parmesan cheese."
  ),
  new Recipe(
    "Simple Roasted Vegetables",
    ["Potato", "Carrot", "Onion", "Zucchini", "Olive oil", "Rosemary"],
    "Cut vegetables into chunks, toss with olive oil and rosemary. Roast until tender."
  ),
  new Recipe(
    "Basic Chicken Stir-Fry",
    ["Checken breast", "Bell pepper", "Onion", "Soy sauce", "Garlic"],
    "Slice chicken breast and stir-fry with sliced bell pepper, onion, and minced garlic. Add soy sauce to taste."
  ),
  new Recipe(
    "Cheesy Garlic Bread",
    ["Bread", "Butter", "Garlic", "Mozzarella cheese", "Parsley"],
    "Spread butter mixed with minced garlic on bread slices. Top with grated mozzarella cheese and parsley. Bake until cheese melts."
  ),
  new Recipe(
    "Creamy Tomato Soup",
    ["Tomato", "Garlic", "Onion", "Olive oil", "Cream"],
    "Sauté diced onions and minced garlic in olive oil. Add diced tomatoes and simmer until soft. Blend until smooth and stir in cream."
  ),
  new Recipe(
    "Simple Potato Salad",
    ["Potato", "Onion", "Olive oil", "Mustard", "Vinegar"],
    "Boil potatoes until tender, then cool and chop. Mix with diced onions, olive oil, mustard, and vinegar."
  ),
  new Recipe(
    "Easy Garlic Shrimp",
    ["Shrimp", "Butter", "Garlic", "Lemon juice", "Parsley"],
    "Sauté shrimp in garlic-infused butter. Finish with a squeeze of lemon juice and chopped parsley."
  ),
  new Recipe(
    "Baked Chicken Drumsticks",
    ["Chichen drumsticks", "olive oil", "Gralic", "Paprika"],
    "Rub chicken drumsticks with olive oil, minced garlic, and paprika. Bake until golden and cooked through."
  ),
  new Recipe(
    "Simple Vegetable Soup",
    ["Potato", "Carrot", "Onion", "Celery", "Garlic", "Vegetable broth"],
    "Sauté diced onions and minced garlic. Add chopped carrots, potatoes, celery, and vegetable broth. Simmer until vegetables are tender."
  ),
  new Recipe(
    "Beetroot Salad with Goat Cheese",
    ["Beetroot", "Goat cheese", "Walnuts", "Rucola", "Balsamic vinegar"],
    "Roast or boil beetroot until tender. Slice and arrange on a bed of rucola. Crumble goat cheese and sprinkle with chopped walnuts. Drizzle with balsamic vinegar."
  ),
  new Recipe(
    "Baked Zucchini Fries",
    ["Zucchini", "Bread crumbs", "Parmesan cheese"],
    "Cut zucchini into fries, coat with a mixture of bread crumbs and grated Parmesan cheese. Bake until crispy."
  ),
  new Recipe(
    "Stir-Fried Broccoli with Garlic",
    ["Broccoli", "Olive oil", "Garlic", "Soy sauce"],
    "Stir-fry broccoli florets with minced garlic in olive oil. Add soy sauce to taste."
  ),
  new Recipe(
    "Creamy Spinach Pasta",
    ["Pasta", "Spinach", "Garlic", "Cream"],
    "Cook pasta according to package instructions. Sauté minced garlic and spinach in cream. Toss with cooked pasta."
  ),
  new Recipe(
    "Spaghetti Aglio e Olio",
    ["Spaghetti", "Garlic", "Olive oil", "Red pepper flakes", "Parsley"],
    "Cook spaghetti according to package instructions. Sauté minced garlic in olive oil with red pepper flakes until golden. Toss with cooked spaghetti and chopped parsley."
  ),
  new Recipe(
    "Herb-Roasted Chicken",
    ["Chicken breasts", "Olive oil", "Garlic", "Rosemary", "Thyme"],
    "Cut the chicken breast into a pieces. Rub them with olive oil, minced garlic, and chopped herbs. Roast until golden and cooked through."
  ),
  new Recipe(
    "Easy Baked Haddock Fillet",
    ["Haddock fillet", "Lemon", "Garlic", "Olive oil", "Parsley"],
    "Place fish fillets on a baking sheet. Drizzle with olive oil, minced garlic, and lemon juice. Bake until fish flakes easily."
  ),
  new Recipe(
    "Simple Rice Pilaf",
    ["Rice", "Onion", "Garlic", "Chicken broth"],
    "Sauté diced onions and minced garlic. Add rice and cook until translucent. Gradually add chicken broth, stirring until absorbed."
  ),
  new Recipe(
    "Garlic Butter Green Beans",
    ["Green beans", "Butter", "Garlic", "Lemon", "Almonds"],
    "Blanch green beans until tender-crisp. Sauté in garlic-infused butter with lemon zest. Garnish with toasted almonds."
  ),
  new Recipe(
    "Honey Glazed Carrots",
    ["Carrot", "Honey", "Butter", "Parsley"],
    "Sauté sliced carrots in butter until tender. Drizzle with honey and garnish with chopped parsley."
  ),
  new Recipe(
    "Roasted Beetroot Salad",
    ["Beetroot", "Olive oil", "Balsamic vinegar", "Goat cheese", "Walnuts"],
    "Roast beetroot until tender, then cool, peel, and slice. Arrange on a plate, drizzle with olive oil and balsamic vinegar. Top with crumbled goat cheese and chopped walnuts."
  ),
  new Recipe(
    "Balsamic Roasted Brussels Sprouts",
    ["Brulles sprouts", "Olive oil", "Garlic", "Olive oil", "Balsamic vinegar"],
    "Toss Brussels sprouts with olive oil, minced garlic, and balsamic vinegar. Roast until caramelized."
  ),
  new Recipe(
    "Simple Chicken Salad",
    ["Chicken breast", "Lettuce", "Tomato", "Cucumber", "Olive oil"],
    "Grill or bake chicken breast until cooked through. Slice and serve over a bed of lettuce, tomato, and cucumber. Drizzle with olive oil."
  ),
  new Recipe(
    "Stuffed Mushrooms",
    ["Mushroom", "Cream cheese", "Garlic", "Parmesan cheese", "Bread crumbs"],
    "Remove stems from mushrooms and fill with a mixture of cream cheese, minced garlic, grated Parmesan cheese, and bread crumbs. Bake until mushrooms are tender and filling is golden brown."
  ),
  new Recipe(
    "Creamy Mushroom Pasta",
    ["Pasta", "Mushroom", "Garlic", "Cream", "Parmesan cheese"],
    "Cook pasta according to package instructions. Sauté sliced mushrooms and minced garlic in cream. Toss with cooked pasta and grated Parmesan cheese."
  ),
  new Recipe(
    "Simple Tuna Salad",
    ["Canned tuna", "Lettuce", "Tomato", "Olive oil", "Cucumber"],
    "Drain canned tuna and mix with chopped lettuce, tomato, and cucumber. Drizzle with olive oil."
  ),
  new Recipe(
    "Garlic Parmesan Zucchini",
    ["Zucchini", "Olive oil", "Garlic", "Parmesan cheese"],
    "Slice zucchini and sauté in olive oil with minced garlic until tender. Sprinkle with grated Parmesan cheese."
  ),
  new Recipe(
    "Simple Corn Salad",
    ["Corn", "Olive oil", "Tomato", "Red onion", "Cilantro", "Lime juice"],
    "Mix cooked corn kernels with diced tomatoes, red onions, and chopped cilantro. Dress with olive oil and lime juice."
  ),
  new Recipe(
    "Honey Mustard Glazed Salmon",
    ["Salmon fillet", "Olive oil", "Honey", "Mustard"],
    "Mix honey and mustard to make a glaze. Brush over salmon fillets and bake until cooked through."
  ),
  new Recipe(
    "Creamy Garlic Mashed Potatoes",
    ["Potato", "Garlic", "Butter", "Cream"],
    "Boil potatoes until tender. Mash with minced garlic, butter, and cream until smooth and creamy."
  ),
  new Recipe(
    "Simple Ratatouille",
    ["Eggplant", "Olive oil", "Zucchini", "Tomato", "Onion", "Bell pepper", "Garlic"],
    "Layer sliced vegetables in a baking dish. Drizzle with olive oil and minced garlic. Bake until tender."
  ),
  new Recipe(
    "Cucumber Tomato Salsa",
    ["Cucumber", "Tomato", "Red onion", "Olive oil", "Lime juice", "Cilantro"],
    "Dice cucumber, tomato, and red onion. Toss with olive oil, lime juice, and chopped cilantro."
  ),
  new Recipe(
    "Simple Carrot Soup",
    ["Carrot", "Onion", "Garlic", "Ginger", "Olive oil", "Vegetable broth"],
    "Sauté diced onions, minced garlic, and grated ginger in olive oil. Add sliced carrots and vegetable broth. Simmer until carrots are soft. Blend until smooth."
  ),
  new Recipe(
    "Garlic Parmesan Roasted Asparagus",
    ["Asparagus", "Olive oil", "Garlic", "Parmesan cheese"],
    "Toss asparagus spears with minced garlic, grated Parmesan cheese, and olive oil. Roast until tender-crisp."
  ),
  new Recipe(
    "Simple Eggplant Parmesan",
    ["Eggplant", "Tomato sauce", "Mozzarella cheese", "Parmesan cheese", "Bread crumbs"],
    "Slice eggplant and coat in bread crumbs. Fry until golden brown. Layer in a baking dish with tomato sauce, mozzarella cheese, and grated Parmesan cheese. Bake until bubbly and golden."
  ),
  new Recipe(
    "Creamy Spinach Stuffed Chicken Breast",
    ["Checken breast", "Olive oil", "Garlic", "Spinach", "Cream cheese"],
    "Flatten chicken breast and spread with cream cheese mixed with minced garlic and chopped spinach. Roll up and secure with toothpicks. Sauté in olive oil until cooked through."
  ),
  new Recipe(
    "Cauliflower and Peas Curry",
    ["Cauliflower", "Peas", "Onion", "Garlic", "Ginger", "Tomato", "Coconut Milk", "Cumin", "Coriander", "Turmeric", "Chilli powder", "Vegetable oil", "Salt", "Pepper"],
    "Sauté onion, garlic, and ginger in vegetable oil. Add cauliflower florets and peas, along with diced tomatoes and coconut milk. Simmer until cauliflower is tender. Season with spices, salt, and pepper."
  ),
  new Recipe(
    "Leek and Potato Soup",
    ["Leek", "Potato", "Onion", "Garlic", "Vegetable broth", "Cream", "Butter", "Salt", "Pepper"],
    "Sauté sliced leeks, onions, and minced garlic in butter. Add diced potatoes and vegetable broth. Simmer until potatoes are soft. Blend until smooth, then stir in cream. Season with salt and pepper."
  ),
  new Recipe(
    "Cabbage and Apple Slaw",
    ["Cabbage", "Apple", "Onion", "Lemon juice", "Honey", "Mustard", "Olive oil", "Salt", "Pepper"],
    "Shred cabbage and slice apples thinly. Mix with sliced onions. In a separate bowl, whisk together lemon juice, honey, mustard, olive oil, salt, and pepper. Toss dressing with cabbage mixture until well coated."
  ),
  new Recipe(
    "Artichoke and Spinach Dip",
    ["Artichoke", "Spinach", "Cream cheese", "Sour cream", "Parmesan cheese", "Garlic", "Salt", "Pepper"],
    "Mix chopped artichokes, cooked spinach, cream cheese, sour cream, grated Parmesan cheese, minced garlic, salt, and pepper until well combined. Serve as a dip with crackers or bread."
  ),
  new Recipe(
    "Kale and Quinoa Salad",
    ["Kale", "Quinoa", "Cherry tomatoes", "Cucumber", "Red onion", "Lemon juice", "Olive oil", "Salt", "Pepper"],
    "Cook quinoa according to package instructions. Massage kale with lemon juice and olive oil until softened. Toss kale with cooked quinoa, halved cherry tomatoes, sliced cucumber, and diced red onion. Season with salt and pepper."
  ),
  new Recipe(
    "Swiss Chard and Feta Frittata",
    ["Swiss chard", "Eggs", "Feta cheese", "Onion", "Garlic", "Olive oil", "Salt", "Pepper"],
    "Sauté chopped Swiss chard, onions, and minced garlic in olive oil until wilted. Beat eggs and crumbled feta cheese together. Pour over the Swiss chard mixture in a pan. Cook until set. Season with salt and pepper."
  ),
  new Recipe(
    "Turnip and Carrot Mash",
    ["Turnip", "Carrot", "Butter", "Milk", "Salt", "Pepper"],
    "Peel and chop turnips and carrots. Boil until tender. Drain and mash with butter and milk until smooth. Season with salt and pepper."
  ),
  new Recipe(
    "Kale and Quinoa Salad",
    ["Kale", "Quinoa", "Cherry tomatoes", "Cucumber", "Red onion", "Lemon juice", "Olive oil", "Salt", "Pepper"],
    "Cook quinoa according to package instructions. Massage kale with lemon juice and olive oil until softened. Toss kale with cooked quinoa, halved cherry tomatoes, sliced cucumber, and diced red onion. Season with salt and pepper."
  ),
  new Recipe(
    "Fennel and Orange Salad",
    ["Fennel", "Orange", "Red onion", "Olive oil", "Lemon", "Salt", "Pepper"],
    "Slice fennel thinly and segment oranges. Thinly slice red onions. Toss together with olive oil, lemon juice, salt, and pepper."
  ),
  new Recipe(
    "Parsnip and Potato Hash",
    ["Parship", "Potato", "Onion", "Garlic", "Olive oil", "Salt", "Pepper"],
    "Dice parsnips, potatoes, onions, and garlic. Sauté in olive oil until golden brown and crispy. Season with salt and pepper."
  ),
  new Recipe(
    "Kohlrabi and Apple Slaw",
    ["Kohlrabi", "Apple", "Carrot", "Lemon", "Honey", "Dijon mustard", "Olive oil", "Salt", "Pepper"],
    "Peel and julienne kohlrabi, apple, and carrot. Toss with lemon juice to prevent browning. In a separate bowl, whisk together honey, Dijon mustard, olive oil, salt, and pepper. Toss dressing with slaw until well coated."
  ),
  new Recipe(
    "Apple and Cranberry Crisp",
    ["Apple", "Cranberry", "Flour", "Oats", "Brown sugar", "Butter", "Cinnamon", "Nutmeg", "Salt"],
    "Mix sliced apples and cranberries with a bit of flour, sugar, and spices. Spread in a baking dish. Mix oats, flour, brown sugar, and butter until crumbly. Sprinkle over fruit mixture. Bake until golden and bubbly."
  ),
  new Recipe(
    "Orange Glazed Chicken",
    ["Checken tights", "Orange", "Honey", "Soy sauce", "Garlic", "Ginger", "Olive oil", "Salt", "Pepper"],
    "Marinate chicken thighs in a mixture of orange juice, zest, honey, soy sauce, minced garlic, minced ginger, olive oil, salt, and pepper. Grill or bake until cooked through, basting with marinade."
  ),
  new Recipe(
    "Strawberry Spinach Salad",
    ["Strawberry", "Spinach", "Feta cheese", "Red onion", "Balsamic vinegar", "Honey", "Olive oil", "Salt", "Pepper"],
    "Slice strawberries and thinly slice red onion. Toss with baby spinach leaves and crumbled feta cheese. Dress with a mixture of balsamic vinegar, olive oil, honey, salt, and pepper."
  ),
  new Recipe(
    "Cherry Tomato and Basil Pasta",
    ["Cherry tomato", "Basil", "Garlic", "Pasta", "Parmesan cheese", "Olive oil", "Salt", "Pepper"],
    "Cook pasta according to package instructions. Sauté halved cherry tomatoes and minced garlic in olive oil until tomatoes burst. Toss with cooked pasta, torn basil leaves, grated Parmesan cheese, salt, and pepper."
  ),
  new Recipe(
    "Pear and Blue Cheese Salad",
    ["Pear", "Gorgonzola", "Lettuce", "Rucola", "Walnut", "Balsamic vinegar", "Honey", "Olive oil", "Salt", "Pepper"],
    "Slice pears thinly and toss with greens. Crumble blue cheese over the top and sprinkle with walnuts. Dress with balsamic vinegar, olive oil, honey, salt, and pepper."
  ),
  new Recipe(
    "Grape and Goat Cheese Crostini",
    ["Grape", "Goat cheese", "Bread", "Olive Oil", "Honey", "Thyme", "Salt", "Pepper"],
    "Slice bread and brush with olive oil. Toast until golden brown. Spread with goat cheese, top with halved grapes, drizzle with honey, and sprinkle with fresh thyme, salt, and pepper."
  ),
  new Recipe(
    "Peach and Prosciutto Bruschetta",
    ["Peach", "Basil", "Garlic", "Pasta", "Parmesan cheese", "Olive oil", "Salt", "Pepper"],
    "Cook pasta according to package instructions. Sauté halved cherry tomatoes and minced garlic in olive oil until tomatoes burst. Toss with cooked pasta, torn basil leaves, grated Parmesan cheese, salt, and pepper."
  ),
  new Recipe(
    "Cherry Tomato and Basil Pasta",
    ["Cherry tomato", "Prosciutto", "Bread", "Ricotta cheese", "Honey", "Basil", "Balsamic glaze", "Olive oil", "Salt", "Pepper"],
    "Slice bread(perfectly baguette) and toast until golden brown. Spread with ricotta cheese. Top with thinly sliced peaches and prosciutto. Drizzle with honey and balsamic glaze. Garnish with torn basil leaves, salt, and pepper."
  ),
  new Recipe(
    "Plum and Almond Crumble",
    ["Plum", "Almond", "Flour", "Oats", "Brown sugar", "Butter", "Cinnamon", "Nutmeg", "Salt"],
    "Slice plums and toss with a bit of flour, sugar, and spices. Spread in a baking dish. Mix oats, flour, brown sugar, almonds, and butter until crumbly. Sprinkle over fruit mixture. Bake until golden and bubbly."
  ),
  new Recipe(
    "Blueberry and Lemon Pancakes",
    ["Blueberry", "Flour", "Sugar", "Baking powder", "Salt", "Milk", "Egg", "Lemon", "Butter"],
    "Mix flour, sugar, baking powder, and salt. In a separate bowl, whisk together milk, egg, melted butter, lemon zest, and lemon juice. Combine wet and dry ingredients, then fold in blueberries. Cook on a griddle until golden brown."
  ),
  new Recipe(
    "Kiwi and Banana Smoothie",
    ["Kiwi", "Banana", "Spinach", "Yogurt", "Honey", "Lime", "Ice"],
    "Blend kiwi, banana, spinach, yogurt, honey, lime juice, and ice until smooth."
  ),
  new Recipe(
    "Pineapple Fried Rice",
    ["Pineapple", "Rice", "Egg", "Onion", "Carrot", "Peas", "Soy sauce", "Garlic", "Ginger", "Olive oil", "Salt", "Pepper"],
    "Cook rice according to package instructions. Sauté chopped onion, garlic, and ginger in olive oil. Add diced pineapple, cooked rice, scrambled egg, diced carrots, and peas. Season with soy sauce, salt, and pepper."
  ),
  new Recipe(
    "Mango Salsa",
    ["Mango", "Red onion", "Bell pepper", "Cilantro", "Lime", "Salt", "Pepper"],
    "Dice mango, red onion, and bell pepper. Chop cilantro. Mix together with lime juice, salt, and pepper. Serve as a topping for grilled meats or as a dip with chips."
  ),
  new Recipe(
    "Watermelon and Feta Salad",
    ["Watermelon", "Feta cheese", "Mint", "Balsamic Vinegar", "Olive oil", "Salt", "Pepper"],
    "Cube watermelon and crumble feta cheese. Chop mint leaves. Toss together with balsamic vinegar, olive oil, salt, and pepper."
  ),
  new Recipe(
    "Cantaloupe and Prosciutto Skewers",
    ["Melone", "Prosciutto", "Basil", "Balsamic glaze"],
    "Cube melone and wrap with prosciutto slices. Skewer with fresh basil leaves and drizzle with balsamic glaze."
  ),
  new Recipe(
    "Melon Smoothie",
    ["Melon", "Yogurt", "Honey", "Mint", "Ice"],
    "Blend honeydew, yogurt, honey, mint, and ice until smooth."
  ),
  new Recipe(
    "Papaya and Lime Salad",
    ["Papaya", "Lime", "Chili powder", "Salt"],
    "Cube watermelon and crumble feta cheese. Chop mint leaves. Toss together with balsamic vinegar, olive oil, salt, and pepper."
  ),
  new Recipe(
    "Apricot Glazed Chicken",
    ["Checken breast", "Apricot preserves", "Soy sauce", "Garlic", "Ginger", "Olive oil", "Salt", "Pepper"],
    "Marinate chicken breast in a mixture of apricot preserves, soy sauce, minced garlic, minced ginger, olive oil, salt, and pepper. Grill or bake until cooked through."
  ),
  new Recipe(
    "Grapefruit and Avocado Salad",
    ["Grapefruit", "Avocado", "Rucola", "Red onion", "Pistachio", "Lemon", "Olive oil", "Honey", "Salt", "Pepper"],
    "Segment grapefruit and slice avocado. Toss together with arugula, thinly sliced red onion, and chopped pistachios. Dress with lemon juice, olive oil, honey, salt, and pepper."
  ),
  new Recipe(
    "Passionfruit Sorbet",
    ["Passionfruit", "Sugar", "Lemon"],
    "Combine passionfruit pulp, sugar, water, and lemon juice in a saucepan. Bring to a simmer, then cool. Freeze in an ice cream maker according to manufacturer's instructions."
  ),
  new Recipe(
    "Beef Steak with Smoked Paprika Rub",
    ["Beef steak", "Smoked paprika", "Olive oil", "Salt", "Pepper"],
    "Rub beef steak with smoked paprika, salt, and pepper. Sear in a hot skillet with olive oil until cooked to desired doneness."
  ),
  new Recipe(
    "Pork Chops with Mustard Glaze",
    ["Pork chops", "Mustard seeds", "Honey", "Garlic powder", "Salt", "Pepper"],
    "Mix mustard seeds, honey, and garlic powder. Brush over pork chops. Season with salt and pepper. Grill or bake until cooked through."
  ),
  new Recipe(
    "Trout with Lemon and Herbs",
    ["Trout", "Lemon", "Sage", "Olive oil", "Salt", "Pepper"],
    "Season trout fillet with chopped sage, lemon zest, salt, and pepper. Drizzle with olive oil. Bake until fish flakes easily."
  ),
  new Recipe(
    "Chicken Wings with Garlic and Rosemary",
    ["Checken wings", "Garlic powder", "Rosemary", "Olive oil", "Salt", "Pepper"],
    "Toss chicken wings with garlic powder, chopped rosemary, salt, pepper, and olive oil. Roast until golden and crispy."
  ),
  new Recipe(
    "Cod Fillet with Lemon Butter Sauce",
    ["Cod fillet", "Lemon", "Butter", "Garlic powder", "Salt", "Pepper"],
    "Pan-sear cod fillet until golden brown. Make a sauce by melting butter with lemon juice and garlic powder. Pour over fish."
  ),
  new Recipe(
    "Lamb Chops with Mint Gremolata",
    ["Lamb chops", "Mint", "Lemon", "Garlic powder", "Salt", "Olive oil", "Pepper"],
    "Mix chopped mint, garlic powder, lemon zest, olive oil, salt, and pepper. Rub onto lamb chops. Grill or broil until done."
  ),
  new Recipe(
    "Turkey Breast with Herbed Quark Sauce",
    ["Turkey breast", "Quark", "Sage", "Thyme", "Garlic powder", "Salt", "Pepper"],
    "Mix quark with chopped herbs and garlic powder. Season turkey breast with salt and pepper. Roast until tender. Serve with quark sauce."
  ),
  new Recipe(
    "Pork Belly with Fennel Seed Rub",
    ["Pork belly", "Fennel seeds", "Garlic powder", "Salt", "Pepper"],
    "Crush fennel seeds and mix with garlic powder, salt, and pepper. Rub onto pork belly. Roast until crispy and tender."
  ),
  new Recipe(
    "Beef Tenderloin with Red Wine Sauce",
    ["Beef tenderloin", "Red wine", "Garlic powder", "Thyme", "Butter", "Salt", "Pepper"],
    "Sear beef tenderloin until browned. Deglaze pan with red wine. Add garlic powder and thyme. Simmer until sauce thickens. Serve over beef."
  ),
  new Recipe(
    "Pork Loin with Mustard Crust",
    ["Pork loin", "Mustard seeds", "Garlic powder", "Salt", "Pepper"],
    "Crush mustard seeds and mix with garlic powder, olive oil, salt, and pepper. Rub onto pork loin. Roast until golden and cooked through."
  ),
  new Recipe(
    "Halibut Steak with Lemon Dill Sauce",
    ["Halibut steak", "Lemon", "Dill", "Garlic powder", "Salt", "Pepper", "Olive oil"],
    "Season halibut steak with garlic powder, salt, and pepper. Grill or broil until done. Serve with a sauce made from lemon juice, chopped dill, and olive oil."
  ),
  new Recipe(
    "Veal Cutlet with Sage Butter",
    ["Veal cutlet", "Sage", "Butter", "Garlic powder", "Salt", "Pepper"],
    "Season veal cutlet with garlic powder, salt, and pepper. Sauté in butter with sage leaves until golden and cooked through."
  ),
  new Recipe(
    "Mackerel Fillet with Garlic and Lemon",
    ["Mackerel fillet", "Lemon", "Garlic powder", "Olive oil", "Salt", "Pepper"],
    "Rub mackerel fillet with garlic powder, salt, and pepper. Squeeze lemon juice over the top. Grill or bake until fish flakes easily."
  ),
  new Recipe(
    "Carp with Herbed Butter",
    ["Carp fillet", "Parsley", "Dill", "Garlic powder", "Butter", "Salt", "Pepper"],
    "Mix chopped herbs with garlic powder and softened butter. Spread over carp fillet. Bake until fish is tender."
  ),
  new Recipe(
    "Stuffed Squid with Rice and Herbs",
    ["Squid", "Rice", "Onion", "Parsley", "Olive oil", "Garlic powder", "Salt", "Pepper"],
    "Cook rice with chopped onion and garlic powder. Stuff squid with rice mixture and chopped parsley. Sauté until squid is cooked."
  ),
  new Recipe(
    "Mussels in White Wine Sauce",
    ["Mussels", "White wine", "Parsley", "Butter", "Garlic powder", "Salt", "Pepper"],
    "Steam mussels in white wine with garlic powder, parsley, butter, salt, and pepper until they open. Discard any that do not open."
  ),
  new Recipe(
    "Crab Legs with Garlic Butter",
    ["Crab legs", "Garlic powder", "Butter", "Lemon", "Parsley", "Salt", "Pepper"],
    "Mix mustard seeds, honey, and garlic powder. Brush over pork chops. Season with salt and pepper. Grill or bake until cooked through."
  ),
  new Recipe(
    "Clams Pasta with White Wine Sauce",
    ["Clams", "Pasta", "White wine", "Garlic powder", "Parsley", "Olive oil", "Salt", "Pepper"],
    "Cook pasta according to package instructions. Sauté minced garlic in olive oil. Add clams and white wine. Cover and steam until clams open. Toss with cooked pasta, chopped parsley, salt, and pepper."
  ),
  new Recipe(
    "Cherry Fig Salad with Cottage Cheese Dressing",
    ["Cherry", "Fig", "Cottage cheese", "Honey", "Lemon juice"],
    "Slice cherries and figs. Mix cottage cheese with honey and lemon juice to make a dressing. Toss fruits with dressing and serve."
  ),
  new Recipe(
    "Mandarin Duck Breast",
    ["Duck breast", "Mandarin", "Soy sauce", "Honey", "Garlic powder"],
    "Score duck breast skin and season with garlic powder. Sear skin-side down until crispy. Flip and add mandarin segments, soy sauce, and honey. Cook until duck is cooked through."
  ),
  new Recipe(
    "Crab Legs with Garlic Butter",
    ["Crab legs", "Butter", "Lemon", "Parsley", "Garlic powder"],
    "Steam or boil crab legs until heated through. Serve with melted butter mixed with garlic powder, lemon juice, and chopped parsley."
  ),
  new Recipe(
    "Anchovy Minced Meat Pasta",
    ["Minced mixed meat", "Anchovies", "Garlic", "Tomato sauce", "Pasta"],
    "Sauté minced mixed meat with chopped anchovies and garlic. Add tomato sauce and simmer. Serve over cooked pasta."
  ),
  new Recipe(
    "Pork Meatballs with Marjoram Sauce",
    ["Pork minced meat", "Bread crumbs", "Egg", "Marjoram", "Salt", "Pepper", "Olive oil"],
    "Mix pork minced meat with bread crumbs, egg, marjoram, salt, and pepper. Form into meatballs and fry until golden brown. Serve with marinara sauce."
  ),
  new Recipe(
    "Savory Cardamom Bulgur",
    ["Bulgur", "Cardamom", "Salt", "Pepper", "Olive oil"],
    "Cook bulgur according to package instructions. Season with ground cardamom, salt, pepper, and olive oil."
  ),
  new Recipe(
    "Vanilla Mascarpone Cream",
    ["Mascarpone", "Whipped cream", "Vanilla", "Sugar"],
    "Mix mascarpone with whipped cream, vanilla, and sugar until smooth. Serve as a topping for desserts or fruit."
  ),
  new Recipe(
    "Condensed Milk Emmental Cheese Dip",
    ["Emmental cheese", "Condensed milk", "Sesame seeds"],
    "Melt emmental cheese with condensed milk until smooth. Stir in sesame seeds. Serve as a dip with crackers or breadsticks."
  ),
  new Recipe(
    "Camembert Cheese with Honey and Sesame Seeds",
    ["Camembert cheese", "Honey", "Sesame seeds"],
    "Drizzle camembert cheese with honey and sprinkle with sesame seeds. Bake until cheese is soft and gooey. Serve with crackers or bread."
  )
];

recipes.forEach(recipe => {
  let displayedRecipes = 0;
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

console.log(recipes[randomNumber]);