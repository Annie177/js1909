!function fn() {
    let $guanzhu = $('.guanzhu');
    $guanzhu.hover(function () {
        $(this).next('div').show();
    },function(){
        $(this).next('div').hide();
    })
}();

