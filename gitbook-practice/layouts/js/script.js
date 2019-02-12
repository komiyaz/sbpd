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
    //中項目が小項目を持たない場合
    $("ul.summary > li.chapter:not(:has(ul.articles))").addClass('nochild');
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
    $('ul.summary').after('<p class="m_print"><a href="javascript:void(0)" onclick="window.print();return false;">マニュアルをプリントアウト</a></p>');
    $('.book-body .body-inner').append('<p id="pagetop"><a href="#"></a></p>');
    //class追加
    $('.markdown-section p:contains("※")').addClass('caution');
    $('.markdown-section h6').next('p').addClass('h6_text');
    $('.markdown-section table td').each(function() {
        if ($(this).text() == '') {
            $(this).addClass('no_texttd');
        }
    });
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


//スムーズスクロール（ページ内リンク移動）

//スクロール量を取得
function getXScrolled() {
  return (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
}
function getYScrolled() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}

//イージング（easeInOutSine）
function easing( t, b, c, d ) {
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};

//ハッシュから対象エレメントを取得する関数
function hashElement( h ){
  var nameORid = decodeURI( h.substr(1) );
  return ( document.getElementsByName( nameORid ).length ) ? document.getElementsByName( nameORid )[0]: document.getElementById( nameORid );
};

//エレメントの位置を取得する関数
function targetPos ( a ) {
  var getPos = a.getBoundingClientRect();
  return getPos.top + getYScrolled();
};

//移動用関数
function pageScroll( te ){
  var posX = getXScrolled();
  var posY = getYScrolled();
  var moved = targetPos( te ) - posY;
  var tween = ( moved > 5000 ) ? Math.round( Math.abs( moved ) * 0.001 ) : 5;
  var n = 1;
  (function scrollMoved () {
    if ( moved ) {
      window.scrollTo( posX, easing( n, posY, moved, tween) );
      n ++ ;
      if ( n <= tween ) {
        window.setTimeout( scrollMoved, 1 );
      }
    }
  })();
};

//ページ内リンクにイベント登録
var entryLinks = document.getElementsByTagName('a');
if ( entryLinks.length ) {
  for( var i = 0; entryLinks.length >  i; i++ ) {
    var getATag = entryLinks[i];
    if ( ( getATag.hash ) && ( getATag.href.indexOf( location.href.replace( location.hash, '' ) ) === 0 ) ) {

      if ( getATag.addEventListener ) {
        getATag.addEventListener( 'click', function(e) {
          ( e.preventDefault ) ? e.preventDefault(): e.returnValue = false
          pageScroll( hashElement( e.target.hash ) );
          return false;
        });
      } else {
        getATag.onclick = function(e) {
          ( e.preventDefault) ? e.preventDefault(): e.returnValue = false;
          pageScroll( hashElement( e.target.hash ) );
          return false;
        }
      }
    }
  }
}

