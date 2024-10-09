//Numbers with different spell costs (had to look this up)//
const spellCosts = {'Expelliarmus': 15,'Stupefy': 20, 'Crucio': 80, 'Leviosa': 5,
};

// Array for the spell names//
const spellBook = Object.keys(spellCosts); // ('Expelliarmus': 15,'Stupefy': 20, 'Crucio': 80, 'Leviosa': 5,)

// Manna Points//
let mannaPoints = 600;
const mannaPointsElement = document.getElementById('Manna-Points');
mannaPointsElement.textContent = mannaPoints;

// Function to cast spell//
const castSpell = () => {
    console.log('Huzzah! Spell has been cast.');
    // Choose a random spell from the array//
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    const randomSpell = spellBook[randomIndex];

    // Get the cost of the spell//
    const spellCost = spellCosts[randomSpell];

if (mannaPoints>= spellCost) {
    // Show user the spell on the screen//
    const spellElement = document.getElementById('spell');
    const message = `You cast the ${randomSpell} spell!`;
    spellElement.textContent = message;

    // Subtract mana points from total//
    mannaPoints -= spellCost;
    console.log('Manna Points:', mannaPoints);

    // Show the user the new manna points on the screen//
    mannaPointsElement.textContent = mannaPoints;

} else {
// Display message if not enough manna points
const spellElement = document.getElementById('spell');
const message = 'Not enough mana points to cast the spell!';
spellElement.textContent = message;
}
};










