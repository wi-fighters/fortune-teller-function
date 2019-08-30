// omitting unnecessary 'else' blocks makes your code more readable.
// when you have a return statement in your 'if' block
// it's best practice to not use an 'else' block
// test yourself: try and explain why

const wantMilk = true;

console.log(getCoffee(wantMilk));

function getCoffee(milkOrder) {

    // from this
    // if (!milkOrder) {
    //     return  `Here's your black coffee`;
    // } else {
    //     return  `Here's your flat white`;
    // }

    // to this
    if (!milkOrder) {
        return  `Here's your black coffee`;
    }
    
    return  `Here's your flat white`;
}


// Test your understanding of 'hoisting':
// - can you explain why we can call getCoffee before we declare it?
// - can we use wantMilk before we declare it? why / why not?
// - how do const, let and var handle hoisting differently?

// Bonus question: when interviewers ask about const, let and var, they will also want you to mention:
// - how do const, let and var handle scope differently?

// Check this article for reference.
// The article talks about "window" which we haven't seen yet. Just think of window as the global scope.
// https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/
