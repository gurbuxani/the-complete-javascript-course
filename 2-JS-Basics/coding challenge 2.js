function printFullAge(years) {
  var ages = []; // to store ages based on data from years array
  var fullAges = []; // to store corresponding boolean values, for whether or not the persons are of full age ( > 18 years old)

// Populate the ages array
  for (var i = 0; i < years.length; i++) { //iterate through years array
    ages.push(2018 - years[i]); // push age values into the ages array
  }

// Populate the fullAges array
  for (var i = 0; i < ages.length; i++) {
    if (ages[i] > 17) { // if the person is of full age ( >= 18 years old)
      fullAges.push(true); // push true to fullAges array
      console.log('Person ' + (i + 1) + ' IS of full age and is ' + ages[i] + ' years old.');
    } else { // if the person is not of full age ( < 18 years old)
      fullAges.push(false); // push false to fullAges array
      console.log('Person ' + (i + 1) + ' NOT of full age and is ' + ages[i] + ' years old.');
    }
  } return fullAges;
} 

var years = [1995, 1988, 2003, 1991, 2011, 1982, 1991];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

console.log(full_1);
console.log(full_2);
