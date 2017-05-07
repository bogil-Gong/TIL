var bo_height = 174;
var ho_height = 177;
var bo_age = 26;
var ho_age = 32;

var bo_score = bo_height + 5 * bo_age;
var ho_score = ho_height + 5 * ho_age;

if (bo_score > ho_score) {
  console.log('Bogil wins the game with ' + ho_score + ' points!');
} else if (ho_score > bo_score) {
  console.log( 'Soonho wins the game with ' + bo_score + 'points!');
}else if (bo_score === ho_score) {
  console.log('There is a draw');
}
