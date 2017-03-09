// // //CONFIGURATION// // //

'use strict';

// // // GLOBAL VARIABLES// // //
var userNamePrompt = 'Hello, would you mind providing your name?';
var userName = prompt(userNamePrompt);
var modUserName = userName[0].toUpperCase() + userName.slice(1, userName.length).toLowerCase();
var namePromptReply = 'Thank you, ' + modUserName + ' for providing your name';
alert(namePromptReply);
console.log('The user\'s name is ' + modUserName + '.');
var userScore = 0;

// // //FUNCTIONS// // //

// QUESTION1

function question1 () {
  var question1 = 'Does Michael think that trump is a good president?';
  var answer1 = prompt(question1);

  if (answer1 === null) {
    var userCancel = 'You can play the guessing game another time. Enjoy the site, ' + modUserName + ' .:)';
    console.log(userCancel);
    alert(userCancel);
  }

  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    var trueResponse = 'hm...I don\'t know about that... But you are entitled to your opinion my friend.';
    console.log(trueResponse);
    alert(trueResponse);
    userScore++;
  } else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    var falseResponse = 'Alright, I\'m inclined to agree with you.';
    console.log(falseResponse);
    alert(falseResponse);
  } else {
    var otherResponse = 'Yo, answer yes or no please.';
    console.log(otherResponse);
    alert(otherResponse);
  }
}

// QUESTION2

function question2 () {
  var question2 = 'Does Michael like dogs?';
  var answer2 = prompt(question2);

  if (answer2 === null) {
    var userCancel = 'You can finish playing the guessing game another time. Enjoy the site, ' + modUserName + ' .:)';
    console.log(userCancel);
    alert(userCancel);
  }

  if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    var trueResponse = 'Wrong! Go suck a lemon.';
    console.log(trueResponse);
    alert(trueResponse);
    userScore++;
  } else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    var falseResponse = 'That\'s right! Cats are easily the best and it can be no other way.';
    console.log(falseResponse);
    alert(falseResponse);
  } else {
    otherResponse = 'Yo, answer yes or no please.';
    console.log(otherResponse);
    alert(otherResponse);
  }
}

// QUESTION3
function question3 () {
  var question3 = 'Does Michael like to play soccer?';
  var answer3 = prompt(question3);
  if (answer3 === null) {
    var userCancel = 'You can finish playing the guessing game another time. Enjoy the site, ' + modUserName + ' .:)';
    console.log(userCancel);
    alert(userCancel);
  }

  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    var trueResponse = 'Good guess! I see you were paying attention during our introductions.';
    console.log(trueResponse);
    alert(trueResponse);
    userScore++;
  } else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
    var falseResponse = 'We should get to know eachother a little better it seems...';
    console.log(falseResponse);
    alert(falseResponse);
  } else {
    otherResponse = 'Yo, answer yes or no please.';
    console.log(otherResponse);
    alert(otherResponse);
  };
}

// QUESTION4

function question4 () {
  var question4 = 'Is Michael married?';
  var answer4 = prompt(question4);
  if (answer4 === null) {
    var userCancel = 'You can finish playing the guessing game another time. Enjoy the site, ' + modUserName + ' .:)';
    console.log(userCancel);
    alert(userCancel);
  }

  if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    var trueResponse = 'YEAH YEAH YEAH, I am married to a beautiful Filipina woman.';
    console.log(trueResponse);
    alert(trueResponse);
    userScore++;
  } else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
    var falseResponse = 'Sorry, that\'s not right. Though, while I love being married, there ARE days I wish I was single... ';
    console.log(falseResponse);
    alert(falseResponse);
  } else {
    otherResponse = 'Yo, answer yes or no please.';
    console.log(otherResponse);
    alert(otherResponse);
  }
}

// QUESTION5

