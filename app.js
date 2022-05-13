// import functions and grab DOM elements
import { pets } from './pets.js';
import { renderPets } from './utils.js';

const petsEl = document.getElementById('pets');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let pet of pets) {
    const petsdiv = renderPets(pet);
    petsEl.append(petsdiv);

}    