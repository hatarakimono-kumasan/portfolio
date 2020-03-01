//modal

$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});


//スクロール固定
$(function() {
    var $body = $('body');
    
        $('.works_img').click(function() {
            $body.addClass('noscroll').on('touchmove.noScroll', function(e){
            e.preventDefault();//イベントをキャンセルするためのメソッド
        });
    
        $('.modal__bg js-modal-close, .js-modal-close').click(function() {
            $body.removeClass('noscroll');
        });
    
        });
    
});