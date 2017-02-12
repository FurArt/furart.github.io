var nameBase = [];
for (var i = 0; i < 5; i++) {
  nameBase.push(prompt('Ведите имя',''));
}
var customerName = prompt('Ведите имя пользывателя','');
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
if (curentName.length>0){
  alert(curentName+',вы успешно вошли');
} else {
  alert('Имя пользователя не существует');
}
