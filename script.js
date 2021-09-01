let arr = [4, 5, 20, 6, 7, 8, 9, 10];
maxValue = 0;

arr.forEach(function (number) {
  if (maxValue < number) {
    maxValue = number;
  }
});

console.log("Array max number: " + maxValue);

function recursion(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr[1] < arr[0]) {
    arr[1] = arr[0];
  }
  arr = arr.splice(1);
  return recursion(arr);
}

recursion(arr);
