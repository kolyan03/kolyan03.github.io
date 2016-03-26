//JavaScript document
var jsWrapper = document.createElement('div');
jsWrapper.classList.add('wrapper');
var jsBody = document.querySelector('body');
jsBody.appendChild(jsWrapper);

var jsTopText = document.createElement('p');
jsTopText.classList.add('top-text');
jsWrapper.appendChild(jsTopText);
jsTopText.innerText = 'Тест по программированию';

var howManyQuestions = 1;

var jsForm = document.createElement('form');
jsWrapper.appendChild(jsForm);

TEST();

function TEST() {

    do {
        blockOfTest();
        howManyQuestions++;
    } while (howManyQuestions <= 3);
}

function blockOfTest() {

    //Первый дочерний элемент- заглавие списка -
    var jsUl = document.createElement('ul');
    jsUl.classList.add('aQuestion');
    jsForm.appendChild(jsUl);
    jsUl.innerHTML = howManyQuestions + '. Вопрос № ' + howManyQuestions;

    for (var i = 1; i <= 3; i++) {

        //Затем - блок ответов
        var blockOfAnswer = document.createElement('div');
        blockOfAnswer.classList.add('someAnswer');
        jsForm.appendChild(blockOfAnswer);

        //В него влаживаем активное содержимое - input - 
        var jsInput = document.createElement('input');
        jsInput.type = 'checkbox';
        jsInput.setAttribute('id', 'answer-number' + i);
        blockOfAnswer.appendChild(jsInput);

        //затем - метку
        var yourAnswer = document.createElement('label');
        yourAnswer.setAttribute('for', 'answer-number' + i);
        blockOfAnswer.appendChild(yourAnswer);
        yourAnswer.innerHTML = 'Вариант ответа №' + i;
    }
}

var jsButton = document.createElement('input');
jsButton.type = 'submit';
jsButton.classList.add('confirm-answers');
jsForm.appendChild(jsButton);
jsButton.setAttribute('value', 'Проверить мои результаты ');

console.log(document.documentElement);