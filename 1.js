// Reverse an Array
function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function printArray(arr, n) {
    console.log(arr);
}

let arr = ["A", "R", "M", "A", "A", "N"];
let n = arr.length;
printArray(arr, n);
reverseArray(arr, 0, n - 1);
printArray(arr, n);