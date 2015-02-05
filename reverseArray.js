// Coded by Jared Smith
// CMP 237 Array Reversal Problem, Ch 4
// Coded on Feburary 4, 2015 CE

var reverseArray = function(array) {
  var newArray = []
  for (var i = array.length - 1; i >= 0; i--)
    newArray.push(array[i]);
  return newArray;
}
console.log(reverseArray(["A", "B", "C"]));
