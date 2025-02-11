"use strict";
function createGrid(rows, cols) {
    // Create grid container
    console.log("createGrid Executed");
    const grid = document.createElement("div");
    grid.classList.add("grid"); // Add a class for base styles
    // Apply necessary grid styles dynamically
    grid.style.display = "grid";
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    // grid.style.gap = "10px"; // Optional spacing between grid items
    // Generate grid cells
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item"); // Class for individual grid items
        cell.id = `gridElement${i}`;
        //cell.textContent = `${i + 1}`; // Optional: Show numbers inside cells
        grid.appendChild(cell);
    }
    return grid;
}
// Usage Example:
//document.addEventListener("DOMContentLoaded", () => {
//    const gridContainer = createGrid(4, 5); // Example: 4 rows, 5 columns
//    document.body.appendChild(gridContainer);
//});
