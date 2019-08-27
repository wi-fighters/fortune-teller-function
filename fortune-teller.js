/**
 * This is a fortune teller function.
 * Why pay a fortune teller when you can just program your fortune yourself?
 *
 * @param {number} numberOfChildren
 * @param {string} partnerName
 * @param {string} geoLocation
 * @param {string} jobTitle
 * 
 * @return {string} fortune
 *
 * @example
 * 
 *     tellFortune(5, 'partnerino', 'someplace', 'best job ever')
 */

// I want this kind of function to just return something,
// And not have any console.logs (we're only using those for testing)

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
    // Step three: When we're finished testing, delete the console.log
    // we're examining 4 different expressions here
    console.log(numberOfChildren, partnerName, geoLocation, jobTitle);

    // Step two: what do I need to have ready, to get the result I want?
    const fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    // Step one: define what I want returned
    return fortune;
}

// we're passing 4 expressions to tellFortune
// we're passing 2 expressions to console.log
// these are nested function calls
// as each one is called, it gets pushed onto the top of the call stack
console.log(tellFortune(5, 'partnerino', 'someplace', 'best job ever'));

