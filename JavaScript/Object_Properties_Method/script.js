//Lecture: Properties

/*
var bogil = {
  name: 'bogil',
  lastName: 'Gong',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(bogil);
console.log(bogil['lastName']);

var xyz = 'job';
console.log(bogil[xyz]);

bogil.lastName = 'Choi';
bogil['job'] = 'programmer';

console.log(bogil);

var soon = new Object();
soon.name = 'soonho';
soon.lastName = 'Choi';
soon['yearOfBirth'] = '1984';
soon['job'] = 'student';
soon['isMarried'] = 'true';

console.log(soon);
*/

//Method
//ver.1
/*
var bogil = {
  name: 'bogil',
  lastName: 'Gong',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family:['soon','hyun','joon'],
  calculateAge: function(yearOfBirth) {
      return 2017 - this.yearOfBirth;
  }
};

console.log(bogil.calculateAge(1990));

var age = bogil.calculateAge();
bogil.age = age;

console.log(bogil);
*/
//ver.2
var bogil = {
  name: 'bogil',
  lastName: 'Gong',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family:['soon','hyun','joon'],
  calculateAge: function(yearOfBirth) {
      this.age = 2017 - this.yearOfBirth;
  }
};

bogil.calculateAge();
console.log(bogil);

var soon = {
  yearOfBirth: 1960,
  calculateAge: function(){
    this.age = 2017 - this.yearOfBirth;
  }
};

soon.calculateAge();
console.log(soon);
