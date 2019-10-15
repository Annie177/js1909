//下拉菜单效果
!function () {
    $('.nav .item').hover(function () {
        $('.menu').show();
    }, function () {
        $('.menu').hide();
    })
}();

// 侧边小图鼠标经过效果
!function () {
    $('.smaller-box').on('mouseover', 'li', function (ev) {
        $('.smaller-box li').eq($(this).index()).addClass('hover_').siblings().removeClass('hover_');
    })
}();

//放大镜效果
!function () {
    let $sf = $('#sfdj');
    let $bf = $('#bfdj');
    let $spic = $('#smallpic');
    let $bpic = $('#bigpic');
    //移入鼠标显示放大镜
    $('.small-pic').on('mouseover', function () {
        $bf.show();
        $sf.show();
        //计算小放大镜的尺寸
        $sf.width($spic.width() / $bpic.width() * $bf.width());
        $sf.height($spic.height() / $bpic.height() * $bf.height());
        // 求比例
        let $bili = $bpic.height() / $spic.height();
        //鼠标移动效果
        $(this).on('mousemove', function (ev) {
             var ev = ev || window.event;
            let $l = ev.pageX - $(this).offset().left - ($sf.width() / 2);
            let $t = ev.pageY - $(this).offset().top - ($sf.height() / 2);
            if ($l <= 0) {
                $l = 0;
            } else if ($l >= $(this).width() - $sf.width()) {
                $l = $(this).width() - $sf.width();
            }
            if ($t <= 0) {
                $t = 0;
            } else if ($t >=  $(this).height() - $sf.height()) {
                $t =  $(this).height() - $sf.height();
            }

            $sf.css({
                "left": $l,
                "top": $t
            })

            $bpic.css({
                "top": -$bili * $t,
                "left": -$bili * $l
                
            })
        })
    });

    //鼠标移出
    $('.small-pic').on('mouseout', function () {
        $bf.hide();
        $sf.hide();
    })

    //点击图片实现切换
    $('.smaller-box').on('mouseover', 'li', function (ev) {
        $(this).addClass('hover_').siblings().removeClass('hover_');
        $spic.attr('src', $(this).find('img').attr('src'));
        $bpic.attr('src', $(this).find('img').attr('src'));
    })
}();


//颜色勾选效果
!function(){

}();