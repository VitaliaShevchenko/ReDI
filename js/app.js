const mainContainer = document.querySelector(".js-main-container"); //main content container
const containerText = document.querySelector(".js-container-text"); //container for the text on the top of the main container
const buttonsContainer = document.querySelector(".js-buttons-container"); //container for the buttons inside the main container
const firstRowContainer = document.createElement("div"); //variable for creation the first row of the grid of buttons
let buttonIndex = 0; //the variable which will conrain the index of toggled buttons
let toggledButtons = JSON.parse(localStorage.getItem("toggledButtons")) || []; //the array of toggled buttons

const vegetables = [
  "Potato",
  "Tomato",
  "Onion",
  "Carrot",
  "Cucumber",
  "Lettuce",
  "Bell pepper",
  "Garlic",
  "Spinach",
  "Broccoli",
  "Cauliflower",
  "Peas",
  "Beans",
  "Beetroot",
  "Radish",
  "Celery",
  "Leek",
  "Cabbage",
  "Zucchini",
  "Eggplant",
  "Pumpkin",
  "Asparagus",
  "Artichoke",
  "Mushroom",
  "Kale",
  "Swiss chard",
  "Turnip",
  "Fennel",
  "Parsnip",
  "Kohlrabi",
];

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Cherry",
  "Pear",
  "Grape",
  "Peach",
  "Plum",
  "Raspberry",
  "Blueberry",
  "Lemon",
  "Kiwi",
  "Pineapple",
  "Mango",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Papaya",
  "Apricot",
  "Grapefruit",
  "Avocado",
  "Passionfruit",
  "Fig",
  "Coconut",
  "Lime",
  "Blackberry",
  "Cranberry",
  "Mandarin",
  "Pomegranate",
];

const meatAndFish = [
  "Beef steak",
  "Pork chops",
  "Chicken breast",
  "Salmon fillet",
  "Trout",
  "Chichen wings",
  "Cod fillet",
  "Lamb chops",
  "Duck breast",
  "Turkey breast",
  "Pork belly",
  "Beef tenderloin",
  "Chicken legs",
  "Pork loin",
  "Haddock fillet",
  "Halibut steak",
  "Veal cutlet",
  "Mackerel fillet",
  "Swordfish steak",
  "Carp",
  "chicken thigh fillets",
  "Squid",
  "Mussels",
  "Crab legs",
  "Shrimp",
  "Clams",
  "Anchovies",
  "Minced mixed meat",
  "Pork minced meat",
  "Minced beef",
];

const spices = [
  "Anise",
  "Smoked paprika",
  "Cinnamon",
  "Coriander",
  "Cumin",
  "Fennel seeds",
  "Ginger",
  "Juniper berries",
  "Laurel",
  "Lovage",
  "Marjoram",
  "Mustard seeds",
  "Nutmeg",
  "Paprika",
  "Parsley",
  "Pepper",
  "Rosemary",
  "Sage",
  "Savory",
  "Star anise",
  "Tarragon",
  "Thyme",
  "Turmeric",
  "Allspice",
  "Cardamom",
  "Chili powder",
  "Cloves",
  "Curry powder",
  "Garlic powder",
  "Vanilla",
];

const dairy = [
  "Milk",
  "Butter",
  "Yogurt",
  "Cream",
  "Sour cream",
  "Quark",
  "Cottage cheese",
  "Kefir",
  "Whipped cream",
  "Mascarpone",
  "Condensed milk",
  "Cream cheese",
  "Cheddar cheese",
  "Gouda cheese",
  "Emmental cheese",
  "Camembert cheese",
  "Parmesan cheese",
  "Gorgonzola",
];

const otherIngridients = [
  "Olive oil",
  "Vegetable oil",
  "Sesame seeds oil",
  "Flour",
  "Corn flour",
  "Baking powder",
  "Yeast",
  "Rice",
  "Noodles",
  "Spaghetti",
  "Bulgur",
  "Glass noodles",
  "Soy sauce",
  "Starch",
  "Sesame seeds",
  "Nuts",
  "Wine",
  "Beer",
  "Honey",
];

