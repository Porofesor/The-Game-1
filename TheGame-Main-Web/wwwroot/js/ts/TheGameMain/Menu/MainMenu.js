var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import leaveToMenu from './LeaveToMenu';
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menuContainer");
    const gameContainer = document.getElementById("gameContainer");
    const startGameBtn = document.getElementById("startGameBtn");
    let gameLoaded = false;
    let scriptElements = []; // Store dynamically added scripts
    if (startGameBtn) {
        console.log("starGame Executed");
        startGameBtn.addEventListener("click", () => loadGame());
    }
    function loadGame() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("loadGame Executed");
            fetch("/Game/LoadGame")
                .then(response => response.text())
                .then(html => {
                const gameContainer = document.getElementById("gameContainer");
                if (gameContainer) {
                    console.log("Game container exist");
                    gameContainer.innerHTML = html;
                    menuContainer.style.display = "none";
                    gameContainer.style.display = "block";
                    // Create grid
                    triggerCreateGrid();
                    // Adds mini map
                    loadGameComponent("MiniMap");
                    // Adds left panel
                    loadGameComponent("LeftPanel");
                    // Adds eventListener to LeaveToMenu button
                    leaveToMenu();
                    gameLoaded = true;
                }
            })
                .catch(error => console.error("Error loading game:", error));
        });
    }
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.id === "exitGameBtn") {
            unloadGame();
        }
    });
    function unloadGame() {
        if (gameContainer && menuContainer) {
            // Free memory and remove elements
            gameContainer.innerHTML = "";
            // Unload all dynamically added scripts
            scriptElements.forEach(script => script.remove());
            scriptElements = [];
            // Show menu again
            gameContainer.style.display = "none";
            menuContainer.style.display = "block";
            gameLoaded = false;
            // Clear potential event listeners
            document.removeEventListener("click", unloadGame);
            console.log("Game unloaded, memory freed.");
        }
    }
    function triggerCreateGrid() {
        const boardGrid = document.getElementById("board--grid");
        console.log("Grid triggerd");
        // Calculate size of window
        const widthDivided = Math.floor(window.screen.width / 50) - 1;
        const heightDivided = Math.floor(window.screen.height / 50) - 1;
        if (boardGrid) {
            const gridContainer = createGrid(heightDivided, widthDivided); // Example: 4 rows, 5 columns
            boardGrid.appendChild(gridContainer);
        }
        else {
            console.error("Error: Element with ID 'board--grid' not found.");
        }
    }
    function loadGameComponent(methodName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${methodName} Executed`);
            fetch(`/Game/${methodName}`)
                .then(response => response.text())
                .then(html => {
                const gameContainer = document.getElementById("gameContainer");
                if (gameContainer) {
                    gameContainer.innerHTML += html;
                }
            })
                .catch(error => console.error(`Error loading ${methodName}:`, error));
        });
    }
});
