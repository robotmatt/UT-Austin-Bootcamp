// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var numbers = [];
process.argv.forEach(function (element, index) {
    if (index != 0 && index != 1) {
        numbers.push(element);
    }
});

numbers.sort((a, b) => a - b);
console.log(numbers);