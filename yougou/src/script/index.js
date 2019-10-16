//下拉菜单效果
!function () {
    $('.nav .item').hover(function () {
        $('.menu').show();
    }, function () {
        $('.menu').hide();
    })
}();

//产品发布的tab切换--------------------------------------------
!function () {
    let $tab = $('.tabs_1 a')
    $tab.on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.command-list').eq($(this).index()).show().siblings('.command-list').hide();

    })
}();

//主推大牌的tab切换-------------------------------------------
!function () {
    let $tab = $('.tabs_2 a')
    $tab.on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.show').eq($(this).index()).show().siblings('.show').hide();

    })
}();


// 顶部悬浮--------------------------------------------------
!function () {
    $(window).on('scroll', function () {
        let $scrolltop = $(window).scrollTop();
        if ($scrolltop >= 200) {
            $('#suspend').stop(true).animate({
                top: 0
            })
        }
        else {
            $('#suspend').stop(true).animate({
                top: -60
            })
        }
    })
}();


//楼梯效果--------------------------------------------------

!function () {
    let $loutinav = $('#loutinav');
    let $loutili = $('#loutinav li').not('.last_');
    let $louceng = $('section .louceng');
    let $last = $('.last_');

    let $top = $(window).scrollTop();
    if ($top >= 750) {
        $loutinav.show();
    }
    else {
        $loutinav.hide();
    }
    // 1,显示侧边栏
    $(window).on('scroll', function () {
        let $top = $(this).scrollTop();
        if ($top >= 750) {
            $loutinav.show();
        }
        else {
            $loutinav.hide();
        }
        // 4, 侧边栏和内容相对应
        $louceng.each(function (index, element) {
            let $loucengtop = $louceng.eq(index).offset().top + $(element).height() / 2;
            if ($loucengtop > $top) {
                $loutili.removeClass('active_');
                $loutili.eq(index).addClass('active_');
                return false;
            }
        })
    })
    // 2,点击侧边栏显示对应的内容
    $loutili.on('click', function () {
        //$(window).off('scroll');
        $(this).addClass('active_').siblings('li').removeClass('active_');
        //获取每一层楼层的高
        let $loucengtop = $louceng.eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop: $loucengtop
        })
        // 关闭滚轮事件
        //$(window).off('scroll');
    
    });
    // 3, 回到顶部
    $last.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
}();


//海报图切换-------------------------------------------------
!function () {
    let index = 0;
    let timer = null;
    //点击按钮显示颜色并切换按钮
    $('#banner-wrap ul li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#banner-wrap div').eq($(this).index()).show().siblings('#banner-wrap div').hide();

    })

    //鼠标移入移出banner图显示左右箭头
    $('#banner-wrap').hover(function () {
        $('#left').show();
        $('#right').show();
        //鼠标移入关闭定时器
        clearInterval(timer);
    }, function () {
        $('#left').hide();
        $('#right').hide();
        //鼠标移开继续打开定时器
        timer = setInterval(function () {
            index++;
            if (index > $('#banner-wrap ul li').length - 1) {
                index = 0;
            }
            $('#banner-wrap ul li').eq(index).addClass('active').siblings().removeClass('active');
            $('#banner-wrap div').eq(index).show().siblings('#banner-wrap div').hide();
        }, 4000)

    })

    //设置定时器图片自动轮播
    timer = setInterval(function () {
        index++;
        if (index > $('#banner-wrap ul li').length - 1) {
            index = 0;
        }
        $('#banner-wrap ul li').eq(index).addClass('active').siblings().removeClass('active');
        $('#banner-wrap div').eq(index).show().siblings('#banner-wrap div').hide();
    }, 4000)
}();


//最新产品发布产品图切换-------------------------------------------------
!function () {

    $('.arrowright').on('click', function () {
        $('.list-container-wrap').animate({
            left: -920,
        })

    })
    $('.arrowleft').on('click', function () {
        $('.list-container-wrap').animate({
            left: 0,
        })
    })

}();

//今日主推大牌logo图切换-------------------------------------------------
!function () {
    $('.arrowright_2').on('click', function () {
        $('.logo-container_1').animate({
            left: -820,
        })

    })
    $('.arrowleft_1').on('click', function () {
        $('.logo-container_1').animate({
            left: 0,
        })
    })
}();

//最新产品发布鼠标移入加背景颜色 
!function () {
    $('list-container-wrap li').hover(function () {
        $('.list-container-wrap li').css({
            background: "rgb(247, 245, 245)",
        })
    }, function () {
        $('.list-container-wrap li').css({
            background: "white",
        })
    })
}();


//今日主推大牌遮罩效果
!function () {
    $('.brand-pic').on('mouseover', 'li', function (ev) {
        $('.hover_hide').eq($(this).index('.brand-pic li')).show();
    })
    $('.brand-pic').on('mouseout', 'li', function (ev) {
        $('.hover_hide').eq($(this).index('.brand-pic li')).hide();
    })
}();



//品牌潮流资讯遮罩效果
!function () {
    $('#small-pic').on('mouseover', 'li', function (ev) {
        $('.hover-hide').eq($(this).index('#small-pic li')).show();
    })
    $('#small-pic').on('mouseout', 'li', function (ev) {
        $('.hover-hide').eq($(this).index('#small-pic li')).hide();
    })
}();


//2.懒加载
//2.1添加lazy类
//2.2真实的图片路径添加到data-original
//2.3设置图片的宽高

// $(function () { //页面加载完成
//     $("img.lazy").lazyload({
//         effect: "fadeIn" //效果方式
//     });
// });

// <img class="lazy" data-original="img/bmw_m1_hood.jpg" width="765" height="574" alt="BMW M1 Hood">
// <img class="lazy" data-original="img/bmw_m1_side.jpg" width="765" height="574" alt="BMW M1 Side">
// <img class="lazy" data-original="img/viper_1.jpg" width="765" height="574" alt="Viper 1">
// <img class="lazy" data-original="img/viper_corner.jpg" width="765" height="574" alt="Viper Corner">
// <img class="lazy" data-original="img/bmw_m3_gt.jpg" width="765" height="574" alt="BMW M3 GT">
// <img class="lazy" data-original="img/corvette_pitstop.jpg" width="765" height="574" alt="Corvette Pitstop"></img>