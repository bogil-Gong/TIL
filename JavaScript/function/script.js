function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageBogil = calculateAge(1990);
var ageMike = calculateAge(1994);
var ageHo = calculateAge(1999);


console.log(ageBogil);
console.log(ageMike);
console.log(ageHo);

function yearsUntilRetirement(name, yearOfBirth){
  var age = calculateAge(yearOfBirth);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  }else {
    console.log(name + ' is already redtired.');
  }

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('bogil', 1984);
yearsUntilRetirement('father', 1961);
yearsUntilRetirement('big-father', 1958);

/*
function someFunction(parameters){
  //code
}

var someFunction = function(parameters){
  //code
}
*/
