!function () {
    //let cart = document.querySelector('.cart_warp');
    function goodslist(sid, num) {
        $.ajax({
            url: 'http://10.31.155.64/javascript-1909/yougou/php/shouye.php',
            dataType: 'json'
        }).done(function (arrdata) {
            let strhtml = '';
            for (let i = 0; i < arrdata.length; i++) {
                if (arrdata[i].sid === sid) {

                    strhtml += `
                    <ul class="cart_">
                <li class="li_1">
                    <input type="checkbox">
                </li>
                <!-- 图片 -->
                <li class="li_2">
                    <a href="">
                        <img src="${arrdata[i].url}" alt="">
                    </a>
                </li>
                <!-- 标题 -->
                <li class="li_3">
                    <a href="" class="cart-title">${arrdata[i].title}</a>
                </li>
                <!-- 颜色尺码 -->
                <li class="li_4">
                    <div style="padding-left: 20px;">
                        <p class="p_1">颜色：
                            <i>黑单里</i>
                        </p>
                        <p class="p_1">尺码：
                            <i>36</i>
                        </p>
                    </div>
                </li>
                <!-- 价格 -->
                <li class="li_5">${arrdata[i].price}</li>
                <!-- 数量 -->
                <li class="li_6">
                    <a href="javascript:;"class="li_6_1">-</a>
                    <input type="text" class="li_6_3" value="${num}">
                    <a href="javascript:;" class="li_6_2">+</a>

                </li>
                <li class="li_7">
                    <strong class="totalprice">${arrdata[i].price * num}</strong>
                </li>
                <li class="li_8">
                    <a href="">移入收藏夹</a><br>
                    <a href="">删除</a>
                </li>
            </ul>
                    `;
                    // console.log(strhtml)
                    // cart.innerHTML += strhtml;
                    $('.cart_warp').html($('.cart_warp').html() + strhtml);

                    // 全选效果
                    let $allselect = $('.allselect');
                 
                    let $inputs = $('input').not('.allselect');
                    $allselect.on('click', function () {
                        if ($(this).prop('checked')) {
                            $inputs.prop('checked', true);
                        } else {
                            $inputs.prop('checked', false);

                        }
                    });
                    let inputslength=$inputs.size();
                    $inputs.on('click',function(){
                        if($('inputs:checked').not('.allselect').length===inputslength){
                            $allselect.prop('checked', true);
                            
                        }else{
                            $allselect.prop('checked', false);

                        }
                    })
                    // 加减       
                    $('.li_6_1').on('click',function(){
                        console.log($('.li_6_1'))
                        var num = $(this).siblings(".li_6_3").val();
                        num--;
                        $(this).siblings(".li_6_3").val(num);
                    });
                    $('.li_6_2').on('click',function(){
                        
                        var num = $(this).siblings(".li_6_3").val();
                        num++;
                        $(this).siblings(".li_6_3").val(num);
                    });
                    //总价
                    
                    
                }

            }
        })

    }

    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        let arrsid = $.cookie('cookiesid').split(',');
        let arrnum = $.cookie('cookienum').split(',');
        for (let i = 0; i < arrsid.length; i++) {
            goodslist(arrsid[i], arrnum[i])
        }
    }
}();


// 全选效果
// !function () {
//     let $allselect = $('.allselect');
//     let $inputs = $('.all input').not('.allselect');
//     $allselect.on('click', function () {
//         if ($(this).prop('checked')) {
//             alert('1');
//             $inputs.prop('checked', true);
//         } else {
//             $inputs.prop('checked', false);

//         }
//     })
// }();