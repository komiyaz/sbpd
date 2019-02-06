$(function(){
    //大項目に連番のIDを追加
    $('ul.summary li.header').each(function(i){
        $(this).attr('id','contents' + (i+1));
    });
    //中項目をクリックしたときに小項目を表示
	$('ul.summary > li.chapter > a').click(function(){
		$(this).next('ul').toggle();
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
                    $('ul.summary > li.chapter[data-level^=' + headnum.substr(-1,1) + ']').hide();
                }
            });
        } else {
            $(this).addClass('flg');
            Cookies.set($(this).attr('id'), ('block'), {expires: 1});
            $('ul.summary > li.chapter').each(function() {
                if ($(this).attr('data-level').substr(0,1) == headnum.substr(-1,1)) {
                    $('ul.summary > li.chapter[data-level^=' + headnum.substr(-1,1) + ']').show();
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
        $('ul.summary li#contents' + chnum).addClass('flg');
    }
    for (var i = 1; i <= $('ul.summary li.header').length; i++) {
    // クッキーがblockであれば読み込み時にメニューをオープンする 
        if (Cookies.get('contents' + i) == 'block') {
            $('ul.summary > li.chapter[data-level^=' + i + ']').show();
            $('ul.summary li#contents' + i).addClass('flg');
        }
    }
});

$(function(){
    //ボタン追加
    $('.book-summary #book-search-input').after('<div class="operation_button"><p class="all_open">全て開く</p><p class="all_close">全て閉じる</p></div>');
    $('ul.summary .divider').before('<li class="m_print"><a href="javascript:void(0)" onclick="window.print();return false;">マニュアルをプリントアウト</a></li>');
    $('.book-body .body-inner').append('<p id="pagetop"><a href="#"></a></p>');
    //ボタンの動作
	$('.book-summary .all_open').click(function(){
        $('ul.summary > li.chapter').show();
        $('ul.summary li.header').addClass('flg');
        $('ul.summary li.header').each(function(i) {
            Cookies.set(('contents' + ++i), ('block'), {expires: 1});
        });
    });
	$('.book-summary .all_close').click(function(){
        $('ul.summary > li.chapter').hide();
        $('ul.summary li.header').removeClass('flg');
        $('ul.summary li.header').each(function(i) {
            Cookies.remove(('contents' + ++i));
        });
    });
});

//サイドナビの追従
$(function() {
    var $fixElement = $('.book-summary');
    var baseFixPoint = $fixElement.offset().top;
    var fixClass = 'is-fixed';

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