// set up our test array
const unsortedArray = [];

for (let i = 0; i < 99; i++) {
    // generate a random number and add it to unsortedArray
    unsortedArray.push(Math.floor(Math.random() * 99));
}

// set up bubble sort and keep track of its stats
const bubbleSortStats = {
    inputLength: unsortedArray.length,
    passes: 0,
    comparisons: 0,
};

const bubbleSort = nums => {
    const sortedNums = nums;
    let swaps = 0;
    let temp = 0;

    // do as many passes as it takes for there to be no swaps
    do {
        bubbleSortStats.passes += 1;
        swaps = 0;
        // compare each element to its neighbor
        for(let j = 0; j < nums.length - 1; j++) {
            bubbleSortStats.comparisons += 1;
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

    return sortedNums;
};

// set up quick sort and keep track of its stats
const quickSortStats = {
    inputLength: unsortedArray.length,
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


// run the algorithms


// a) what is the exact time now?
const beforeBubbleSort = new Date();
console.log(beforeBubbleSort);

console.log('\nBubble sort');
console.log(bubbleSort(unsortedArray));


// b) what is the exact time now?

console.log('\nQuick sort');
console.log(quickSort(unsortedArray));


// c) what is the exact time now?

// log the difference between b and a (how long did bubble sort take?)

// log the difference between c and b (how long did quick sort take?)









// log their stats
console.log(`
    Bubble sort:
    For an array of length: ${bubbleSortStats.inputLength},
    We did ${bubbleSortStats.passes} passes
    with a total of ${bubbleSortStats.comparisons} comparisons.
`);

console.log(`
    Quick sort:
    For an array of length: ${quickSortStats.inputLength},
    We did ${quickSortStats.calls} calls
    with a total of ${quickSortStats.pushes} pushes.
`);


// try some experiments on this new Date object
console.log('beforeBubbleSort:', beforeBubbleSort);
console.log('beforeBubbleSort * 1:', beforeBubbleSort * 1);
console.log('typeof beforeBubbleSort:',typeof beforeBubbleSort);
console.log('beforeBubbleSort instanceof Date:',beforeBubbleSort instanceof Date);
