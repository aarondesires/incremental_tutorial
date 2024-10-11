### Full Guide for Your Idle Clicker Game

This guide will walk you through the key components of the game, including how to modify and extend functionality such as adding more upgrades, changing the local storage logic, and customizing the CSS style.

---

## File 1: `index.html`
This is the main file where the game interface is displayed. It links the CSS and JavaScript files, as well as defines the layout of the game.

### Key Sections:
1. **Money Display and Click Button**:
   - Shows the current amount of money and contains the "Click Me!" button, which increments your money.
   - The display of the amount of money is in game.js

   ```html
   <p>Money: <span id="money">0</span></p>
   <button id="click-btn">Click Me!</button>
   ```

2. **Upgrade Sections**:
   - There are three main sections of upgrades: Click Power Upgrades, Auto Clicker Upgrades, and Multiplier Upgrades.
   - Each section has multiple upgrade items (basic, super, ultra).
   - Buttons are provided to purchase upgrades, and the cost and owned count are displayed dynamically.

   ```html
   <div class="upgrades-container">
       <!-- Example Upgrade Section -->
       <div class="upgrade-section">
           <p><strong>Click Power Upgrades</strong></p>
           <div class="upgrade-item">
               <p>Click Power (+1 per click)</p>
               <p>Cost: <span id="click-power-cost">10</span> | Owned: <span id="click-power-count">0</span></p>
               <button id="buy-click-power">Buy Click Power</button>
           </div>
           <!-- Additional upgrades go here -->
       </div>
   </div>
   ```

3. **Reset Button**:
   - A button to reset the game and wipe local storage with two levels of confirmation.

   ```html
   <button id="reset-btn">Reset Progress</button>
   ```

### How to Add More Upgrades:
1. **Add a New Upgrade Item**:
   - To add a new upgrade, copy the structure of an existing upgrade and modify the text, `id`s, and values.

   Example for adding a new "Mega Click Power" upgrade:
   ```html
   <div class="upgrade-item">
       <p>Mega Click Power (+50 per click)</p>
       <p>Cost: <span id="mega-click-power-cost">5000</span> | Owned: <span id="mega-click-power-count">0</span></p>
       <button id="buy-mega-click-power">Buy Mega Click Power</button>
   </div>
   ```

2. **Link the Upgrade to JavaScript**:
   - Ensure the new upgrade has a corresponding `id` (e.g., `buy-mega-click-power`, `mega-click-power-cost`, `mega-click-power-count`) so it can be handled in the JavaScript file.

---

## File 2: `style.css`
This file defines the visual style of the game, including layout, colors, fonts, and spacing.

### Key Sections:
1. **Game Container**:
   - The overall structure is styled using `#game-container` to center and border the game content.
   
   ```css
   #game-container {
       width: 80%;
       margin: 0 auto;
       padding: 20px;
       border: 2px solid #000;
       border-radius: 10px;
   }
   ```

2. **Upgrade Layout**:
   - Upgrades are placed side by side using `display: flex` in the `.upgrades-container`.

   ```css
   .upgrades-container {
       display: flex;
       justify-content: space-between;
       margin-top: 20px;
   }
   
   .upgrade-section {
       width: 30%;
       padding: 15px;
       border: 1px solid #000;
       border-radius: 5px;
       background-color: #f9f9f9;
   }
   ```

### How to Change CSS Styles:
1. **Change Colors**:
   - You can change background colors, border colors, or text colors. For example, to change the background of the upgrade sections:
   
   ```css
   .upgrade-section {
       background-color: #e0f7fa; /* Lighter blue */
   }
   ```

2. **Change Button Styles**:
   - You can customize the buttons to have different colors, fonts, or hover effects.

   ```css
   button {
       padding: 10px 20px;
       background-color: #007bff;
       color: white;
       border-radius: 5px;
   }

   button:hover {
       background-color: #0056b3;
   }
   ```

