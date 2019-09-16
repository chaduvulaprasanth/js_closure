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

// 6
function storyWriter(){
    var obj = {
       words: "",
       addWords: function(word){
                   obj.words += word;
                   return obj.words;
               },
       erase: function (q){
               obj.words = "";
               return obj.words;
       }
    };
       return obj;
   
   }
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
    
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''