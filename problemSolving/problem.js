function largest(arr1){
    var max = 0;
    var long = arr1.length;

    for (i = 0; i < long; i++){
        if(arr1[i] > max){
            max = arr1[i]
        }
        
    }

    return max
}




function lettersWithStrings(arr1, a)
    {
        for (let i = 0; i < arr1.length; i++){
            if(arr1[i].indexOf(a) > -1){
                console.log(arr1[i])
            }

            
        }


}

function isDivisible(num1, num2)
    {
        if (num1 % num2 === 0 ){
            console.log("true")
        } else {
            console.log("false")

        }
}

isDivisible(4,2)