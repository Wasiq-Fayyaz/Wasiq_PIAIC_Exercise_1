//Question 33 (Ordinal Number)
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your 
// output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a 
// separate line
var ordinal_numbers;
ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i <= ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] === 1) {
        console.log(ordinal_numbers[i] + "st");
    }
    else if (ordinal_numbers[i] === 2) {
        console.log(ordinal_numbers[i] + "nd");
    }
    else if (ordinal_numbers[i] === 3) {
        console.log(ordinal_numbers[i] + "rd");
    }
    else if (ordinal_numbers[i] >= 4) {
        console.log(ordinal_numbers[i] + "th");
    }
}
