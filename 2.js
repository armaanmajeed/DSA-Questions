// Maximum and Minimum of an array using minimum nuber of comparisons
function getMin(arr, n) {
    let min;
    if (n === 1) {
        min = arr[0];
    }
    if (arr[0] > arr[1]) {
        min = arr[1];
    } else {
        min = arr[0];
    }
    for (let i = 2; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMax(arr, n) {
    let max;
    if (n === 1) {
        max = arr[0];
    }
    if (arr[0] > arr[1]) {
        max = arr[0];
    } else {
        max = arr[1];
    }
    for (let i = 2; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [1000, 11, 445, 1, 330, 3000];
let n = arr.length;
console.log(`Minimum Element is: ${getMin(arr, n)}`);
console.log(`Maximum Element is: ${getMax(arr, n)}`);