const colorGrid = document.querySelector(".color-grid");
const baseColors = [
    "red", "blue", "yellow", "green", "orange", "purple",
    "black", "white", "gray", "silver", "teal", "navy",
    "lime", "maroon", "olive", "fuchsia", "aqua"
];

// Function to create base swatches
function generateSwatches() {
    baseColors.forEach(color => {
        const swatch = document.createElement("div");
        swatch.classList.add("color-swatch");
        swatch.style.backgroundColor = color;
        swatch.setAttribute("data-color", color);

        // Click Event: Expand the swatch
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

    const hue = getHue(color);
    if (hue === "grayscale") {
        swatch.style.background = `linear-gradient(to right, 
            rgb(0, 0, 0), /* Black */
            rgb(128, 128, 128), /* Medium gray */
            rgb(255, 255, 255) /* White */
        )`;
    } else {
        swatch.style.background = `linear-gradient(to right, 
            hsl(${hue}, 100%, 20%), 
            hsl(${hue}, 100%, 50%), 
            hsl(${hue}, 100%, 80%)
        )`;
    }
}


// Helper Function: Get the hue value for a color
function getHue(color) {
    const hues = {
        red: 0, blue: 220, yellow: 60, green: 120, orange: 30,
        purple: 280, teal: 160, navy: 240, lime: 90, maroon: 10,
        olive: 45, fuchsia: 300, aqua: 180
    };

    return hues[color] || (color === "black" || color === "gray" || color === "silver" || color === "white" ? "grayscale" : 0);
}


// Call the function to populate the grid
generateSwatches();

function expandSwatch(swatch, color) {
    document.querySelectorAll(".expanded").forEach(el => el.classList.remove("expanded"));
    document.querySelector(".color-grid").classList.add("expanded-mode");

    swatch.classList.add("expanded");
    swatch.style.background = `linear-gradient(to right, 
        hsl(${getHue(color)}, 100%, 20%), 
        hsl(${getHue(color)}, 100%, 50%), 
        hsl(${getHue(color)}, 100%, 80%)
    )`;

    // Create and attach close button inside swatch
    let closeButton = swatch.querySelector(".close-button");
    if (!closeButton) {
        closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerText = "✖";
        swatch.appendChild(closeButton);
    }

    closeButton.style.display = "block";
    closeButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents accidental swatch clicks
        resetGrid();
    });
}

// Function to reset selection
function resetGrid() {
    document.querySelectorAll(".expanded").forEach(el => el.classList.remove("expanded"));
    document.querySelector(".color-grid").classList.remove("expanded-mode");

    // Remove ALL close buttons from expanded swatches
    document.querySelectorAll(".close-button").forEach(button => {
        button.remove();  // Fully removes it from the DOM
    });
}




