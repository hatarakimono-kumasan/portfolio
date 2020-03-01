//drawerの出し入れ

    $(function() {
        $('.navbar-toggler').on('click', function () {
            $('#navbarTogglerDemo03').hasClass('open');
        });
    });
    
    $('#navbarTogglerDemo03 > i, #navbarTogglerDemo03 > ul > li> a, #navbarTogglerDemo03').on('click', function(){
        $('#navbarTogglerDemo03').collapse('hide');
    });



//スクロール固定
$(function() {
    var $body = $('body');
    
        $('.navbar-toggler').click(function() {
            $body.addClass('noscroll').on('touchmove.noScroll', function(e){
            e.preventDefault();//イベントをキャンセルするためのメソッド
        });
    
        $('#navbarTogglerDemo03 > i, #navbarTogglerDemo03 > ul > li> a, #navbarTogglerDemo03').click(function() {
            $body.removeClass('noscroll');
        });
    
        });
    
});

//navリンクをクリックした際、見出しの高さを調整
$('.nav-link').click(function(){
    var href= $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        var headerHight = 70;
        //ヘッダーの高さを引く
        var position = target.offset().top - headerHight;
        $('html, body').animate({
            'scrollTop':position}, 550,'swing');
        return false;
    });
