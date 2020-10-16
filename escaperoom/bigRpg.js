const readline = require('readline-sync')

const badGuysArr = []

function badGuy(name, attack, damage, health){
    this.name = name;
    this.attack = attack;
    this.damage = badDamage();
    this.health = badHealth();
}

let dio = new badGuy("Dio", "Za Warudo")
let goblin = new badGuy("goblin", "club swang")
let aGun = new badGuy("A Gun", "bang bang")
badGuysArr.push(dio, goblin, aGun);

function badDamage(){
    return Math.floor(Math.random() * (30 - 5 + 1) + 5);
}

function badHealth(){
    return Math.floor(Math.random() * (70 - 50 + 1) + 50);
}
/*
==================================================================
*/
function playerDamage(){
    return Math.floor(Math.random() * (80 - 40 + 1) + 40);
}

function player(name, health, damage){
    this.name = name;
    this.health = health;
    this.damage = playerDamage();
}

function playerHeal(){
    let healing = Math.floor(Math.random() * (20 - 10 + 1) + 10)
    console.log(playa.name, " has healed for ", healing, " health points" )
    playa.health = playa.health + healing
    console.log("Current health is ", playa.health)
}

const inventory = []

const lootTable = ["self esteem", "a gun", "hatchet (book version)", "hatchet (hatchet version)", "knowledge", "~knowledge~"]

function looting(){
    let i = Math.floor(Math.random() * lootTable.length)
    inventory.push(lootTable[i])
    console.log("you have received", lootTable[i])
    console.log(inventory[0])
}
/*
==================================================================
NAVIGATION
==================================================================
*/

/*
==================================================================
*/
function encounter(){
    let danger = Math.floor(Math.random() * 3)
    return danger
}
const danger = encounter()
console.log("You are now trapped in a mystical world of 1s and 0s, or ls and Os if you forgot your reading glasses or attention span.")
console.log("A wilderness of ferociousness and pseudo randomly distributed and oddly thematic enemies surround you.") 
console.log("Your job? You must press W, and sometimes 1 or 2 depending on your patience.")
const yourName = readline.question("Now, what is your name?  ")
console.log("Well", yourName + ",", "you could've picked anything but whatever. Press W or something.")


let playa = new player(yourName, 100)
function battle(){
   /* console.log(badGuysArr[danger].health)
    console.log(playa.damage)
    let result = badGuysArr[danger].health - playa.damage
    badGuysArr[danger].health = result
    if(result > 0){
        console.log("hp left is", result)
        console.log(badGuysArr[danger].name, " hits you wit da ", badGuysArr[danger].attack)
        let antiResult = playa.health - badGuysArr[danger].damage
        console.log(playa.name, " took ", antiResult, " damage")
    } else { console.log(result,"they dead")} */
    while(playa.health > 0){
            
             console.log(badGuysArr[danger].name, " has ", badGuysArr[danger].health, " health points.")
           
             console.log(playa.name, " unleashes mad finesse for ", playa.damage, " damage.")
       
         let result = badGuysArr[danger].health - playa.damage
       
        badGuysArr[danger].health = result
        
        if(result <= 0){
            console.log(badGuysArr[danger].name, "has died" )
            playerHeal()
            looting()
            return walking()
        } else {console.log("hp left is", result)
        
            }
    
                console.log(badGuysArr[danger].name, " hits you wit da ", badGuysArr[danger].attack) 
        
        let antiResult = playa.health - badGuysArr[danger].damage
            
                console.log(playa.name, " took ", badGuysArr[danger].damage, " damage")
        
            playa.health = antiResult
            
                console.log(playa.name, " has ", playa.health, " left.")
        if ( playa.health <= 0){
            console.log("you died lol")
        }
    }
}

//write a while loop that takes player health into account, and runs the battle accordingly. ie while player.health > 0
/*const walk = readline.question("1. W to walk ", {limit: "w"})*/
walking()


//const surpriseAttack = encounter()
//const danger = encounter()
function walking(){
    const walk = readline.question("1. W to walk ", {limit: "w"})
    if(encounter() === 2){
            console.log("you are under attack by ", badGuysArr[danger].name)
            let action = readline.question("Would you like to: 1. Attack or 2. Run like a loser ", {limit: ['1','2']})
            if(action === "1"){
                console.log("here we go again")
                battle()
            } else { console.log("loser")}
    } else {
        console.log("you move forward")
        return walking()
    }
    
    
}
/*walking()


function walking(){
    if (walk === "w"){
        console.log("onward")
    } else {console.log("Only W bro")
    return walk }
}

if (walk === "w", "W"){
    console.log("onward")
} else {console.log("Only W bro")}*/







//Note: added damage function to constructor to see if it preserves damage


