// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { pets } from './pets.js';

const test = QUnit.test;

test('test pet render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h1>Arya</h1><img src="../assets/arya.jpeg"><p>Arya is 7 and is a CoonHound</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPets(pets[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
