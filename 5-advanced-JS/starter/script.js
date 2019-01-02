/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return "Out of Range";
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');


// IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);  
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);  
})(1);

*/

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
*/

/*
var retirementUS = retirement(66);
retirementUS(1991);

retirement(66)(1991);

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}



function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is');
        }
        else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
        }
        else {
                console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestion('designer')('David');

// Bind, Call, Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);



(function() {


function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for (var i =0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer!');
    }
    else {
        console.log('Wrong answer!');
    }
}

var question1 = new Question('When is Christmas Day?', ['December 1st', 'December 31st', 'December 25th'], 2);
var question2 = new Question('When is New Year\'s Eve?', ['December 1st', 'December 31st', 'December 25th'], 1);
var question3 = new Question('When is the day before my birthday?', ['December 1st', 'December 31st', 'December 25th'], 0);

var questions = [question1,question2,question3];

var selector = Math.floor(Math.random() * 3) + 1;

questions[selector].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer:'));

questions[selector].checkAnswer(answer);

})();

*/


(function() {


function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for (var i =0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    
    if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callback(true);
    }
    else {
        console.log('Wrong answer!');
        
        sc = callback(false);
    }
    
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('-------------------');
}

var question1 = new Question('When is Christmas Day?', ['December 1st', 'December 31st', 'December 25th'], 2);
var question2 = new Question('When is New Year\'s Eve?', ['December 1st', 'December 31st', 'December 25th'], 1);
var question3 = new Question('When is the day before my birthday?', ['December 1st', 'December 31st', 'December 25th'], 0);

var questions = [question1,question2,question3];
    
function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}
    
var keepScore = score();
    
function nextQuestion() {

    var selector = Math.floor(Math.random() * questions.length);

    questions[selector].displayQuestion();

    var answer = (prompt('Please select the correct answer:'));

    if(answer !== 'exit') {
        
        questions[selector].checkAnswer(parseInt(answer),(keepScore));
    
        nextQuestion();
    }
}

    nextQuestion();
})();






