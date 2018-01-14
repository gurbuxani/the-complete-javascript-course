function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
    ages.push(2018 - years[i]);
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] > 17) {
      fullAges.push(true);
      console.log('Person ' + (i + 1) + ' IS of full age and is ' + ages[i] + 'years old.');
    } else {
      fullAges.push(false);
      console.log('Person ' + (i + 1) + ' NOT of full age and is ' + ages[i] + 'years old.');
    }
  } return fullAges;
} 

var years = [1995, 1988, 2003, 1991, 2011, 1982, 1991];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

console.log(full_1);
console.log(full_2);
