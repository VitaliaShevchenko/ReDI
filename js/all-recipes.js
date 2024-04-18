import {recipes} from "./data/recipes.js";
const allRecipesContainer = document.querySelector('.js-all-recipes-container');

function createRecipesGrid(rows, cols) {
    const gridContainer = document.querySelector('.js-all-recipes-container');
    // Create a row for each iteration
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      row.classList.add('row');

      // Create columns for each iteration within the row
      for (let j = 0; j < cols; j++) {
        const col = document.createElement('div');
        col.classList.add('col-md-4'); // Use Bootstrap class for column size
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = `${recipes[j].name}`;
        col.appendChild(gridItem);
        row.appendChild(col);
      }
      // Append the row to the grid container
      gridContainer.appendChild(row);
    }
  }

  createRecipesGrid(10, 3)