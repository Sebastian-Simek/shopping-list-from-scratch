// IMPORT MODULES under test here:
import { renderList } from '../render-utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing ul render', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li>4: apples</li></ul>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderList({ qty: 4, name: 'apples' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
