$(function(){
    //大項目に連番のIDを追加
    $('ul.summary li.header').each(function(i){
        $(this).attr('id','subcatergory' + (i+1));
    });
    //中項目をクリックしたときに小項目を表示
	$('ul.summary > li.chapter > a').click(function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass('toggle_on');
	});
    //大項目をクリックしたときに中項目を表示
	$('ul.summary li.header').click(function(){
        var headnum = $(this).attr('id');
        if($(this).hasClass('flg')){
            $(this).removeClass('flg');
            Cookies.remove($(this).attr('id'));
            $('ul.summary > li.chapter').each(function() {
                if ($(this).attr('data-level').substr(0,1) == headnum.substr(-1,1)) {
                    $('ul.summary > li.chapter[data-level^=' + headnum.substr(-1,1) + ']').slideUp("slow");
                    ;
                }
            });
        } else {
            $(this).addClass('flg');
            Cookies.set($(this).attr('id'), ('block'), {expires: 1});
            $('ul.summary > li.chapter').each(function() {
                if ($(this).attr('data-level').substr(0,1) == headnum.substr(-1,1)) {
                    $('ul.summary > li.chapter[data-level^=' + headnum.substr(-1,1) + ']').slideDown("slow");
                    ;
                }
            });
        };
	});
});

$(function(){
    //画面遷移したときに初期から開いているサイドナビ
    if($('ul.summary > li.chapter.active').length){
        $('ul.summary > li.chapter.active > ul').show();
        $('ul.summary > li.chapter.active > a').addClass('toggle_on');
        var chnum = $('ul.summary > li.chapter.active').attr('data-level').substr(0,1);
        $('ul.summary > li.chapter[data-level^=' + chnum + ']').show();
        $('ul.summary li#subcatergory' + chnum).addClass('flg');
    }
    //中項目が小項目を持たない場合
    $("ul.summary > li.chapter:not(:has(ul.articles))").addClass('nochild');
    for (var i = 1; i <= $('ul.summary li.header').length; i++) {
    // クッキーがblockであれば読み込み時にメニューをオープンする
        if (Cookies.get('subcatergory' + i) == 'block') {
            $('ul.summary > li.chapter[data-level^=' + i + ']').show();
            $('ul.summary li#subcatergory' + i).addClass('flg');
        }
    }
});

$(function(){
    //ボタン追加
    $('.book-summary #book-search-input').after('<div class="operation_button"><p class="all_open">全て開く</p><p class="all_close">全て閉じる</p></div>');
    $('ul.summary').after('<p class="m_print"><a href="javascript:void(0)" onclick="window.print();return false;">マニュアルをプリントアウト</a></p>');
    $('.book-body .body-inner').append('<p id="pagetop"><a href="#"></a></p>');
    //class追加
    $('.markdown-section p:contains("※"),.markdown-section td:contains("※")').each(function() {
        if ($(this).text().startsWith('※')) {
            $(this).addClass('caution');
        }
    });
    $('.markdown-section h6').next('p').addClass('h6_text');
    $('.markdown-section h1').next('h2').addClass('mgt0');
    $('.markdown-section h2').next('h3').addClass('mgt0');
    $('.markdown-section h3').next('h4').addClass('mgt0');
    $('.markdown-section h4').next('h5').addClass('mgt0');
    $('.markdown-section table td').each(function() {
        if ($(this).text() == '') {
            $(this).addClass('no_texttd');
        }
    });
    //ボタンの動作
	$('.book-summary .all_open').click(function(){
        $('ul.summary > li.chapter').slideDown("slow");
        $('ul.summary li.header').addClass('flg');
        $('ul.summary li.header').each(function(i) {
            Cookies.set(('subcatergory' + ++i), ('block'), {expires: 1});
        });
    });
	$('.book-summary .all_close').click(function(){
        $('ul.summary > li.chapter').slideUp("slow");
        $('ul.summary li.header').removeClass('flg');
        $('ul.summary li.header').each(function(i) {
            Cookies.remove(('subcatergory' + ++i));
        });
    });
    $(window).scrollTop($('body').offset().top);
});

//サイドナビの追従
$(function() {
    var $fixElement = $('.book-summary');
    var baseFixPoint = $fixElement.offset().top;
    var fixClass = 'is-fixed';

    if ($(window).scrollTop() != 0) {
            $fixElement.addClass(fixClass);
    }

    function fixFunction() {
        var windowScrolltop = $(window).scrollTop();
        if(windowScrolltop >= baseFixPoint) {
            $fixElement.addClass(fixClass);
        } else {
            $fixElement.removeClass(fixClass);
        }
    }
    $(window).on('load scroll', function() {
        fixFunction();
    });
});

//ページTOPボタンの動作
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#pagetop').fadeIn(800);
        }
        else {
            $('#pagetop').fadeOut(800);
        }
    });
    $('#pagetop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

//アンカーリンクの動作
$(function(){
    $('a[href*="#"]').click(function(){
        $('.book-summary ul.summary > .chapter').removeClass('active');
        $('.book-summary ul.summary > .chapter > ul.articles > .chapter').removeClass('active');
        $(this).parent().addClass('active');
        var speed = 500; //移動完了までの時間(sec)を指定
        var href= $(this).attr("href");
        var str = href.split('#');
        var href2 = '#' + str[1];
        var target = $(href2 == "#" || href == "" ? 'html' : href2);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
