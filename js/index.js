import { vegetablesAndGreens, fruit, meatAndFish, spices, dairy, otherIngridients } from "./data/ingridients.js";

const mainContainer = document.querySelector(".js-main-container"); //main content container
const containerText = document.querySelector(".js-container-text"); //container for the text on the top of the main container
const buttonsContainer = document.querySelector(".js-buttons-container"); //container for the buttons inside the main container
const firstRowContainer = document.createElement("div"); //variable for creation the first row of the grid of buttons
let buttonIndex = 0; //the variable which will conrain the index of toggled buttons
let toggledButtons = JSON.parse(localStorage.getItem("toggledButtons")) || []; //the array of toggled buttons


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

    // setting button text to property value
    button.textContent = property;
    // add classes to the button
    if (category == vegetablesAndGreens) {
      button.classList.add("vegetable-button", "js-vegetable-button");
    } else if (category == fruit) {
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


//clear the local storage if the page is reloaded or loaded
document.addEventListener("DOMContentLoaded", function () {
  toggledButtons = [];
});
// The block of code which toggles the buttons and saves the toggled buttons into an array and localStorage
function addToggleButtonFunctionality(categorySelector) {
  const buttons = document.querySelectorAll(categorySelector);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      const buttonText = clickedButton.textContent;

      if (!clickedButton.classList.contains("js-toggled-button")) {
        clickedButton.classList.add("js-toggled-button");
        if (toggledButtons.includes(buttonText)) {
          return;  //if the text of the button already in the toggledButtons array - stops execution
        } else {
          toggledButtons.push(buttonText); // Add the text to the toggledButtons array
        }
      } else {
        const index = toggledButtons.indexOf(buttonText); // checks the index of the button text in toggled buttons array
        clickedButton.classList.remove("js-toggled-button");
        if (index !== -1) {
          toggledButtons.splice(index, 1); // Remove the text from the toggledButtons array 
        }
      }

      localStorage.setItem("toggledButtons", JSON.stringify(toggledButtons)); // saves the toggled buttons array in the local storage
      console.log(toggledButtons);
    });
  });
}

firstRowContainer.classList.add("row");
buttonsContainer.appendChild(firstRowContainer);

createButtonsGrid(vegetablesAndGreens);
addToggleButtonFunctionality(".js-vegetable-button");

//The block of code for handling the move on button
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".js-move-on-fruit-button")) {
    // Handle click on moveToFruitButton
    containerText.innerHTML = `<p>Well done! Now tell me, what fruit do you have at home?</p>`;
    buttonsContainer.innerHTML = "";
    createButtonsGrid(fruit);
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
  } 
});
