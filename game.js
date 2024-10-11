// Game variables with defaults
let money = 0;
let clickPower = 1;
let autoClicker = 0;
let multiplier = 1.0;

// Upgrade costs and counts
let clickPowerCost = 10;
let superClickPowerCost = 100;
let ultraClickPowerCost = 1000;

let autoClickerCost = 50;
let megaAutoClickerCost = 500;
let ultraAutoClickerCost = 5000;

let multiplierCost = 100;
let superMultiplierCost = 1000;
let ultraMultiplierCost = 10000;

let clickPowerCount = 0;
let superClickPowerCount = 0;
let ultraClickPowerCount = 0;

let autoClickerCount = 0;
let megaAutoClickerCount = 0;
let ultraAutoClickerCount = 0;

let multiplierCount = 0;
let superMultiplierCount = 0;
let ultraMultiplierCount = 0;

// Load data from local storage
window.onload = function () {
    loadGame();
    updateUI();
    startAutoClicker();
};

// Click button logic
document.getElementById('click-btn').addEventListener('click', function () {
    money += clickPower * multiplier;
    updateUI();
    saveGame();
});

// Buy click power
document.getElementById('buy-click-power').addEventListener('click', function () {
    if (money >= clickPowerCost) {
        money -= clickPowerCost;
        clickPowerCount++;
        clickPower += 1;
        clickPowerCost = Math.round(clickPowerCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-super-click-power').addEventListener('click', function () {
    if (money >= superClickPowerCost) {
        money -= superClickPowerCost;
        superClickPowerCount++;
        clickPower += 5;
        superClickPowerCost = Math.round(superClickPowerCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-ultra-click-power').addEventListener('click', function () {
    if (money >= ultraClickPowerCost) {
        money -= ultraClickPowerCost;
        ultraClickPowerCount++;
        clickPower += 10;
        ultraClickPowerCost = Math.round(ultraClickPowerCost * 1.25);
        updateUI();
        saveGame();
    }
});

// Buy auto clicker
document.getElementById('buy-auto-clicker').addEventListener('click', function () {
    if (money >= autoClickerCost) {
        money -= autoClickerCost;
        autoClickerCount++;
        autoClicker++;
        autoClickerCost = Math.round(autoClickerCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-mega-auto-clicker').addEventListener('click', function () {
    if (money >= megaAutoClickerCost) {
        money -= megaAutoClickerCost;
        megaAutoClickerCount++;
        autoClicker += 5;
        megaAutoClickerCost = Math.round(megaAutoClickerCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-ultra-auto-clicker').addEventListener('click', function () {
    if (money >= ultraAutoClickerCost) {
        money -= ultraAutoClickerCost;
        ultraAutoClickerCount++;
        autoClicker += 10;
        ultraAutoClickerCost = Math.round(ultraAutoClickerCost * 1.25);
        updateUI();
        saveGame();
    }
});

// Buy multiplier
document.getElementById('buy-multiplier').addEventListener('click', function () {
    if (money >= multiplierCost) {
        money -= multiplierCost;
        multiplierCount++;
        multiplier += 0.25;
        multiplierCost = Math.round(multiplierCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-super-multiplier').addEventListener('click', function () {
    if (money >= superMultiplierCost) {
        money -= superMultiplierCost;
        superMultiplierCount++;
        multiplier += 0.5;
        superMultiplierCost = Math.round(superMultiplierCost * 1.25);
        updateUI();
        saveGame();
    }
});

document.getElementById('buy-ultra-multiplier').addEventListener('click', function () {
    if (money >= ultraMultiplierCost) {
        money -= ultraMultiplierCost;
        ultraMultiplierCount++;
        multiplier += 1.0;
        ultraMultiplierCost = Math.round(ultraMultiplierCost * 1.25);
        updateUI();
        saveGame();
    }
});

// Auto clicker logic
function startAutoClicker() {
    setInterval(function () {
        if (autoClicker > 0) {
            money += autoClicker * multiplier;
            updateUI();
            saveGame();
        }
    }, 1000);
}

// Reset button with confirmation
document.getElementById('reset-btn').addEventListener('click', function () {
    if (confirm("Are you sure you want to reset? This cannot be undone.")) {
        if (confirm("Really? This will wipe all your progress!")) {
            resetGame();
        }
    }
});

// Update UI
function updateUI() {
    document.getElementById('money').innerText = Math.floor(money);

    // Click power upgrades
    document.getElementById('click-power-cost').innerText = clickPowerCost;
    document.getElementById('super-click-power-cost').innerText = superClickPowerCost;
    document.getElementById('ultra-click-power-cost').innerText = ultraClickPowerCost;

    document.getElementById('click-power-count').innerText = clickPowerCount;
    document.getElementById('super-click-power-count').innerText = superClickPowerCount;
    document.getElementById('ultra-click-power-count').innerText = ultraClickPowerCount;

    // Auto clicker upgrades
    document.getElementById('auto-clicker-cost').innerText = autoClickerCost;
    document.getElementById('mega-auto-clicker-cost').innerText = megaAutoClickerCost;
    document.getElementById('ultra-auto-clicker-cost').innerText = ultraAutoClickerCost;

    document.getElementById('auto-clicker-count').innerText = autoClickerCount;
    document.getElementById('mega-auto-clicker-count').innerText = megaAutoClickerCount;
    document.getElementById('ultra-auto-clicker-count').innerText = ultraAutoClickerCount;

    // Multiplier upgrades
    document.getElementById('multiplier-cost').innerText = multiplierCost;
    document.getElementById('super-multiplier-cost').innerText = superMultiplierCost;
    document.getElementById('ultra-multiplier-cost').innerText = ultraMultiplierCost;

    document.getElementById('multiplier-count').innerText = multiplierCount;
    document.getElementById('super-multiplier-count').innerText = superMultiplierCount;
    document.getElementById('ultra-multiplier-count').innerText = ultraMultiplierCount;
}

// Save game to local storage
function saveGame() {
    const gameData = {
        money: money,
        clickPower: clickPower,
        autoClicker: autoClicker,
        multiplier: multiplier,
        clickPowerCost: clickPowerCost,
        superClickPowerCost: superClickPowerCost,
        ultraClickPowerCost: ultraClickPowerCost,
        autoClickerCost: autoClickerCost,
        megaAutoClickerCost: megaAutoClickerCost,
        ultraAutoClickerCost: ultraAutoClickerCost,
        multiplierCost: multiplierCost,
        superMultiplierCost: superMultiplierCost,
        ultraMultiplierCost: ultraMultiplierCost,
        clickPowerCount: clickPowerCount,
        superClickPowerCount: superClickPowerCount,
        ultraClickPowerCount: ultraClickPowerCount,
        autoClickerCount: autoClickerCount,
        megaAutoClickerCount: megaAutoClickerCount,
        ultraAutoClickerCount: ultraAutoClickerCount,
        multiplierCount: multiplierCount,
        superMultiplierCount: superMultiplierCount,
        ultraMultiplierCount: ultraMultiplierCount
    };
    localStorage.setItem('idleClickerGame', JSON.stringify(gameData));
}

// Load game from local storage
function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem('idleClickerGame'));
    if (savedGame) {
        money = savedGame.money || 0;
        clickPower = savedGame.clickPower || 1;
        autoClicker = savedGame.autoClicker || 0;
        multiplier = savedGame.multiplier || 1.0;
        clickPowerCost = savedGame.clickPowerCost || 10;
        superClickPowerCost = savedGame.superClickPowerCost || 100;
        ultraClickPowerCost = savedGame.ultraClickPowerCost || 1000;
        autoClickerCost = savedGame.autoClickerCost || 50;
        megaAutoClickerCost = savedGame.megaAutoClickerCost || 500;
        ultraAutoClickerCost = savedGame.ultraAutoClickerCost || 5000;
        multiplierCost = savedGame.multiplierCost || 100;
        superMultiplierCost = savedGame.superMultiplierCost || 1000;
        ultraMultiplierCost = savedGame.ultraMultiplierCost || 10000;
        clickPowerCount = savedGame.clickPowerCount || 0;
        superClickPowerCount = savedGame.superClickPowerCount || 0;
        ultraClickPowerCount = savedGame.ultraClickPowerCount || 0;
        autoClickerCount = savedGame.autoClickerCount || 0;
        megaAutoClickerCount = savedGame.megaAutoClickerCount || 0;
        ultraAutoClickerCount = savedGame.ultraAutoClickerCount || 0;
        multiplierCount = savedGame.multiplierCount || 0;
        superMultiplierCount = savedGame.superMultiplierCount || 0;
        ultraMultiplierCount = savedGame.ultraMultiplierCount || 0;
    }
}

// Reset game
function resetGame() {
    localStorage.removeItem('idleClickerGame');
    money = 0;
    clickPower = 1;
    autoClicker = 0;
    multiplier = 1.0;
    clickPowerCost = 10;
    superClickPowerCost = 100;
    ultraClickPowerCost = 1000;
    autoClickerCost = 50;
    megaAutoClickerCost = 500;
    ultraAutoClickerCost = 5000;
    multiplierCost = 100;
    superMultiplierCost = 1000;
    ultraMultiplierCost = 10000;
    clickPowerCount = 0;
    superClickPowerCount = 0;
    ultraClickPowerCount = 0;
    autoClickerCount = 0;
    megaAutoClickerCount = 0;
    ultraAutoClickerCount = 0;
    multiplierCount = 0;
    superMultiplierCount = 0;
    ultraMultiplierCount = 0;
    updateUI();
}
