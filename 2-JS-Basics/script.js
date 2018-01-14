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


// function calculateAge(yearOfBirth) {
//   var age = 2018 - yearOfBirth;
//   return age;
// }
// 
// var ageJerry = calculateAge(1988);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
 
// console.log(ageMike);

// function yearsUntilRetirement(name, yearOfBirth) {
//   var age = calculateAge(yearOfBirth);
//   var retirement = 60 - age;
// 
//   if (retirement > 0) {
//   console.log(name + ' retires in ' + retirement + ' years');  
// } else if (retirement === 0) {
//   console.log(name + ' retires in this year');
// } else {
//   console.log(name + ' is already retired');
// }  
// }
// 
// yearsUntilRetirement('Jerry', 1988);
// yearsUntilRetirement('Mike', 1958);
// yearsUntilRetirement('Mary', 1948);

// var names = ['Ravi', 'Anand', 'Prashant'];
// var years = new Array(1990, 1969, 1948);
// 
// console.log(years[2]);
// names[1] = 'Maulik';
// console.log(names[1]);
// 
// var ravi = ['Ravi', 'Saxena', 1990, 'Student', false];
// 
// ravi.push('yellow');
// ravi.unshift('Mr.');
// ravi.pop();
// ravi.shift();
// 
// if (ravi.indexOf('teacher') === -1) {
//   console.log('Ravi is not a teacher.');
// } else {
//   console.log('Ravi is a teacher.');
// }

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'techer',
//   isMarried: false
// };
// console.log(john.lastName);
// console.log(john['lastName']);
// 
// var abc = 'job';
// console.log(john[abc]);
// 
// john.lastName = 'Miller';
// john['job'] = 'programmer';
// 
// console.log(john);


// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane.job = 'retired';
// jane['isMarried'] = true;
// 
// console.log(jane);


// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'techer',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//       this.age = 2018 - this.yearOfBirth;
//     }
//   };
// john.calculateAge();
// console.log(john);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
 
// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 1; i < 5; i++) {
//   console.log(i);
//   if (i === 3) {
//     break;
//   }

// for (var i = 1; i < 5; i++) {
//     if (i === 3) {
//     continue;
//   } console.log(i);
// }