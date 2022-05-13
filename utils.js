export function renderPets(pets) {
    const div = document.createElement('div');
    div.classList.add('animal');

    const a = document.createElement('a');
    a.href = `./pets/?id=${pets.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = pets.name;

    const img = document.createElement('img');
    img.src = `../assets/${pets.image}.jpeg`;
    img.classList.add('image');

    const img2 = document.createElement('img2');
    img.src = `../assets/${pets.image2}.jpeg`;
    img.classList.add('image2');

    const img3 = document.createElement('img3');
    img.src = `../assets/${pets.image3}.jpeg`;
    img.classList.add('image3');

    const img4 = document.createElement('img4');
    img.src = `../assets/${pets.image4}.jpeg`;
    img.classList.add('image4');

    const img5 = document.createElement('img5');
    img.src = `../assets/${pets.image5}.jpeg`;
    img.classList.add('image5'); 

    
    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    div.append(a);
    a.append(h1);
    return div;
}

//findbyID
export function findById(id, data) {
    return data.find((item) => item.id === id);
}

