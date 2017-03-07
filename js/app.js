'use strict';

var answer = prompt('Do you think that trump will do alright?');
if (answer.toLowerCase() === 'yes' || 'y') {
  console.log('hm...I don\'t know about that... But you are entitled to your opinion my friend.');
} else if (answer.toLowerCase() === 'no' || 'n') {
  console.log('Alright, I\'m inclined to agree with you.');
} else {
  console.log('Let\'s get our thoughts and opinions in order shall we?');
};

var answer2 = prompt('Does Michael like dogs?');
if (answer2.toLowerCase() === 'yes' || 'y') {
  console.log('Wrong!');
} else if (answer2.toLowerCase() === 'no' || 'n') {
  console.log('Cats are easily the best and it can be no other way.');
} else {
  console.log('Yo, answer yes or no please.');
};

var answer3 = prompt('Does Michael like to play soccer?');
if (answer3.toLowerCase() === 'yes' || 'y') {
  console.log('Good guess! I see you were paying attention during our introductions.');
} else if (answer3.toLowerCase() === 'no' || 'n') {
  console.log('We should get to know eachother a little better it seems...');
} else {
  console.log('Yo, answer yes or no please.');
};
