require(['config'], function () {
    require(['jquery', 'jqcookie'], function () {
        !function () {
            $('#submit').on('click', function () {
                
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.155.64/javascript-1909/yougou/php/login.php',
                    
                    async: true,
                    data: {
                        mobile: $('#mobile').val(),
                        password: $('#password-num').val()
                    }
                    
                }).done(function (data) {
              
                    if (data) {
                        console.log(data)
                        location.replace('http://10.31.155.64/javascript-1909/yougou/src/index.html');
                        $.cookie('$phonenum', '$pass', { expires: 10 });
                    }
                    else {
                        alert('用户名或者密码错误');
        
                    }
                    // return false;
        
                })
            })
        }();

    })
})
