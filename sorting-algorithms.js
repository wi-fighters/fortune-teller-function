// set up our test array
const unsortedArray = [];

for (let i = 0; i < 999; i++) {
    // generate a random number and add it to unsortedArray
    unsortedArray.push(Math.floor(Math.random() * 999));
}

const bubbleSort = nums => {
    const sortedNums = nums;
    let passes = 0;
    let comparisons = 0;
    let swaps = 0;
    let temp = 0;

    // do as many passes as it takes for there to be no swaps
    do {
        passes += 1;
        swaps = 0;
        // compare each element to its neighbor
        for(let j = 0; j < nums.length - 1; j++) {
            comparisons += 1;
            // if they're not sorted (ascending), swap them
            if (nums[j] > nums[j + 1]) {
                temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;

                swaps += 1;
                console.log(`swapped ${nums[j]} and ${nums[j + 1]}!`);
            }
        }
    } while (swaps > 0);

    console.log(`
        For an array of length: ${nums.length},
        We did ${passes} passes
        with a total of ${comparisons} comparisons.
    `);

    return sortedNums;
};

const quickSortStats = {
    calls: 0,
    pushes: 0,
};

const quickSort = nums => {
    quickSortStats.calls += 1;
    if (nums.length <= 1) { 
		return nums;
	} else {

		const left = [];
		const right = [];
		const sortedNums = [];
		const pivot = nums.pop();
		const length = nums.length;

		for (let i = 0; i < length; i++) {
            quickSortStats.pushes += 1;
			if (nums[i] <= pivot) {
				left.push(nums[i]);
			} else {
				right.push(nums[i]);
			}
        }

        return sortedNums.concat(quickSort(left), pivot, quickSort(right));
	}
};


// console.log('\nBubble sort');
// console.log(bubbleSort(unsortedArray));

console.log('\nQuick sort');
console.log(quickSort(unsortedArray));
console.log(`total calls: ${quickSortStats.calls}`);
console.log(`total pushes into sub-arrays: ${quickSortStats.pushes}`);
