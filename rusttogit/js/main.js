var speedOpen = 200;
var speedClose = 200;
var contexmenu = true;
var kol_baner = $(".va-slice").length;
var tmp_baner = 1;
var time_baner = 3000;

$.getScript('js/module/menu.js', function() {
    console.log('Load "menu" was performed.');
});
$.getScript('js/module/placeholder.js', function() {
    console.log('Load "placeholder" was performed.');
});
$.getScript('js/module/test.js', function() {
    console.log('Load "test" was performed.');
});
$.getScript('js/module/jquery.formstyler.min.js', function() {
    console.log('Load "jquery.formstyler.min" was performed.');
});


function installNewCategories(elem, text, style, type, url) {
    var unical_name = $(elem).attr("id");
    var html_cat = "<div style='" + style + "' class='list-menu'>" + $(elem).html() + "</div>";
    if (type === 0)
        var htmlbtnorinput = '<a href="#" onclick="goCat(-1,\'#cat_' + unical_name + '\')"><div>Выбрать</div></a>';
    else
        var htmlbtnorinput = '<input type="hidden" name="' + unical_name + '" value="' + url + '">';
    $(elem).html('<div class="context-menu" id="cat_' + unical_name + '" data-go-url="' + url + '"><table cellpadding="0" cellspacing="0"><td><div class="input" style="' + style + '" onclick="goContexMenu(0,\'#cat_' + unical_name + '\',' + type + ')">' + text + '</div></td><td><img onclick="goContexMenu(0,\'#cat_' + unical_name + '\',' + type + ')" src="images/arrow-down.jpg"></td><td style="padding-left:3px;">' + htmlbtnorinput + '</td></table>' + html_cat + '</div>');
}

function goContexMenu(status, elem, type) {
    if (contexmenu) {
        $(elem + ' .list-menu div').click(function () {
            var name = $(this).html();
            var id = $(this).attr("data-id");
            $(elem + ' .input').html(name);
            goContexMenu(1, elem, type);
            if (type === 0) {
                $(elem + ' a').attr("onclick", "goCat(" + id + ",'" + elem + "')");
            }
            else {
                $(elem + ' input').attr("value", id);
            }
        });
        $(elem + ' .list-menu').hover(function () {
        }, function () {
            goContexMenu(1, elem, type);
        });
    }
    contexmenu = false;
    if (status === 0) {
        $(elem + ' .list-menu').stop().fadeIn(200);
        $(elem + ' img').attr("onclick", "goContexMenu(1,'" + elem + "')");
    } else {
        $(elem + ' .list-menu').stop().fadeOut(200);
        $(elem + ' img').attr("onclick", "goContexMenu(0,'" + elem + "')");
    }
}

function goCat(catid, elem) {
    if (catid < 0)
        goContexMenu(0, elem);
    else {
        var url = $(elem).attr("data-go-url") + catid;
        window.location.href = url;
    }
}

function openModalLogin() {
    $("#modalLoginBG, #blockLogin").stop().fadeIn(speedOpen)
    $("html").css({"overflow-y": "hidden"});
}

function closeModalLogin() {
    $("#modalLoginBG, #blockLogin").stop().fadeOut(speedClose)
    if (!openMenu)$("html").css({"overflow-y": "auto"});

}


if (typeof $.fn.rating != 'undefined') {
    $('.rating').rating({
        fx: 'half',
        image: 'images/stars.png',
        readOnly: true,
        loader: 'images/ajax-loader.gif'
    });
}


