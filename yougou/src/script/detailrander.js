let $sid = location.search.substring(1).split('=')[1];

$.ajax({
    type: 'get',
    url: 'http://10.31.155.64/javascript-1909/yougou/php/detail.php',
    data: {
        id:$sid
    },
    async: true,
    dataType: 'json'
}).done(function (arrdata) {
    $('#smallpic').attr('src', arrdata.url);
    $('#bigpic').attr('src', arrdata.url);
    //$('.now symbol').html(arrdata.price);
    let $piclist=arrdata.urls.split(',');
    //侧边小图列表
    let smallerpic = '';
    //二级菜单品牌数据渲染
    //let pinpaipic='';
    for (let value of $piclist){
        smallerpic += `
        <li><img src="${value}" alt=""></li>
      
        `;
        
    }
    
    // $.each(arrdata, function (index, value){
    // pinpaipic+=`
        
    //     <li><a href="">${value.brandname}</a></li>
                
    //     `;
    // })
    // console.log(arrdata);
    $('.smaller-box').html(smallerpic);
    //$('.pinpai-left').html(pinpaipic);


});

