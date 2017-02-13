var number = prompt('Ведите число:','');
var exponent = Math.round(prompt('Ведите его сепень (целое число):',''));
  function pow(number, exponent) {
    if (exponent === 0) { // for 0
      var result = 1;
      return result;
    } else if (exponent > 0 ){ // for exponent more than 0
      var result = number;
      for (var i = 1; i < exponent; i++) {
        result *= number;
      }
      return result;
    } else { // for exponent before 0
      var result = 1 / number;
      for (var i = -1; i > exponent; i--) {
        result /=  number;
      }
      return result;
    }
  }
  pow(number, exponent);
if ( ( number && exponent ) == null) {
  alert ('Укажите числа, не оставляйте пустые поля');
} else if (isNaN(pow(number, exponent))) {
  alert ('Укажите числа, буквы в степени никчему');
} else if (isNaN(number)) {
  alert ('Укажите числа, буквы в степени никчему');
} else if (isNaN(exponent)) {
  alert ('Укажите числа, буквы в степени никчему');
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
