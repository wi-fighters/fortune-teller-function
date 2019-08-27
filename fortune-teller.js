/**
 * This is a fortune teller function.
 * Why pay a fortune teller when you can just program your fortune yourself?
 *
 * @param {number} numberOfChildren
 * @param {string} partnerName
 * @param {string} geoLocation
 * @param {string} jobTitle
 * 
 * @return {string} TODO: what are we returning?
 *
 * @example
 * 
 *     tellFortune(5, 'partnerino', 'someplace', 'best job ever')
 */

 // the function signature is an instruction for how the func should be called
function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
    // in the background JS is running something like this:
    // var numberOfChildren = 5;
    // var partnerName = 'partnerino';
    // var geoLocation = 'someplace';
    // var jobTitle = 'best job ever';

    // you can define variables inside a function,
    // as long as their names don't conflict withe the params
    let greeting = 'Howdy';
    if (partnerName[0] === 'p') {
        greeting = 'Hello i know what letter your name starts with';
    }



    console.log(`${greeting} ${partnerName}`);
}

// test only
// we think of the function call as 'the user'
// the function call must follow the instruction set in the function signature
tellFortune(5, 'partnerino', 'someplace', 'best job ever');





// console.log(/* TODO: add function call here */);
