// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPets } from '../utils.js';
import { pets } from '../pets.js';


const test = QUnit.test;

test('test pet render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><a href="./pets/?id=1"><h1>Arya</h1></a></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPets(pets[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
