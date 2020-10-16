for (var i = 0; i <= 9; i++){
    console.log(i)
}

for (var i = 9; i >= 0; i--){
    console.log(i)
}

//var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){

    console.log(fruit[i])
}

const newArr = []

for (var i = 0; i <= 9; i++){
    newArr.push(i)
}

console.log(newArr)

//Write a for loop that will push the numbers 0 through 9 to an array.
//Write a for loop that prints to the console only even numbers 0 through 100.
//Write a for loop that will push every other fruit to an array.
//var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}
const fruitArr = []
const fruit2Arr = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruit.length; i++){
    if (i % 2 === 0){
        fruitArr.push(fruit[i])
    }   else {
        fruit2Arr.push(fruit[i])
    }

}
console.log(fruitArr)
console.log(fruit2Arr)


/*

Write a loop that will print out all the names of the people of the people array
Write a loop that pushes the names into a names array, and the occupations into an occupations array.
Write a loop that pushes every other name to an array starting with the first person, in this case 
"Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".





*/



var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for ( var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
  }

  const nameArr = []
  const occuArr = []

  for ( var i = 0; i < peopleArray.length; i++){
   nameArr.push(peopleArray[i].name)
   occuArr.push(peopleArray[i].occupation)
}

for ( var i = 0; i < peopleArray.length; i++){
    if ( i % 2 === 0) 
        { nameArr.push(peopleArray[i].name)
     }

     if ( i % 2 === 1) 
        {occuArr.push(peopleArray[i].occupation)
     }
 }
 