function createButtonsGrid(category) {
  category.forEach((property, index) => {
    // Create a div element for the button container
    const buttonContainer = document.createElement("div");
    // Create a button element
    const button = document.createElement("button");
    // If the index is divisible by 3 or it's the first button, create a new row
    if (index % 3 === 0 || index === 0) {
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row");
      buttonsContainer.appendChild(rowContainer);
    }

    // Set classes for the button container
    buttonContainer.classList.add(
      "col-sm-4",
      "custom-column",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    // Set button text to property value
    button.textContent = property;
    // Add classes to the button
    if (category == vegetables) {
      button.classList.add("vegetable-button", "js-vegetable-button");
    } else if (category == fruits) {
      button.classList.add("fruit-button", "js-fruit-button");
    } else if (category == meatAndFish) {
      button.classList.add("meat-and-fish-button", "js-meat-and-fish-button");
    } else if (category == spices) {
      button.classList.add("spice-button", "js-spice-button");
    } else if (category == dairy) {
      button.classList.add("dairy-button", "js-dairy-button");
    } else if (category === otherIngridients) {
      button.classList.add("other-button", "js-others-button");
    }

    // Append button to the button container
    buttonContainer.appendChild(button);

    // Append button container to the current row container
    buttonsContainer.lastChild.appendChild(buttonContainer);

    buttonIndex++; // Increment button index
  });
}

// The bock of code which toggles the buttons and saves the toggled buttons into an array and localStorage
function addToggleButtonFunctionality(categorySelector) {
  const buttons = document.querySelectorAll(categorySelector);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      const buttonText = clickedButton.textContent;

      if (!clickedButton.classList.contains("js-toggled-button")) {
        clickedButton.classList.add("js-toggled-button");
        toggledButtons.push(buttonText); // Add the text to the toggledButtons array
      } else {
        const index = toggledButtons.indexOf(buttonText);
        clickedButton.classList.remove("js-toggled-button");
        if (index !== -1) {
          toggledButtons.splice(index, 1); // Remove the text from the toggledButtons array
        }
      }

      localStorage.setItem("toggledButtons", JSON.stringify(toggledButtons));
      console.log(toggledButtons);
    });
  });
}

function clearLocalStorage() {
  localStorage.removeItem("toggledButtons");
}

firstRowContainer.classList.add("row");
buttonsContainer.appendChild(firstRowContainer);

document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  clearLocalStorage();
});

createButtonsGrid(vegetables);
addToggleButtonFunctionality(".js-vegetable-button");

//The block of code for handling the move on button
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".js-move-on-fruit-button")) {
    // Handle click on moveToFruitButton
    containerText.innerHTML = `<p>Well done! Now tell me, what fruit do you have at home?</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(fruits);
    addToggleButtonFunctionality(".js-fruit-button");
    target.innerHTML = `Check meat/fish`;
    target.classList.add("js-check-meat-and-fish-btn");
    target.classList.remove("js-move-on-fruit-button");
  } else if (target.matches(".js-check-meat-and-fish-btn")) {
    // Handle click on moveToMeatAndFishButton
    containerText.innerHTML = `<p>Let's check the meat and fish now!</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(meatAndFish);
    addToggleButtonFunctionality(".js-meat-and-fish-button");
    target.innerHTML = `Go check spices`;
    target.classList.add("js-go-to-spices-button");
    target.classList.remove("js-check-meat-and-fish-btn");
  } else if (target.matches(".js-go-to-spices-button")) {
    // Handle click on moveToSpicesButton
    containerText.innerHTML = `<p>Can you please check what spices do you have at home? <br> (I consider you always have salt at home)</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(spices);
    addToggleButtonFunctionality(".js-spice-button");
    target.innerHTML = `Dairy products!`;
    target.classList.add("js-go-to-dairy-button");
    target.classList.remove("js-go-to-spices-button");
  } else if (target.matches(".js-go-to-dairy-button")) {
    // Handle click on goToDairyButton
    containerText.innerHTML = `<p>Do you have any butter or milk? Maybe Cream? Check it out!</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(dairy);
    addToggleButtonFunctionality(".js-dairy-button");
    target.innerHTML = `The last step`;
    target.classList.add("js-go-to-others-button");
    target.classList.remove("js-go-to-dairy-button");
  } else if (target.matches(".js-go-to-others-button")) {
    // Handle click on goToOthersButton
    containerText.innerHTML = `<p>Let's check what else do you have?</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(otherIngridients);
    addToggleButtonFunctionality(".js-others-button");
    target.innerHTML = `<a href="recipe-results.html" class="go-to-recipes-link js-go-to-recipes-link">See the Recipes</a>`;
    target.classList.add("js-see-result");
    target.classList.remove(".js-go-to-others-button");
  } else if (target.matches(".js-see-result")) {
  }
});
