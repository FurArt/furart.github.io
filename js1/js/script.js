var number = 0;
console.log(typeof(number));
number = +prompt('Ведите число:', '' );
console.log('number'+typeof(number));
var exponent = Math.round(prompt('Ведите его сепень (целое число):', ''));
  function pow(number, exponent) {
      if ( (exponent === 0))  { // for 0
        var result = 1;
    } else if (exponent > 0 ){ // for exponent more than 0
        var result = number;
        for (var i = 1; i < exponent; i++) {
        result *= number;
        } return result;
    } else { // for exponent before 0
        var result = 1 / number;
        for (var i = -1; i > exponent; i--) {
        result /=  number;
        } return result;
    }
  }
  pow(number, exponent);
  console.log(pow(number, exponent));
  console.log('exponent'+typeof(exponent));
if ( ( number && exponent ) == null) {
  alert ('Укажите числа, не оставляйте пустые поля');
} else if ( number === 0 ) {
  alert ('Укажите число, какое вы хотите добить степень');
} else if ( isNaN( pow(number, exponent) ) ) {
  alert ('Укажите числа');
} else if ( isNaN(number) ) {
  alert ('Укажите числа, буквы в степени никчему 2');
} else if ( isNaN(exponent) ) {
  alert ('Укажите числа, буквы в степени никчему 3');
} else {
  alert ('Ваше число: '+pow(number, exponent));
}

















// for test

// if (isNaN(pow(number, exponent))) {
//   alert('Укажите числа, а не буквы!')
// } else if (number == null) {
//   alert('Не оставляйте пустые поля')
// } else if (typeOf(exponent) == string ) {
//   alert('Укажите числа, а не буквы!')
// } else {
//   alert('Ваше число в степени: ' + pow(number, exponent) )
// }
