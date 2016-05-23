$(function() {

    var nameSurname = $('#who-am-i').html();
    var nowWorking = $('#what-i-do').html();
    var someList = $('#why-it-needed').html();


    var articleData = {
        article: 'Педько Николай Васильевич'
    };

    var workingData = {
        workArticle: 'Врач-фтизиатр участковый взрослый. Работаю в противотуберкулёзном диспансерном отделении Ахтырской районной больницы.'
    };

    var listData = [{
        content: 'интересно узнавать новое;'
    }, {
        content: 'больше возможностей на рынке труда;'
    }, {
        content: 'есть свободное время, которое не хочется тратить на танки;'
    }, {
        content: 'человек должен уметь делать всё, а специализация - удел насекомых;'
    }];

    var newArticle = tmpl(nameSurname, articleData);
    console.log(newArticle);
    $('h2').append(newArticle);

    var workArticle = tmpl(nowWorking, workingData);
    $('#fio').append(workArticle);

    var listArticle = tmpl(someList, {
        Data: listData
    });
    $('#list-of-interesting').append(listArticle);
    
});