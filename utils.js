export function renderPets(pets) {
    const div = document.createElement('div');
    div.classList.add('animal');

    const a = document.createElement('a');
    a.href = `./pets/?id=${pets.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = pets.name;

    const img = document.createElement('img');
    img.src = `../assets/${pets.image}.jpeg`;

    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    a.append(h1, img, p,);
    div.append(a);
    return div;
}

//findbyID
export function findById(id, data) {
    return data.find((item) => item.id === id);
}

