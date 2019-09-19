// The goal:
// -----
// -----
// -----

let stitches = '';

// outer loop
// for every row...
for (let i = 0; i < 3; i += 1) {

    stitches = '';

    // inner loop
    // knit all the stitches
    for (let j = 0; j < 5; j += 1) {
        stitches += '-';
    }

    console.log(stitches);
}
