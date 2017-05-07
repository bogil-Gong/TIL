//Lecture : Boolean logic

/*
ar age = 35;

if (age < 20) {
  console.log('Bogil is a adult'); //false
} else if (age > 20 && age < 30) {
  console.log('bogil is a young man'); //false
}else {
  console.log('Bogil is a man'); //true
}
// 'Bogil is a man'
*/

//Lecture : Switch

var job = 'teacher';

job = prompt('what does john do?')
switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime');
    break;
  default:
    console.log('John does something else');
}
