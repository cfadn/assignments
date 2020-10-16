/* Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. 
Using a for loop within a for loop, create and return array that looks like this:

function forception(people, alphabet){
    // your code here
}
// Output: 
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
Here's the array of names and the alphabet to get you started:
*/

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetArr = alphabet.toLocaleUpperCase().split("")



function forception(people, alphabetArr){
    const newArr = []
    
    for (i = 0; i < people.length; i++){
        newArr.push(people[i])
        for ( j = 0; j < alphabetArr.length; j++){
            newArr.push(alphabetArr[j])
        }
    }
    return newArr
}
console.log(forception(people, alphabetArr))