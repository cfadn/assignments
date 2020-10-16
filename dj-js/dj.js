var block = document.getElementById("box")

block.addEventListener("mousedown", red)
block.addEventListener("mouseover", blue)
block.addEventListener("mouseup", yellow)
block.addEventListener("dblClick", green)
block.addEventListener("wheel", orange)
document.body.addEventListener("keypress", keysss)
   
function red(){
block.style.backgroundColor = "red"
}
function blue(){
    block.style.backgroundColor = "blue"
    }
function yellow(){
        block.style.backgroundColor = "yellow"
        }
function green(){
            block.style.backgroundColor = "green"
            }

function orange(){
                block.style.backgroundColor = "orange"
                }

function keysss(){
    var y = event.keyCode;
    if(y === 114){
        block.style.backgroundColor = "red"
    } else if(y === 98){
        block.style.backgroundColor = "blue"
    } else if(y === 121){
        block.style.backgroundColor = "yellow"
    } if(y === 103){
        block.style.backgroundColor = "green"
    } else if(y === 111){
        block.style.backgroundColor = "orange"
    }


}
//
//
//
//
//
//
//
//     function spew() {
 //   var x = document.getElementById("fname").value;
//    document.getElementById("wow").textContent = x;
//  }
//  document.getElementById("meow").addEventListener("click", spew)
//
