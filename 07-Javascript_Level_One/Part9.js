firstName = prompt("Hello and Welcome. Please enter your first name:")
lastName = prompt("Please enter your Last Name:")
age = prompt("How old are you?")
height = prompt("How tall are you in centimeters?")
petName = prompt("What is the name of your pet?")
alert("Thank you so much for the information.")

var condition1 = null
var condition2 = null
var condition3 = null
var condition4 = null


// condition1
if (firstName[0] === lastName[0]){
  condition1 = true
}
else {
  condition1 = false
}


// condition2
if (age > 20 && age < 30 ){
  condition2 = true
}
else {
  condition2 = false
}


// condition3
if (height > 170){
  condition3 = true
}
else {
  condition3 = false
}


// condition4
if (petName[petName.length-1] === "y"){
  condition4 = true
}
else {
  condition4 = false
}


// Final Condition
if (condition1 && condition2 && condition3 && condition4){
  console.log("Welcome Comrade! You've passed the Spy Test")
}
else {
  console.log("Sorry, nothing to see here.")
}
