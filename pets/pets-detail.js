const param = new URLSearchParams(window.location.search);

const farmAnimal = findById(param.get('id'), animals);

const image = document.getElementById('img');
const paragraph = document.getElementById('para');
const animalName = document.getElementById('animal-name');
animalName.textContent = farmAnimal.name;

image.src = `../assets/${farmAnimal.type}.svg`;
paragraph.textContent = farmAnimal.says;
