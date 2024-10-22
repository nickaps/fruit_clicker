
// Gathering and hiding ugprade buttons/props

const tree = document.getElementById("tree");
tree.hidden = true;

const upgradeFruitButton = document.getElementById("fruitUpgrader")
upgradeFruitButton.hidden = true;

const autoclickButton = document.getElementById("autoclickUpgrader")
autoclickButton.hidden = true;

const fruitSaladButton = document.getElementById("fruitSaladUpgrader");
fruitSaladButton.hidden = true;

// Start at level 1
let level = 1;
// The formula for each upgrade price goes: (base**level) * pricePerLevel
let pricePerLevel = 10;
// ^ exponent base
let base = 2;
// Boolean for auto-click upgrade
let autoclickPurchased = false;

// Method that checks what buttons should appear based on player score
function checkScore() {
    upgradeFruitButton.hidden = true;
    autoclickButton.hidden = true;
    fruitSaladButton.hidden = true;

    if (level >= 11) {
        return;
    }

    if (score >= ((base**level) * pricePerLevel)) {
        if (level >= 10) {
            fruitSaladButton.hidden = false;
        }
        else {
            upgradeFruitButton.hidden = false;
        }
    }
    if (score >= 1000 && autoclickPurchased === false) {
        autoclickButton.hidden = false;
    }
}

// Method that upgrades the level of fruit
function upgrade() {
    score -= ((base**level) * pricePerLevel);
    level += 1;

    upgradeFruitButton.textContent = "Upgrade Fruit ($" + ((base**level) * pricePerLevel).toString() + ")";

    if (score < ((base**level) * pricePerLevel)) {
        upgradeFruitButton.hidden = true;
    }

    advanceFruitGraphic();
    updateUI();
    checkScore();
}

// Method that activates autoclick
function purchaseAutoclick() {
    const intervalID = setInterval(function() {    
        score += level;
        updateUI();
        checkScore();
    }, 1000);

    score -= 1000;
    autoclickButton.hidden = true;
    autoclickPurchased = true;

    tree.hidden = false;

    updateUI();
    checkScore();
}

// Final upgrade method
function fruitSalad() {
    score += 1000000;
    level += 1;

    advanceFruitGraphic();
    updateUI();
    checkScore();

    const timeoutId = setTimeout(endgameCelebreation(), 10);
}

// Endgame behavior after making fruit salad
function endgameCelebreation() {
    
    document.body.style.backgroundColor = "gold";
    alert("Congratulations! You won a Delicious Fruit Salad!");

}