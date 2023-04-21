## Project title:

Pokedex
A simple SPA where you can look up statistics of every Pokemon and the Pokemon Type Match-Up chart.

## Live Demo:

https://main--polite-madeleine-e5b047.netlify.app/

## Installation

Clone the repository and type in npm start in your terminal.
https://github.com/Erodela/Module-2-Project-Pokedex

## Motivation:

Pokemon is one of my favorite media franchises and I knew I would have fun putting this together.

## Technology used:

VS Code, HTML, CSS, Javascript, React

## Code Example:

const getPokemon = async () => {
const pkmnArr = [];
try {
const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
const res = await axios.get(url);
pkmnArr.push(res.data);
setPkdexNum(res.data.id);
if (res.data.types[1]) {
//If statement gets pokemon's second typing if it has one.
setPkmnType2(res.data.types[1].type.name);
} else {
setPkmnType2(res.data.types[0].type.name);
}
setPkmnData(pkmnArr);
console.log(res);
console.log(url);
} catch (e) {
console.log(e);
}
};

## Usage:

Everything is done with mouse and keyboard.

## To-dos

Utilize useEffect() more. I had a hard time implementing it into the project. I feel my code could have been a lot neater and efficient if I knew how to use it.
Optimize the code more. I feel like I could have eliminated a lot of the repetition, but I ran into errors while trying to do so. In the end I just did what works.
Apply background images. The App while colorful, looks very plain.
Fix bugs.

## Bugs

The buttons on the search page require you to press them twice in order for them to work as intended. Pressing the opposite button before pressing the first one twice will mess up the order you navigate through the PokeDex.

The CSS files are importing without me actually importing them. They are affecting JS files they are not supposed to. Instead of trying to fix it, I just took advantage of it.

The text in the Type Match-Up Chart's data table are not centered because of the way I structured the table.
