// John Resig - http://ejohn.org/ - MIT Licensed
(function() {
    var cache = {};

    this.tmpl = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
            tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +

                // Convert the template into pure JavaScript
                str
                .replace(/[\r\t\n]/g, "")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'") + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn(data) : fn;
    };
})();

/*///////////////////// USER AREA //////////*/;(function($) {
    $.fn.myPlugin = function() {

        var leftUIEl = $('.turn-left');
        var rightUIEl = $('.turn-right');
        var elementsList = $('.main-list');
        var elementsWiev = 1;

        var pixelsOffset = 600;
        var currentLeftValue = 0;

        var elementsCount = elementsList.find('li').length;

        var minimumOffset = -((elementsCount - elementsWiev) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });

        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });
        return this;
    }
})(jQuery);

$('.turn-left,.turn-right').myPlugin();;$(function() {

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