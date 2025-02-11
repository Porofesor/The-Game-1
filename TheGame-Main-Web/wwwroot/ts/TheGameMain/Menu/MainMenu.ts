import leaveToMenu from './LeaveToMenu';

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menuContainer") as HTMLElement;
    const gameContainer = document.getElementById("gameContainer") as HTMLElement;
    const startGameBtn = document.getElementById("startGameBtn") as HTMLButtonElement;

    let gameLoaded: boolean = false;
    let scriptElements: HTMLScriptElement[] = []; // Store dynamically added scripts

    if (startGameBtn) {
        console.log("starGame Executed");
        startGameBtn.addEventListener("click", () => loadGame());
    }

    async function loadGame(): Promise<void> {
        console.log("loadGame Executed");
        fetch("/Game/LoadGame")
            .then(response => response.text())
            .then(html => {
                const gameContainer = document.getElementById("gameContainer") as HTMLElement;
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
    }

    document.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;
        if (target && target.id === "exitGameBtn") {
            unloadGame();
        }
    });

    function unloadGame(): void {
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

    function triggerCreateGrid(): void {
        const boardGrid = document.getElementById("board--grid");

        console.log("Grid triggerd")
        // Calculate size of window

        const widthDivided = Math.floor(window.screen.width / 50) - 1;
        const heightDivided = Math.floor(window.screen.height / 50) - 1;

        if (boardGrid) {
            const gridContainer = createGrid(heightDivided, widthDivided); // Example: 4 rows, 5 columns
            boardGrid.appendChild(gridContainer);
        } else {
            console.error("Error: Element with ID 'board--grid' not found.");
        }
    }

    async function loadGameComponent(methodName :string): Promise<void> {
        console.log(`${methodName} Executed`);
        fetch(`/Game/${methodName}`)
            .then(response => response.text())
            .then(html => {
                const gameContainer = document.getElementById("gameContainer") as HTMLElement;
                if (gameContainer) {
                    gameContainer.innerHTML += html;
                }
            })
            .catch(error => console.error(`Error loading ${methodName}:`, error));
    }
});

