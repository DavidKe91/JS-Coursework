var i = 23;

for (var i = 0; i< 5; i++) {
    console.log(i);
}

console.log(i);

// Blocks and IIFEs

{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);

// Strings

let firstName = 'John';
let lastName = 'Kennedy';
const yearOfBirth = 1989;
function calcAge(year) {
    return 2019 - year;
}

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. In August he will be ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('dy'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

// Arrow Functions

const years = [1990, 1965, 1982, 1991];

// ES5

var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6

let ages6 = years.map(el => 2016 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

// Arrow functions 2

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();


// ES6
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}
box66.clickMe();
*/


function Person(name) {
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
       return this.name + ' is friends with '  + el;
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map( el => 
    `${this.name} is friends with ${el}`);
    
    console.log(arr);
}

new Person('Mike').myFriends6(friends);