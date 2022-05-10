export function renderPets(pets) {
    const div = document.createElement('div');
    div.classList.add('animal');

    const h1 = document.createElement('h1');
    h1.textContent = pets.name;

    const img = document.createElement('img');
    img.src = pets.image;

    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    div.append(h1, img, p,);
    return div;
}

//findbyID
export function findById(id, data) {
    return data.find((item) => item.id === id);
}