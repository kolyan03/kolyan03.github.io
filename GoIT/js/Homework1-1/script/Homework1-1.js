// JavaScript Document


function pow() {

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

    function makeAGrade() {
        var result = 1;
        for (var i = 0; i < roundGradeNumber; i++) {
            result = result * roundBaseNumber;
        }
        return result;
    }
    var calculationResult = makeAGrade(baseNumber, gradeNumber);
    console.log('Результат возведения в степень равен: ' + calculationResult);
    alert('Результат возведения в степень равен: ' + calculationResult);
}
pow();