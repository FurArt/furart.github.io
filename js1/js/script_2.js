var nameBase = [];
for (var i = 0; i < 5; i++) {
  nameBase.push(prompt('Ведите имя',''));
}
var customerName = 0
customerName = prompt('Ведите имя пользывателя','');
var curentName = '';
function nameChесk() {
  for (var i = 0; i < nameBase.length; i++) {
    if (customerName == nameBase[i]) {
      curentName = nameBase[i];
      return curentName;
    }
  }
}
nameChесk();
if ((nameBase[0] || nameBase[1] || nameBase[2] || nameBase[3] || nameBase[4]) == null) {
  alert( 'Нажатием отмена Вы ничего не решите.' )
}  else if (curentName.length>0){
  alert(curentName+',вы успешно вошли');
} else if ( customerName === 0 ) {
  alert( 'Укажите хоть какие даные' )
} else if ( (nameBase[0].length || nameBase[1].length || nameBase[2].length || nameBase[3].length || nameBase[4].length) <= 0) {
  alert( 'Укажите хоть какие даные' )
} else {
  alert('Имя пользователя не существует');
}
