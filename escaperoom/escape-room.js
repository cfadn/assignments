const readline = require('readline-sync')
const name = readline.question("What is your name? ");

console.log(name, ", you are trapped in a roome and have 3 options:")
console.log("1. Put hand in hole")
console.log("2. Find the key")
console.log("3. Open the door")
const response = readline.question("Which do you choose? ")

if (response === "1"){
    console.log("Oh wow great idea 'whoa this hole is hand sized better wear it like a glove' you're dead bro")
} else if (response === "3"){
    console.log("door is locked")
} else if (response === "2"){
    console.log("you have received the key")
} else {console.log("please respond with 1,2, or 3")}

while (response === "2"){
    console.log(name, "choose wisely")
    console.log("1. Put hand in hole")
    console.log("2. Open the door")
    const response2 = readline.question("Which do you choose?")
    if (response2 === "2"){
       return console.log("you are free")
    } else if (response2 === "1"){
        return console.log("deathlol")
    } else {console.log("please choose 1 or 2")}
}