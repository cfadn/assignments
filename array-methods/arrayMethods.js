/*
After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it.
If you've done everything correctly, the last step should print the following string to the console:

3,pepper,1,watermelon,orange,apple

*/




var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()

var orangeNum = fruit.indexOf("orange")

fruit.push(orangeNum)

var vegLong = vegetables.length
vegetables.push(vegLong)

var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
food.join
var foodstring = food.join(",")
console.log(foodstring)