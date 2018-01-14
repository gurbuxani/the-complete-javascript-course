// test
// var name = 'John';
// console.log(name);
//
// var lastName = 'Smith';
// console.log(lastName);
//
// var age = 26;
// console.log(age);
//
// var fullAge = true;
// console.log(fullAge);
// var name = 'John';
// var lastName = 'Smith';
// var age = 26;
// var fullAge = true;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;
//
// console.log(name + ' is a ' + age + '-year-old ' + job + '. Is he married? ' + isMarried + '.');
//
// age = 'thirty-six';
// job = 'driver';
// console.log(name + ' is a ' + age + '-year-old ' + job + '. Is he married? ' + isMarried + '.');
//
// var lastName = prompt('What is the last name?');
// console.log(name + ' ' + lastName + ' is a ' + age + '-year-old ' + job + '. Is he married? ' + isMarried + '.');
//
// alert(name + ' ' + lastName + ' is cute.');

// var now = 2018;
// var birthYear = now - 26;
//
// birthYear = now - 26 * 2;
//
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = (5 + 3) * 4 - 6;
// console.log(ageJohn);

// var name = 'John';
// var age = 12;
// var isMarried = 'no';
// 
// if (isMarried === 'yes') {
//   console.log(name + ' is married.');
// } else console.log(name + ' is not married');
// 
// isMarried = true;

//   if (isMarried) {
//     console.log('YES!');
// } else console.log('Nope :(');

// if (isMarried) console.log('YES!');

// var age = 25;
// 
// if (age < 20) {
//   console.log('John is a teenager');
// } else if (age > 20 && age < 30) {
//   console.log('John is a young man.');
// } else console.log('John is a man.');
// 
// var job = 'actor';
// 
// job = prompt('What does John do?')
// 
// switch (job) {
//   case 'teacher':
//     console.log('John teches kids.');    
//     break;
// 
//   case 'driver':
//     console.log('John drives a car.');
//     break;
// 
//   case 'Copywriter':
//     console.log('John writes copy.');
//     break;
// 
//   default:
//     console.log('John\'s job is unkown.' );
// }


function calculateAge(yearOfBirth) {
  var age = 2018 - yearOfBirth;
  return age;
}

var ageAshwin = calculateAge(1988);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageMike);

function yearsUntilRetirement(yearOfBirth) {
  
}

yearsUntilRetirement(1988);