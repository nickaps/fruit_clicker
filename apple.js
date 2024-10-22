// Get references for apple clicker and score display
const scoreDisplay = document.getElementById("score");
const fruitButton = document.getElementById("apple");

// Set up game variables
let score = 0;
let message = "Your score is: " + score;

// Add event listener to fruit
fruitButton.addEventListener("click", function() {
    score += level;
    updateUI();
    checkScore();
})

// Methos that updates the text content
function updateUI() {
    scoreDisplay.textContent = score;
}

// Method checks your 
function advanceFruitGraphic() {

    switch(level) {
        case 2:
            fruitButton.src = "fruit/apple.png";
            break;

        case 3:
            fruitButton.src = "fruit/orange.png";
            break;
        
        case 4:
            fruitButton.src = "fruit/bananas.png";
            break;
        
        case 5:
            fruitButton.src = "fruit/watermelon.png";
            break;
        
        case 6:
            fruitButton.src = "fruit/cantaloupe.png";
            break;

        case 7:
            fruitButton.src = "fruit/pineapple.png";
            break;
        
        case 8:
            fruitButton.src = "fruit/mango.png";
            break;
        
        case 9:
            fruitButton.src = "fruit/starfruit.png";
            break;
        
        case 10:
            fruitButton.src = "fruit/dragonfruit.png";
            break;

        case 11:
            fruitButton.src = "fruit/salad.png"
    }
}