function question5 () {
  var question5 = 'Does Michael have a child?';
  var answer5 = prompt(question5);
  if (answer5 === null) {
    var userCancel = 'You can finish playing the guessing game another time. Enjoy the site, ' + modUserName + ' .:)';
    console.log(userCancel);
    alert(userCancel);
  }

  if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
    var trueResponse = 'That\'s right! I have an adorable little girl.';
    console.log(trueResponse);
    alert(trueResponse);
    userScore++;
  } else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    var falseResponse = 'We REALLY need to get to know eachother better. I have a little girl. She\'s a real sweetheart';
    console.log(falseResponse);
    alert(falseResponse);
  } else {
    otherResponse = 'Yo, answer yes or no please.';
    console.log(otherResponse);
    alert(otherResponse);
  }
}

// QUESTION6

function question6 () {
  var today = new Date();
  var year = today.getFullYear() - 1;
  var correctAnswer = (year - 1986);
  var attempts = 0;

  for (var attempts = 3; attempts >= 0; attempts--) {
    var question6 = 'How old is Michael? You have ' + [attempts + 1] + ' attempts.';
    var answer6 = prompt(question6);

    if (parseInt(answer6) === correctAnswer) {
      var trueResponse = 'HOLY %$#^, great guess!';
      console.log(trueResponse);
      alert(trueResponse);
      userScore++;
      break;
    }
    else if (answer6 > correctAnswer) {
      var tooHigh = 'Too high. You have ' + [attempts] + ' attempts remaining.';
      console.log(tooHigh);
      alert(tooHigh);
    } else if (answer6 < correctAnswer) {
      var tooLow = 'Too low. You have ' + [attempts] + ' attempts remaining.';
      console.log(tooLow);
      alert(tooLow);
    }
  }

  if (attempts === -1) {
    var fail = 'You\'re all out of attempts. Better luck next time!';
    console.log(fail);
    alert(fail);
  }
}

// QUESTION7

function question7 () {
  var correctAnswer = ['Tahiti','Hawaii','Japan'];
  var question7 = 'What is one of Michael\'s top 3 travel destinations? You have 6 attempts to guess just one of the destinations. Good luck!';

  for (var attempts = 5; attempts >= 0; attempts--) {
    var answer7 = prompt(question7);
    var modAnswer7 = answer7[0].toUpperCase() + answer7.slice(1, answer7.length).toLowerCase();

    if (correctAnswer.includes(modAnswer7)) {
      var trueResponse = 'I\'m impressed, you got one!';
      console.log(trueResponse);
      alert(trueResponse);
      userScore++;
      break;
    } else {
      var badAnswer = 'Just plain wrong. You have ' + [attempts] + ' attempts remaining.';
      console.log(badAnswer);
      alert(badAnswer);
    }

    if (attempts === 0) {
      var fail = 'You\'re all out of attempts. Better luck next time!';
      console.log(fail);
      alert(fail);
    }
  }

  alert('Here are the answers in order of most desirable to least.');

  for (var j = 0; j < correctAnswer.length; j++){
    console.log(correctAnswer[j]);
    alert('Answer ' + (j + 1) + ': ' + correctAnswer[j]);
  }
}

// USERREPORT

function userReport() {
  if (userScore === 7) {
    var scorePerfect = 'You may know me too well, ' + modUserName + '...You got 7 out of 7!';
    alert(scorePerfect);
    console.console.log(scorePerfect);
  } else if (userScore < 7 && userScore > 4) {
    var scoreMedium = 'You know me about as well as the average person, ' + modUserName + '. You scored ' + userScore + ' out of 7. Good job!';
    alert(scoreMedium);
    console.log(scoreMedium);
  } else if (userScore < 5) {
    var scoreLow = 'Hm...This is awkward, ' + modUserName + '. You scored ' + userScore + ' out of 7. Perhaps we need to hang out.';
    alert(scoreLow);
    console.log(scoreLow);
  }
}

// // // CALLS// // //

console.log(question1());
console.log(question2());
console.log(question3());
console.log(question4());
console.log(question5());
console.log(question6());
console.log(question7());
console.log(userReport());
