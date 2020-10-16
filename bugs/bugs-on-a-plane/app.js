const form = document.airline



form.addEventListener("submit", (event) => {
    event.preventDefault()
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
)


/*

var form = document.airline;
var submit = document.getElementById(submit);
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = {};
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("submit", formAlert);






*/