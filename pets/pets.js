import { pets } from '../pets.js';
import { findById } from '../utils.js';


const param = new URLSearchParams(window.location.search);

const animal = findById(param.get('id'), pets);

const image = document.getElementById('img');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
const paragraph = document.getElementById('para');
const animalName = document.getElementById('name');
animalName.textContent = animal.name;

image.src = `../assets/${animal.image}.jpeg`;
image2.src = `../assets/${animal.image2}.jpeg`;
image3.src = `../assets/${animal.image3}.jpeg`;
image4.src = `../assets/${animal.image4}.jpeg`;
image5.src = `../assets/${animal.image5}.jpeg`;
paragraph.textContent = animal.breed;


//