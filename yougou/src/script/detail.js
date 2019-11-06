require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
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
            } else if ($t >= $(this).height() - $sf.height()) {
                $t = $(this).height() - $sf.height();
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
!function () {

}();

//点击加入购物袋
!function () {
    let sid = location.search.substring(1).split('=')[1];
    let sidarr = [];
    let numarr = [];
    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        sidarr = $.cookie('cookiesid').split(',');
        numarr = $.cookie('cookienum').split(',');
    }

    $('.btn-left').on('click', function () {
        alert('已加入购物车');
       
        if (sidarr.indexOf(sid)!=-1) {
            let index=sidarr.indexOf(sid);
            numarr[index] = parseInt(numarr[index]) + parseInt($('.input-num').find('input').val());
            $.cookie('cookienum', numarr.toString(), { expires: 10 });
        }
        else {
            sidarr.push(sid);
            $.cookie('cookiesid', sidarr.toString(), { expires: 10 });
            numarr.push($('.input-num').find('input').val());
            $.cookie('cookienum', numarr.toString(), { expires: 10 });
            console.log(sidarr);
            console.log(numarr);

        }
    })
}();






    })
})



