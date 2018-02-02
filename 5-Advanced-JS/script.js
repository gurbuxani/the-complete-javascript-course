// var john = {
//   name: 'John',
//   yearOfBirth: '1990',
//   job: 'techer'
// };
// 
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
// 
// Person.prototype.calculateAge = function () {
//   console.log(2018 - this.yearOfBirth);
// };
// 
// var john = new Person('John', 1990, 'techer');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1991, 'writer');
// 
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// 
// Person.prototype.lastName = 'Lovefam';
// 
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// }
// 
// var john = Object.create(personProto);

// var years = [1990, 1995, 2002, 1988, 1994];
// 
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;  
// 
// }
// 
// function calculateAge(el) {
//   return 2018 - el;
// }
// 
// function isFullAge(el) {
//   return el >= 18;
// }
// 
// function maxHeartRate(el) {
// if (el >= 18 && el <= 81) {
//   return Math.round(206.9 - (0.67 * el));
// } else {
//   return -1;
// }
// }
// 
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxHeartRate = arrayCalc(ages, maxHeartRate);
// 
// console.log(ages);
// console.log(fullAges);
// console.log(maxHeartRate);



function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log(name + ', what subjects do you teach?');
    }
  } else {
    return function(name) {
      console.log('What do you do, ' + name + '?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');