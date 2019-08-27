/**
 * This is a fortune teller function.
 * Why pay a fortune teller when you can just program your fortune yourself?
 *
 * @param {number} numberOfChildren
 * @param {string} partnerName
 * @param {string} geoLocation
 * @param {string} jobTitle
 *
 * @example
 * 
 *     tellFortune(5, 'partnerino', 'someplace', 'best job ever')
 */

// I want this kind of function to just return something,
// And not have any console.logs (we're only using those for testing)

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

console.log(tellFortune(5, 'partnerino', 'someplace', 'best job ever'));
