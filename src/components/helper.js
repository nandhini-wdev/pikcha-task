// Task 1
export const solution = (arr) => {
    for (let i = 1; i < 1000000; i++) {
        if (!arr.includes(i)) return i;
    }
}

// Task 2
export const sumThreeNumber = (arr, targetSum) => {
    arr.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        let leftPointer = i + 1;
        let rightPointer = arr.length - 1;
        while (leftPointer < rightPointer) {
            const currentSum = arr[i] + arr[leftPointer] + arr[rightPointer];
            if (currentSum === targetSum) {
                result.push([arr[i], arr[leftPointer], arr[rightPointer]]);
                leftPointer++;
                rightPointer--;
            } else if (currentSum < targetSum) {
                leftPointer++;
            } else if (currentSum > targetSum) {
                rightPointer--;
            }
        }
    }
    return result;

    // I have used two pointers strategy
    // Time and Space Complexity 
    // Time: O(n ^ 2)
    // Space: O(n)(where n is the number of elements in an array)
}