// JavaScript Document


pow(roundBaseNumber, roundGradeNumber);

alert('Функция возводит заданное пользователем число в заданную степень. Число должно быть целым, дробные значения будут округляться!');

var baseNumber;
do {
    baseNumber = prompt('Введите первое число', '');
} while (isNaN(baseNumber));
var roundBaseNumber = Math.round(baseNumber);
var gradeNumber;
do {
    gradeNumber = prompt('Введите показатель степени', '');
} while (isNaN(gradeNumber));
var roundGradeNumber = Math.round(gradeNumber);

function pow(roundBaseNumber, roundGradeNumber) {
    var result = 1;
    if (roundGradeNumber >= 0) {
        for (var i = 0; i < roundGradeNumber; i++) {
            result = result * roundBaseNumber;
        }
        return result;
    } else {
        roundGradeNumber = Math.abs(roundGradeNumber);
        for (var i = 0; i < roundGradeNumber; i++) {
            result = result * roundBaseNumber;
        }
        return 1 / result;
    }
}
var calculationResult = pow(baseNumber, gradeNumber);
console.log('Результат возведения в степень равен: ' + calculationResult);
alert('Результат возведения в степень равен: ' + calculationResult);

