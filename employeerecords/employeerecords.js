const employees = []

function employee(name, jobTitle, salary, status){
    status = "Full Time"
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    employees.push
}


employee.prototype.printEmployeeForm = function (){
    console.log("Name: ", this.name, " Job Title: ", this.jobTitle, " Salary: ", this.salary, " Status: ", this.status)
}


var jimmy = new employee("jimmy", "pimp", "$50,000")
jimmy.status = "broke"

employees.push(jimmy)