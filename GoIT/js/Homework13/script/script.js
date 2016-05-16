//JavaScript document
//'use strict'

/*//////////////////HERE IS BLOCK OF QUESTION AND ANSWER FOR TEMPLATE////////////////////////////////////////*/
$(function () {




    var hereQuestions = [{
        question: '.  Когда началась Вторая мировая война? ', //First question
    },

        {
            question: '.  В какой стране проходила "Хрустальная ночь"? ', //Second question

        }, {
            question: '.  Что сказал напоследок заключенным комендант одного из концлагерей 9 мая 1945 года? ', //Third question

        }, {
            question: '. Как погиб дедушка Вовочки в 1942 году?' //Fourth question
        }
    ];
    //Rendering of questions ////

   
    var hereAnswersFor = {
        allAnswers: [{
            //Answers for a first question///
            answer: [{
                value: '. 01 сентября 1939 года',
                correct: 'right'
            }, {
                    value: '. 22 июня 1941 года.',
                    correct: 'wrong'
                }, {
                    value: '. ... Што?',
                    correct: 'wrong'
                }]
        }, { //Answers for a second question///
                answer: [{
                    value: '. Франция',
                    correct: 'wrong'
                }, {
                        value: '. Германия',
                        correct: 'right'
                    }, {
                        value: '. Правильно говорить не "Хрустальная ночь", а "Волынская резня"',
                        correct: 'wrong'
                    }]
            }, { //Answers for a third question///
                answer: [{
                    value: '. Пока',
                    correct: 'wrong'
                }, {
                        value: '. Всем спасибо, все свободны',
                        correct: 'right'
                    }, {
                        value: '. Не поминайте лихом',
                        correct: 'wrong'
                    }, {
                        value: '. Кто старое помянет, тому глаз вон',
                        correct: 'wrong'
                    }]
            }, { //Answers for a fourth question///
                answer: [{
                    value: '. В разведке',
                    correct: 'wrong'
                }, {
                        value: '. Подавал снаряды',
                        correct: 'wrong'
                    }, {
                        value: '. Пьяный с вышки упал',
                        correct: 'right'
                    }, {
                        value: '. С голоду',
                        correct: 'wrong'
                    }]
            }]
    };

    var JSONhereAnswersFor = JSON.stringify(hereAnswersFor);
    localStorage.setItem("object", JSONhereAnswersFor);
    console.log(localStorage.object);
    var hereAnswers = JSON.parse(localStorage.getItem("object"));


    /*//////////////////HERE WAS BLOCK OF QUESTION AND ANSWER FOR TEMPLATE////////////////////////////////////////*/
    var z = 1; // THIS IS A COUNT OF QUESTION /////
    /////////////////// BODY OF TEST /////////////////////////////// 


    var jsWrapper = document.createElement('div');
    jsWrapper.classList.add('wrapper');
    var jsBody = document.querySelector('body');
    jsBody.appendChild(jsWrapper);

    var jsTopText = document.createElement('p');
    jsTopText.classList.add('top-text');
    jsWrapper.appendChild(jsTopText);
    //Rendering of head //
    var headOfTest = 'ТеСт, ПрОсТо ТеСт';
    $('.top-text').render(headOfTest);
    jsTopText.innerText = headOfTest;
    
    var jsForm = document.createElement('form');
    jsWrapper.appendChild(jsForm);

    (function TEST() {
        do {
            blockOfTest();
            z++;
        } while (z <= hereQuestions.length);

    })();

    function blockOfTest() {
        //Первый дочерний элемент- заглавие списка - СОБСТВЕННО ВОПРОС

        var jsUl = document.createElement('ul');
        jsUl.classList.add('aQuestion' + z);
        jsForm.appendChild(jsUl);
        // //Rendering of questions //       
        var renderedQuestions = z + '. Вопрос № ' + z + hereQuestions[z - 1].question;
        $('ul').render(renderedQuestions);
        jsUl.innerHTML = renderedQuestions; /*z + '. Вопрос № ' + z + hereQuestions[z - 1].question;*/



        for (var i = 1; i <= hereAnswers.allAnswers[z - 1].answer.length; i++) { // string hereAnswers.allAnswers[z-1].answer.length  is a count of answers for a same question/////
            //Затем - блок ответов
            var blockOfAnswer = document.createElement('ul');
            blockOfAnswer.classList.add('someAnswer');
            jsForm.appendChild(blockOfAnswer);

            //В него влаживаем активное содержимое - input - 
            var jsInput = document.createElement('input');
            jsInput.type = 'radio';
            jsInput.setAttribute('id', 'answer-number' + i);
            jsInput.setAttribute('name', jsUl.innerHTML);
            jsInput.setAttribute('correct', hereAnswers.allAnswers[z - 1].answer[i - 1].correct);
            blockOfAnswer.appendChild(jsInput);

            //затем - метку

            var yourAnswer = document.createElement('label');
            yourAnswer.setAttribute('for', 'answer-number' + i);
            blockOfAnswer.appendChild(yourAnswer);            
            var renderedAnswers = ' Вариант ответа № ' + i + hereAnswers.allAnswers[z - 1].answer[i - 1].value;
            $('label').render(renderedAnswers);
            yourAnswer.innerHTML = renderedAnswers;
            
            

        }

    };

    var jsButton = document.createElement('button');
    jsButton.type = 'submit';
    jsButton.classList.add('confirm-answers');
    jsForm.appendChild(jsButton);
    jsButton.setAttribute('value', 'Проверить мои результаты ');
    jsButton.innerHTML = ('Проверить мои результаты');

    // Подсчет и приведение к читаемому виду результатов теста //

    $('.confirm-answers').on('click', function () {

        var correctAnswers = 0;

        var userAnswers = $('input:checked').each(function (index, element) {

            if ($(this).attr('correct') == 'right') {
                correctAnswers++;
            };
            //console.log('Значение атрибута : ' + $(this).attr('correct'));
        });

        // console.log('userAnswers', userAnswers, 'correctAnswers', correctAnswers, 'userAnswers.length', userAnswers.length, 'hereAnswers.allAnswers.length', hereAnswers.allAnswers.length);

        if (userAnswers.length != hereAnswers.allAnswers.length) {
            $('#textResult').html('Ответить нужно на все вопросы');
            return
        } else {
            $('#textResult').html(' Вы правильно ответили на ' + correctAnswers + ' вопроса(ов) из ' + hereAnswers.allAnswers.length);
        };

    });

    // Вывод результатов в виеде модального окна //

    $('.confirm-answers').on('click', (function (event) { // лoвим клик пo элементу с нужным классом
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function () { // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    }));
    // Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке 
    $('#modal_close, #overlay').on('click', (function () { // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({
                opacity: 0,
                top: '45%'
            }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function () { // пoсле aнимaции
                $(this).css('display', 'none'); // делaем ему display: none;
                $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                $("input").prop("checked", false); // очищаем пользовательские ответы
                localStorage.clear();
                 console.log(localStorage.object);

            }
            );

    }));
});