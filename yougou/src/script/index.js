//下拉菜单效果
!function(){
    $('.nav .item').hover(function(){
    $('.menu').show();
    },function(){
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
class louti {
    constructor() {
        this.loutinav = $('#loutinav');
        this.loutili = $('#loutinav li').not('.last_');
        this.louceng = $('section .louceng');
        this.last = $('.last_');
    }
    init() {
        let _this = this;
        let $top = $(window).scrollTop();
        if ($top >= 750) {
            _this.loutinav.show();
        }
        else {
            _this.loutinav.hide();
        }
        // 1,显示侧边栏
        $(window).on('scroll', function () {
            let $top = $(this).scrollTop();
            if ($top >= 750) {
                _this.loutinav.show();
            }
            else {
                _this.loutinav.hide();
            }

            // 4, 侧边栏和内容相对应
            _this.louceng.each(function (index, element) {
                let $loucengtop = _this.louceng.eq(index).offset().top + $(element).height() / 2;
                if ($loucengtop > $top) {
                    _this.loutili.removeClass('active_');
                    _this.loutili.eq(index).addClass('active_');
                    return false;
                }
            })

        });
        // 2,点击侧边栏显示对应的内容
        this.loutili.on('click', function () {
            $(this).addClass('active_').siblings('li').removeClass('active_');
            //获取每一层楼层的高
            let $loucengtop = _this.louceng.eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop: $loucengtop
            })
        });

        // 3, 回到顶部
        this.last.on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            })
        });

    }
}
new louti().init();


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
        }, 2000)

    })


    //点击箭头切换图片
    $('#right').on('click', function () {
        index++;
        if (index > $('#banner-wrap ul li').length - 1) {
            index = 0;
        }
        $('#banner-wrap ul li').eq(index).addClass('active').siblings().removeClass('active');
        $('#banner-wrap div').eq(index).show().siblings('#banner-wrap div').hide();

    })
    $('#left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('#banner-wrap ul li').length - 1;
        }
        $('#banner-wrap ul li').eq(index).addClass('active').siblings().removeClass('active');
        $('#banner-wrap div').eq(index).show().siblings('#banner-wrap div').hide();
    })
    //设置定时器图片自动轮播
    timer = setInterval(function () {
        index++;
        if (index > $('#banner-wrap ul li').length - 1) {
            index = 0;
        }
        $('#banner-wrap ul li').eq(index).addClass('active').siblings().removeClass('active');
        $('#banner-wrap div').eq(index).show().siblings('#banner-wrap div').hide();
    }, 2000)
}();


//最新产品发布产品图切换-------------------------------------------------
!function () {

    $('.arrowright').on('click', function () {
        $('.list-container-wrap').animate({
            left:-920,
        })

    })
    $('.arrowleft').on('click', function () {
        $('.list-container-wrap').animate({
            left:0,
        })
    })

}();

//今日主推大牌logo图切换-------------------------------------------------
!function () {
    $('.arrowright_2').on('click', function () {
        $('.logo-container_1').animate({
            left:-820,
        })

    })
    $('.arrowleft_1').on('click', function () {
        $('.logo-container_1').animate({
            left:0,
        })
    })
}();

//最新产品发布鼠标移入加背景颜色 
!function(){
    $('list-container-wrap li').hover(function(){
        $('.list-container-wrap li').css({
            background:"rgb(247, 245, 245)",
        })
    },function(){
        $('.list-container-wrap li').css({
            background:"white",
        })
    })
}();





//今日主推大牌遮罩效果
!function(){
    $('.brand-pic').on('mouseover','li',function(ev){
        $('.hover_hide').eq($(this).index('.brand-pic li')).show();
    })
    $('.brand-pic').on('mouseout','li',function(ev){
        $('.hover_hide').eq($(this).index('.brand-pic li')).hide();
    })
}();



//品牌潮流资讯遮罩效果
!function(){
    $('#small-pic').on('mouseover','li',function(ev){
        $('.hover-hide').eq($(this).index('#small-pic li')).show();
    })
    $('#small-pic').on('mouseout','li',function(ev){
        $('.hover-hide').eq($(this).index('#small-pic li')).hide();
    })
}();