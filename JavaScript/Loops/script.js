for (var i = 0; i < 10; i++) {
  console.log(i+1);
}

var name = ['bogil', 'soonho', 'miso', 'jeain', 'joonpyo', 'chulsoo']

// for loops
for (var i = 0; i < name.length; i++) {
  console.log(name[i]);
}

for (var i = name.length - 1 ; i > 0 ; i--) {
  console.log(name[i]);
}

//while loops
var i = 0;
while (i < name.length) {
  console.log(name[i]);
  i++;
}

for (var i = 0; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (var i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
