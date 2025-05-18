document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("collapsible--expanded");
    });
});

// Function for the game

const gameBoard = document.querySelector(".game-board");
const selectionMarker = document.querySelector(".selection-marker");

gameBoard.addEventListener("click", (event) => {
    const boardRect = gameBoard.getBoundingClientRect();
    const x = event.clientX - boardRect.left;
    const y = event.clientY - boardRect.top;

    // Place marker at click location
    selectionMarker.style.left = `${x}px`;// this is the x position of the click
    selectionMarker.style.top = `${y}px`;// this is the y position of the click
    selectionMarker.style.display = 'block';// show the marker
});



