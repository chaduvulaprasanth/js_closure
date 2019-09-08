// 1
function nonsense(string){
    var blab = function(){
        alert(string);
    };
    blab();
}
nonsense("I am string");

// 2
setTimeout(nonsense, 5000,"I am string")

// 3
function nonsense(string){
    function blab(){
        alert(string);
    }
    return blab;
}
var blabLater = nonsense("first");
var blabAgainLater = nonsense("second")

// 4
blabLater()
// output is an alert message that shows first
blabAgainLater()
// output is an alert message that shows second

// 5
var lastNameTrier = function(firstName){
    //does stuff

     var innerFunction = function(lastName) {
        console.log(firstName + lastName);
     };
     //maybe returns something here
     return innerFunction;
 };
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'
firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne'); //logs 'Farmer Lynne'