3. **Adding Animations**:
   - You can add CSS animations for buttons or money updates for a more dynamic experience.

   ```css
   @keyframes pulse {
       0% { transform: scale(1); }
       50% { transform: scale(1.1); }
       100% { transform: scale(1); }
   }

   button:hover {
       animation: pulse 0.3s ease-in-out;
   }
   ```

---

## File 3: `game.js`
This file contains the core logic of your game, handling the clicking mechanics, upgrades, local storage, and resetting the game.

### Key Sections:
1. **Variables for Money and Upgrades**:
   - Variables are initialized for tracking `money`, `clickPower`, `autoClicker`, `multiplier`, and their respective costs and counts.

   ```javascript
   let money = 0;
   let clickPower = 1;
   let autoClicker = 0;
   let multiplier = 1.0;

   let clickPowerCost = 10;
   let autoClickerCost = 50;
   let multiplierCost = 100;
   ```

2. **Buying Upgrades**:
   - The event listeners for buying upgrades increase the upgrade's effects (e.g., more money per click) and adjust the upgrade cost based on a 25% price increase.

   Example:
   ```javascript
   document.getElementById('buy-click-power').addEventListener('click', function () {
       if (money >= clickPowerCost) {
           money -= clickPowerCost;
           clickPower += 1;
           clickPowerCost = Math.round(clickPowerCost * 1.25);
           updateUI();
           saveGame();
       }
   });
   ```

3. **Saving to Local Storage**:
   - The game saves progress to `localStorage` so that it persists when the page is refreshed.

   ```javascript
   function saveGame() {
       const gameData = {
           money: money,
           clickPower: clickPower,
           autoClicker: autoClicker,
           multiplier: multiplier,
           clickPowerCost: clickPowerCost,
           autoClickerCost: autoClickerCost,
           multiplierCost: multiplierCost,
           // Add more variables as needed
       };
       localStorage.setItem('idleClickerGame', JSON.stringify(gameData));
   }
   ```

4. **Loading from Local Storage**:
   - When the page is loaded, the game checks for saved progress and loads it.

   ```javascript
   function loadGame() {
       const savedGame = JSON.parse(localStorage.getItem('idleClickerGame'));
       if (savedGame) {
           money = savedGame.money || 0;
           clickPower = savedGame.clickPower || 1;
           // Load other saved data
           updateUI();
       }
   }
   ```

### How to Add More Upgrades in JavaScript:
1. **Declare New Variables**:
   - Add new variables for the upgrade’s cost, count, and effects.

   Example for "Mega Click Power":
   ```javascript
   let megaClickPowerCost = 5000;
   let megaClickPowerCount = 0;
   ```

2. **Create Event Listener for the New Upgrade**:
   - Add an event listener similar to other upgrades. Ensure you update the `money` value and the cost of the new upgrade.

   ```javascript
   document.getElementById('buy-mega-click-power').addEventListener('click', function () {
       if (money >= megaClickPowerCost) {
           money -= megaClickPowerCost;
           clickPower += 50; // Mega Click Power effect
           megaClickPowerCost = Math.round(megaClickPowerCost * 1.25);
           megaClickPowerCount++;
           updateUI();
           saveGame();
       }
   });
   ```

3. **Save the New Upgrade’s Data to Local Storage**:
   - Add the new upgrade’s data to the `saveGame()` and `loadGame()` functions to ensure the progress is saved and loaded.

   ```javascript
   function saveGame() {
       const gameData = {
           money: money,
           clickPower: clickPower,
           megaClickPowerCost: megaClickPowerCost,
           megaClickPowerCount: megaClickPowerCount,
           // Save other upgrades
       };
       localStorage.setItem('idleClickerGame', JSON.stringify(gameData));
   }
   ```

   ```javascript
   function loadGame() {
       const savedGame = JSON.parse(localStorage.getItem('idleClickerGame'));
       if (savedGame) {
           megaClickPowerCost = savedGame.megaClickPowerCost || 5000;
           megaClickPowerCount = savedGame.megaClickPowerCount || 0;
           // Load other saved data
       }
   }
   ```

---

## How to Add More Features:
1. **Add More Upgrade Categories**:
   - Simply follow the pattern of existing upgrade
