// JavaScript Document
var arrNames = [];
	
for (var i = 0; i < 5; i++) {
    var enteredName = prompt('Enter a name');
    enteredName.toString();
    arrNames.push(enteredName);
}
alert (arrNames);
var checkAName = prompt('Enter your name');
checkAName.toString();

var result = false;

for (var j = 0; j < arrNames.length; j++) {
    if (arrNames[j] === checkAName) {
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
