var names = ['Bogil', 'Soonho', 'Miso'];
var years = ['1990', '1984', '1994'];

console.log(name[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Bogil', 1990, 'artist', false];

john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1 ) {
  console.log('John is Not a teacher');
}
