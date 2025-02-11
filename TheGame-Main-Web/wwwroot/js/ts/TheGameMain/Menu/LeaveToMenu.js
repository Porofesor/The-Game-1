export default function leaveToMenu() {
    const leaveButton = document.getElementById("leaveButton");
    if (leaveButton) {
        console.log("leaveButton Executed");
        leaveButton.addEventListener("click", () => unloadGame());
    }
}
function unloadGame() {
    console.log("unloadGame Executed");
    const menuContainer = document.getElementById("menuContainer");
    const gameContainer = document.getElementById("gameContainer");
    if (gameContainer && menuContainer) {
        // Free memory and remove elements
        gameContainer.innerHTML = "";
        // Unload all dynamically added scripts
        //scriptElements.forEach(script => script.remove());
        //scriptElements = [];
        // Show menu again
        gameContainer.style.display = "none";
        menuContainer.style.display = "block";
        //gameLoaded = false;
        // Clear potential event listeners
        document.removeEventListener("click", unloadGame);
        console.log("Game unloaded, memory freed.");
    }
}
