var header = document.getElementById("header")

const wow = document.createElement("h1")
const wow2 = document.createElement("h3")
const span = document.createElement("span")

header.style.textAlign = "center"

span.style.color = "firebrick"
span.innerText = "Colin"

wow2.innerText = " wrote this Javascript"
wow.innerText = "The header is here"

header.append(wow)
header.append(wow2)
wow2.prepend(span)  

const clear = document.getElementById("clear-button")


function erase(){
    const messages = document.getElementsByClassName("messages")[0];
    const chillen = messages.getElementsByTagName("div");
    for (let i = 0; i = chillen.length; i++){
    messages.removeChild(messages.childNodes[i])
    }
}
clear.addEventListener("click", erase)


var drop = document.getElementById("theme-drop-down")
var side1 = document.getElementsByClassName("message right")
var side2 = document.getElementsByClassName("message left")

drop.addEventListener("select", choose)
function choose(){
    let redblack = document.getElementById("theme-drop-down").value
if (drop.options = redblack){
for (let i = 0; i < side1.length; i++){
    side1[i].style.backgroundColor = "red"
}
for (let i = 0; i < side2.length; i++){
    side2[i].style.backgroundColor = "black"
}
} else if (drop.value="theme-two"){
    for (let i = 0; i < side1.length; i++){
        side1[i].style.backgroundColor = "blue"
    }
    for (let i = 0; i < side2.length; i++){
        side2[i].style.backgroundColor = "burlywood"
    }

}
}