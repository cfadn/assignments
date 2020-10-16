var words = ""
function changecase(words){
  var upper = words.toUpperCase()
  var lower =  words.toLowerCase()
  console.log(upper + lower)
}

changecase("how")



var leString = ""


function findMiddleIndex(leString){
    var shorter = leString.length / 2
    var result = Math.floor(shorter)
    console.log(result)
}



var neuString = ""


function firstHalf(neuString){
    var leResult = neuString.slice(0, neuString.length / 2)
    console.log(leResult)
}


var leuString = ""


function firstHalf(leuString){
    var divigg = leuString.length / 2
    
    var leResult1 = leuString.slice(0, divigg).toLowerCase()
    var leResult2 = leuString.slice(divigg, -1).toUpperCase()

    console.log(leResult1)
    console.log(leResult2)
}
