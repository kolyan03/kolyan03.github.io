//JavaScript document

var generateDOM = {
    madeWrapper: function() {
        jsWrapper = document.createElement('div');
        jsWrapper.classList.add('wrapper');
        document.body.appendChild(jsWrapper);
    },
    madeHeading: function() {
        jsTopText = document.createElement('p');
        jsTopText.classList.add('top-text');
        jsWrapper.appendChild(jsTopText);
        jsTopText.innerText = ' Тест по программированию ';
    },
    madeFormOfTest: function() {
        jsForm = document.createElement('form');
        jsWrapper.appendChild(jsForm);
   
        var howManyQuestions = 1;
        do {
            madeBlockOfTest();
            howManyQuestions++;
        } while (howManyQuestions <= 3);

        function madeBlockOfTest() {
            jsUl = document.createElement('ul');
            jsUl.classList.add('aQuestion');
            jsForm.appendChild(jsUl);
            jsUl.innerHTML = howManyQuestions + '. Вопрос № ' + howManyQuestions;

            for (var i = 1; i <= 3; i++) {

                var blockOfAnswer = document.createElement('div');
                blockOfAnswer.classList.add('someAnswer');
                jsForm.appendChild(blockOfAnswer);

                var jsInput = document.createElement('input');
                jsInput.type = 'checkbox';
                jsInput.setAttribute('id', 'answer-number' + i);
                blockOfAnswer.appendChild(jsInput);

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
    }
}

startTest();

function startTest() {
    generateDOM.madeWrapper();
    generateDOM.madeHeading();
    generateDOM.madeFormOfTest();
 };
