// JavaScript Document


var arrNames = [];
for (var i = 0; i < 5; i++); {
    var enteredName = prompt('Enter a name');
    enteredName.toString();
    arrNames.push(enteredName);
}
var checkAName = prompt('Enter your name');
checkAName.toString();
var result = false;
for (var z = 0; z < arrNames.length; z++); {
    if (arrNames[z] === checkAName) {
        result = false;
        break;
    } else {
        result = true;
    }
}
if (result === true) {
    alert('Произошла ошибка, пользователь с таким именем не обнаружен');
} else {
    alert(checkAName + ', Вы успешно вошли');
}
var granName = 1
