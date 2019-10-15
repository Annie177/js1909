$.ajax({
    type: 'post',
    url: 'http://10.31.155.64/javascript-1909/yougou/php/shouye.php',
    data: {
        name: 'zhangsan'
    },
    async: true,
    dataType: 'json'
}).done(function (arrdata) {
    //侧边小图列表
    let smallerpic = '';
    //二级菜单品牌数据渲染
    let pinpaipic='';
    $.each(arrdata, function (index, value) {
        smallerpic += `
        <li>
                    <img src="${value.url}" alt="">
                    
                </li>
        `;
        pinpaipic+=`
        
                <li><a href="">${value.brandname}</a></li>
                
        `;
    })
    
    $('.smaller-box').html(smallerpic);
    $('.pinpai-left').html(pinpaipic);

    

});