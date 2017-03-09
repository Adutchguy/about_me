'use strict';

// Question 1

var question1 = 'Does Michael think that trump is a good president?';
var answer1 = prompt(question1);

if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  var trueResponse = 'hm...I don\'t know about that... But you are entitled to your opinion my friend.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  var falseResponse = 'Alright, I\'m inclined to agree with you.';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  var otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 2

var question2 = 'Does Michael like dogs?';
var answer2 = prompt(question2);

if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  var trueResponse = 'Wrong! Go suck a lemon.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  var falseResponse = 'That\'s right! Cats are easily the best and it can be no other way.';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  var otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 3

var question3 = 'Does Michael like to play soccer?';
var answer3 = prompt(question3);

if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  var trueResponse = 'Good guess! I see you were paying attention during our introductions.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  var falseResponse = 'We should get to know eachother a little better it seems...';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  var otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 4

var question4 = 'Is Michael married?';
var answer4 = prompt(question4);

if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  var trueResponse = 'YEAH YEAH YEAH, I am married to a beautiful Filipina woman.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  var falseResponse = 'Sorry, that\'s not right. Though, while I love being married, there ARE days I wish I was single... ';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  var otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 5

var question5 = 'Does Michael have a child?';
var answer5 = prompt(question5);

if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  var trueResponse = 'That\'s right! I have an adorable little girl.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  var falseResponse = 'We REALLY need to get to know eachother better. I have a little girl. She\'s a real sweetheart';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  var otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};
