const colorGrid = document.querySelector(".color-grid");
const baseColors = [
    "red", "blue", "yellow", "green", "orange", "purple",
    "black", "white", "gray", "silver", "teal", "navy",
    "lime", "maroon", "olive", "fuchsia", "aqua"
];

// Define RGB gradients for all colors
const rgbGradients = {
    red: ["rgb(80, 0, 0)", "rgb(160, 0, 0)", "rgb(255, 60, 60)"],
    blue: ["rgb(0, 0, 80)", "rgb(0, 0, 160)", "rgb(60, 60, 255)"],
    yellow: ["rgb(102, 102, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 153)"],
    green: ["rgb(0, 80, 0)", "rgb(0, 160, 0)", "rgb(60, 255, 60)"],
    orange: ["rgb(120, 60, 0)", "rgb(200, 100, 0)", "rgb(255, 165, 60)"],
    purple: ["rgb(80, 0, 80)", "rgb(160, 0, 160)", "rgb(200, 60, 255)"],
    black: ["rgb(0, 0, 0)", "rgb(50, 50, 50)", "rgb(100, 100, 100)"],
    white: ["rgb(220, 220, 220)", "rgb(240, 240, 240)", "rgb(255, 255, 255)"],
    gray: ["rgb(40, 40, 40)", "rgb(120, 120, 120)", "rgb(200, 200, 200)"],
    silver: ["rgb(80, 80, 80)", "rgb(160, 160, 160)", "rgb(230, 230, 230)"],
    teal: ["rgb(0, 80, 80)", "rgb(0, 160, 160)", "rgb(60, 255, 255)"],
    navy: ["rgb(0, 0, 80)", "rgb(0, 0, 160)", "rgb(30, 30, 255)"],
    lime: ["rgb(50, 150, 50)", "rgb(100, 255, 100)", "rgb(150, 255, 150)"],
    maroon: ["rgb(80, 0, 0)", "rgb(140, 0, 0)", "rgb(180, 60, 60)"],
    olive: ["rgb(80, 80, 0)", "rgb(140, 140, 50)", "rgb(180, 180, 100)"],
    fuchsia: ["rgb(200, 0, 200)", "rgb(255, 60, 255)", "rgb(255, 120, 255)"],
    aqua: ["rgb(0, 200, 200)", "rgb(60, 255, 255)", "rgb(120, 255, 255)"]
};

// Function to create base swatches
function generateSwatches() {
    baseColors.forEach(color => {
        const swatch = document.createElement("div");
        swatch.classList.add("color-swatch");
        swatch.setAttribute("data-color", color);

        swatch.style.background = `linear-gradient(to right, 
            ${rgbGradients[color][0]}, 
            ${rgbGradients[color][1]}, 
            ${rgbGradients[color][2]}
        )`;

        swatch.addEventListener("click", () => {
            expandSwatch(swatch, color);
        });

        colorGrid.appendChild(swatch);
    });
}

// Function to expand a swatch
function expandSwatch(swatch, color) {
    document.querySelectorAll(".expanded").forEach(el => el.classList.remove("expanded"));
    document.querySelector(".color-grid").classList.add("expanded-mode");

    swatch.classList.add("expanded");

    const closeButton = document.querySelector(".close-button");
    closeButton.classList.add("visible");
}

// Function to reset selection
function resetGrid() {
    const expandedSwatch = document.querySelector(".expanded");
    if (expandedSwatch) {
        expandedSwatch.classList.remove("expanded");
    }

    document.querySelector(".color-grid").classList.remove("expanded-mode");

    document.querySelector(".close-button").classList.remove("visible");
}

// Initialize close button
document.querySelector(".close-button").addEventListener("click", resetGrid);

// Populate the grid
generateSwatches();