require (['config'],function(){
 require(['jquery','lazyload'],function(){
    $.ajax({
        type: 'post',
        url: 'http://10.31.155.64/javascript-1909/yougou/php/shouye.php',
        data: {
            name: 'zhangsan'
        },
        async: true,
        dataType: 'json'
    }).done(function (arrdata) {
        //新品推荐图片渲染
        let strhtml = '';
        //今日主推大牌logo
        let logocontainer = '';
        //今日主推大牌小logo
        let brandpic='';
        //品牌潮流资讯产品渲染
        let smallpic='';
        //二级菜单品牌数据渲染
        let pinpaipic='';
        $.each(arrdata, function (index, value) {
            strhtml += `
                <div style="float:left;width:230px;">
                        <div class="img-wrap">
                        <a target="_blank" href="http://10.31.155.64/javascript-1909/yougou/src/detail.html?sid=${value.sid}" title="">
                            <img class="lazy" data-original="${value.url}" width="210" height="210" alt="">
                        </a>
                    </div>
                    <img src="${value.logourl}" alt=""  class="img-brand">
                    <a target="_blank" href="javascript:;" title="">${value.descrip}</a>
                    <div class="price-wrap">
                        <div>￥<span>${value.price}</span></div>
                    </div>
                </div>
            `;
            logocontainer += `
                <a href="javascript:;" class="brands">
                    <img class="lazy" data-original="${value.logourl}" width="68" height="31" alt="">
                </a>
            `;
            brandpic+=`
                <li>
                    <a href="javascript:;" target="_blank">
                        <img class="lazy" data-original="${value.url}" width="315" height="402" alt=""
                            width="315" height="402">
                        <div class="hover_hide">
                            <img src="${value.logourl}"
                                width="110" height="50">
                        </div>
                    </a>
                </li>
            `;
            smallpic+=`
                <li>
                    <img class="lazy" data-original="${value.url}" width="231" height="250" alt="">
                    <div class="hover-hide">
                        <p class="description">${value.descrip}</p>
                    </div>
                </li>
            `;
            pinpaipic+=`
            
                    <li><a href="">${value.brandname}</a></li>
                    
            `;
            
            
        })
        $('.list-1').eq(0).html(strhtml);
        $('.list-1').eq(1).html(strhtml);
        $('.logo-container_1').html(logocontainer);
        $('.brand-pic').html(brandpic);
        $('#small-pic').html(smallpic);
        $('.pinpai-left').html(pinpaipic);
        
        //懒加载
        $(function () { //页面加载完成
            $("img.lazy").lazyload({
                effect: "fadeIn" //效果方式
            });
        });
        
    });
 })
})    





