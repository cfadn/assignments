// Written by Kent, Clark

var enemies=["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function winner(kryptonite, enemies)
{
if (!kryptonite)
{
    return "Superman beats " + enemies + ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemies +" could possibly win this one.";
}
    }

for (var i = 0; i<enemies.length; i++)
{
    var kryptonite;
    if (i%2 === 0) {
        kryptonite = true;
    } else {
        kryptonite = false;
    }
    console.log(winner(kryptonite,enemies[i]));
}

function loisAttraction ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
}

console.log( loisAttraction ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");}}
// © 2020 GitHub, Inc.