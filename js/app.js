'use strict';

// Question 1

var question1 = 'Does Michael think that trump is a good president?';
var answer1 = prompt(question1);
if ( answer1 === null) {
  var userCancel = 'You can play the guessing game another time. :)';
  console.log(userCancel);
  alert(userCancel);
}

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
}

// Question 2

var question2 = 'Does Michael like dogs?';
var answer2 = prompt(question2);

if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  trueResponse = 'Wrong! Go suck a lemon.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  falseResponse = 'That\'s right! Cats are easily the best and it can be no other way.';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 3

var question3 = 'Does Michael like to play soccer?';
var answer3 = prompt(question3);

if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  trueResponse = 'Good guess! I see you were paying attention during our introductions.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  falseResponse = 'We should get to know eachother a little better it seems...';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 4

var question4 = 'Is Michael married?';
var answer4 = prompt(question4);

if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  trueResponse = 'YEAH YEAH YEAH, I am married to a beautiful Filipina woman.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  falseResponse = 'Sorry, that\'s not right. Though, while I love being married, there ARE days I wish I was single... ';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 5

var question5 = 'Does Michael have a child?';
var answer5 = prompt(question5);

if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  trueResponse = 'That\'s right! I have an adorable little girl.';
  console.log(trueResponse);
  alert(trueResponse);
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  falseResponse = 'We REALLY need to get to know eachother better. I have a little girl. She\'s a real sweetheart';
  console.log(falseResponse);
  alert(falseResponse);
} else {
  otherResponse = 'Yo, answer yes or no please.';
  console.log(otherResponse);
  alert(otherResponse);
};

// Question 6

var today = new Date();
var year = today.getFullYear() - 1;
var correctAnswer = (year - 1986);

for (var i = 3; i >= 0; i--) {
  var question6 = 'How old is Michael? You have ' + [i + 1] + ' attempts.';
  var answer6 = prompt(question6);
  if (parseInt(answer6) === correctAnswer) {
    var trueResponse = 'HOLY %$#^, great guess!';
    console.log(trueResponse);
    alert(trueResponse);
    break;
  }
  else if (answer6 > correctAnswer) {
    var tooHigh = 'Too high. You have ' + [i] + ' attempts remaining.';
    console.log(tooHigh);
    alert(tooHigh);
  } else if (answer6 < correctAnswer) {
    var tooLow = 'Too low. You have ' + [i] + ' attempts remaining.';
    console.log(tooLow);
    alert(tooLow);
  }
}

if (i === -1) {
  var fail = 'You\'re all out of attempts. Better luck next time!';
  console.log(fail);
  alert(fail);
}

// Question 7
// add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

var correctAnswer = ['Tahiti','Hawaii','Las Vegas'];

for (var i = 5; i >= 0; i--) {
  var question7 = 'What is one of Michael\'s top 3 travel destinations? You have ' + [i + 1] + ' attempts to guess just one of the destinations. Good luck!';
  var answer7 = prompt(question7);
  if (answer7 === correctAnswer) {
    var trueResponse = 'I\'m impressed, you got one!';
    console.log(trueResponse);
    alert(trueResponse);
    break;
  } else {
    var badAnswer = 'Just plain wrong. You have ' + [i] + ' attempts remaining.';
    console.log(badAnswer);
    alert(badAnswer);
  }

  if (i === -1) {
    var fail = 'You\'re all out of attempts. Better luck next time!';
    console.log(fail);
    alert(fail);
  }
}

// Count of Answers
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
