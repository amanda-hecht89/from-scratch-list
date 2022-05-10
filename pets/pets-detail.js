import { pets } from '../pets.js';
import { findById } from '../utils.js';


const param = new URLSearchParams(window.location.search);

const animal = findById(param.get('id'), pets);

const image = document.getElementById('img');
const paragraph = document.getElementById('para');
const animalName = document.getElementById('name');
animalName.textContent = animal.name;

image.src = `../assets/${animal.imgage}.svg`;
paragraph.textContent = animal.says;