$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    if (typeof ($.fn.fileinput) != 'undefined') {
        $('input[type=file]:not([name=preview])').fileinput({
            showPreview: true,
            showRemove: true,
            removeLabel: 'Удалить',
            showUpload: true,
            uploadLabel: 'Загрузить',
            browseLabel: 'Загрузить',
            showCancel: false,
            cancelLabel: 'Отмена',
            showUploadedThumbs: false,
            allowedFileTypes: ['image'],
            allowedFileExtensions: ['jpg', 'jpeg', 'gif', 'png'],
            previewSettings: {
                image: {width: "200px", height: "200px"},
                html: {width: "180px", height: "auto"},
                text: {width: "180px", height: "auto"},
                video: {width: "180px", height: "auto"},
                audio: {width: "180px", height: "auto"},
                flash: {width: "180px", height: "auto"},
                object: {width: "180px", height: "auto"},
                other: {width: "180px", height: "auto"}
            },
            showCaption: false,
            maxFileCount: 10,
            maxFileSize: 2000,
            msgSizeTooLarge: 'Файл "{name}" (<b>{size} KB</b>) превышает максимально допустимый размер <b>{maxSize} KB</b>.',
            msgFilesTooMany: 'Число загружаемых файлов <b>({n})</b> превышает максимально допустимое количество <b>{m}</b>.',
            msgLoading: 'Загружено {index} из {files} &hellip;',
            msgProgress: 'Загрузка файлов {index} из {files} - {name} - {percent}% выполнена.',
            previewFileType: 'image',
            dropZoneEnabled: false,

            //overwriteInitial: true,
            //defaultPreviewContent: '<img src="/uploads/default_avatar_male.jpg" alt="Your Avatar" style="width:160px">',

            /*progress: '<div class="progress">\n' +
             '    <div class="progress-bar progress-bar-success progress-bar-striped text-center" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n' +
             '        {percent}%\n' +
             '     </div>\n' +
             '</div>',*/
            uploadUrl: '/profile/avatar/',
            slugCallback: function(filename) {console.log($(this));
                return filename.replace('(', '_');
            },
        });
        $('input[name=preview]').fileinput({
            showPreview: true,
            showRemove: false,
            removeLabel: 'Удалить',
            showUpload: false,
            uploadLabel: 'Загрузить',
            browseLabel: 'Загрузить',
            showCancel: false,
            cancelLabel: 'Отмена',
            showUploadedThumbs: false,
            allowedFileTypes: ['image'],
            allowedFileExtensions: ['jpg', 'jpeg', 'gif', 'png'],
            previewSettings: {
                image: {width: "200px", height: "200px"},
                html: {width: "180px", height: "auto"},
                text: {width: "180px", height: "auto"},
                video: {width: "180px", height: "auto"},
                audio: {width: "180px", height: "auto"},
                flash: {width: "180px", height: "auto"},
                object: {width: "180px", height: "auto"},
                other: {width: "180px", height: "auto"}
            },
            showCaption: false,
            maxFileCount: 1,
            maxFileSize: 2000,
            msgSizeTooLarge: 'Файл "{name}" (<b>{size} KB</b>) превышает максимально допустимый размер <b>{maxSize} KB</b>.',
            msgFilesTooMany: 'Число загружаемых файлов <b>({n})</b> превышает максимально допустимое количество <b>{m}</b>.',
            msgLoading: 'Загружено {index} из {files} &hellip;',
            msgProgress: 'Загрузка файлов {index} из {files} - {name} - {percent}% выполнена.',
            previewFileType: 'image',
            dropZoneEnabled: false,

            //overwriteInitial: true,
            //defaultPreviewContent: '<img src="/uploads/default_avatar_male.jpg" alt="Your Avatar" style="width:160px">',

            slugCallback: function(filename) {console.log($(this));
                return filename.replace('(', '_');
            },
        });
    }

    $('#loginForm').submit(function (event) {
        event.preventDefault();

        var form = $(this);

        $.post(
            form.attr('action'),
            {
                email: form.find('input[name=login]').val(),
                password: form.find('input[name=password]').val()
            },
            function (response, status, xhr) {
                if (typeof response.message != 'undefined') {
                    alert(response.message);
                } else if (typeof response.redirect != 'undefined') {
                    window.location.href = response.redirect;
                }
            }
        ).error(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + " | " + errorThrown);
        });
    });

    if (typeof $.fn.Placeholder != 'undefined') {
        $.Placeholder.init({color: "#90b7b8"});
    }

    if (typeof $.fn.rating != 'undefined') {
        $('.rating').rating({
            fx: 'half',
            image: 'images/stars.png',
            readOnly: true,
            loader: 'images/ajax-loader.gif'
        });
    }

    if (typeof ($.fn.datetimepicker) != 'undefined') {
        $('input.date').datetimepicker({
            locale: 'ru',
            format: 'DD.MM.YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });
    }

    if (typeof ($.fn.multiselect) != 'undefined') {
        $('select[multiple=multiple]').multiselect({
            //includeSelectAllOption: true,
            //enableFiltering: true
            nonSelectedText: 'Выберите значение',
            nSelectedText: 'Выбрано несколько значений',
            numberDisplayed: 3,
            delimiterText: ', '
        });
    }

    if (typeof ($.fn.styler) != 'undefined') {
        $('.newselect').styler();
        if (location.hash) {
            var elem = location.hash;
            $(".switches-btn button").removeClass('active');
            $('.switches-btn button[data="' + elem + '"]').addClass('active');
            $('.switches-div').removeClass('active');
            $(elem).addClass('active');
        }
        $(".switches-btn button").click(function () {
            var elem = $(this).attr("data");
            $(".switches-btn button").removeClass('active');
            $(this).addClass('active');
            $('.switches-div').removeClass('active');
            $(elem).addClass('active');
            history.pushState(null, null, elem);
        });
    }

    function sendFile(file, editor, welEditable) {
        var data = new FormData();
        data.append("file", file);
        $.ajax({
            data: data,
            type: 'POST',
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
                }

                return myXhr;
            },
            url: '/admin/upload/',
            cache: false,
            contentType: false,
            processData: false,
            success: function (result) {
                //editor.insertImage(welEditable, result.file);
                //editor.summernote('insertImage', result.file);
                $('#summernote').summernote('editor.insertImage', result.file);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus + ' | ' + errorThrown);
            }
        });
    }

    function progressHandlingFunction(e) {
        if (e.lengthComputable) {
            $('progress').attr({value: e.loaded, max: e.total});
            // reset progress on complete
            if (e.loaded == e.total) {
                $('progress').attr('value', '0.0');
            }
        }
    }

    if (typeof ($.fn.summernote) != 'undefined') {
        $("#summernote").summernote({
            height: 300,
            minHeight: null,
            maxHeight: null,
            focus: true,
            codemirror: {
                theme: 'material'
            },
            onInit: function () {
                var content = $('textarea[name=content]');
                if (content.text().length > 0) {
                    $("#summernote").code(content.text());
                }
            },
            onChange: function (contents, $editable) {
                $('textarea[name=content]').text(contents);
                //console.log('onChange:', contents, $editable);
            },
            onImageUpload: function (files, editor, welEditable) {
                sendFile(files[0], editor, welEditable);
            }
        });
    }

    if (typeof ($.fn.select2) != 'undefined') {
        function formatRepo (repo) {
            if (repo.loading) return repo.text;

            var markup =  '<div class="clearfix" data-id="' + repo.id + '">' +
                    '<div class="col-sm-1">' +
                     '<img src="' + repo.attrs.avatar + '" style="width: 80px;" />' +
                     '</div>' +
                '<div clas="col-sm-10">' +
                '<div class="clearfix">' +
                '<div class="col-sm-6">' + repo.firstname + '</div>' +
                '<div class="col-sm-6">' + repo.lastname + '</div>' +
                '<div class="col-sm-6">' + repo.secondname + '</div>' +
                '</div>';

            markup += '</div></div>';

            return markup;
        }
        function formatRepoSelection (repo) {
            return repo.firstname || repo.text;
        }

        $("select#search").select2({
            ajax: {
                url: "/reviews/rasti/",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        query: params.term
                    };
                },
                processResults: function (data, params) {
                    return {
                        results: data.items,
                    };
                },
                cache: false
            },
            escapeMarkup: function (markup) {
                return markup;
            },
            minimumInputLength: 4,
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        }).on("select2:select", function (e) {
            $('input[name=user_id]').val(e.params.data.id);
        });
    }

    if (typeof ($.fn.clockpicker) != 'undefined') {
        $('input[type=time]').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            default: 'now'
        });
    }

    if (typeof ($.fn.totemticker) != 'undefined') {
        $('#vertical-ticker').totemticker({
                row_height  :   '110px',
                start       :   '#vertical-ticker-start',
                interval    :   4000,
                mousestop   :   true,
            },function(){
                $("#vertical-ticker-start").click();
            }
        );
    }
});