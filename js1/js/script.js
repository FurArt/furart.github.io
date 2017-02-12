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

console.log(pow(number, exponent));// for test
alert( 'Ваше число = '+ pow(number, exponent));
