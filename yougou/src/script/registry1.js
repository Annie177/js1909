!function () {

    var tellock = true;
    var yzmlock = true;
    var passlock = true;
    var passlock2 = true;
    var readlock = true;
    //手机号码验证
    $('.mobile').on('blur', function () {
        var reg = /^1[3578]\d{9}$/;
        if (this.value !== '') {
            if (reg.test(this.value)) {
                $('.p2').html('手机号码格式正确');
                $('.p2').css({ 'color': 'green' });
                tellock = true;
            } else {
                $('.p2').html('手机号码不正确');
                $('.p2').css({ 'color': 'red' });
                tellock = false;
            }
        } else {
            $('.p2').html('手机号码格不能为空');
            $('.p2').css({ 'color': 'red' });
            tellock = false;
        }

    });
    //验证码验证
    var arr = [];
    for (var i = 48; i <= 57; i++) {
        arr.push(String.fromCharCode(i));
    }
    for (var i = 97; i <= 122; i++) {
        arr.push(String.fromCharCode(i));
    }
    //验证码
    $('.random-yzm').on('click', function () {
        var yzmstr = '';
        for (var i = 1; i <= 6; i++) {
            //var index = parseInt(Math.random() * arr.length);//索引
            var index = random(0, arr.length - 1);//索引
            if (index > 9) {//拼接的字符
                //公平的判断
                var bstop = Math.random() > 0.5 ? true : false;    // 大小写的概率各一半     如果是随机到后半段的数字   就进行大写转换   如果没有的话就直接小写输出   

                if (bstop) {
                    yzmstr += arr[index].toUpperCase();//大写
                } else {
                    yzmstr += arr[index];
                }
            } else {//拼接的是数字
                yzmstr += arr[index];
            }
        }
        this.innerHTML = yzmstr;
    })
    function random(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min;
    }
    // 验证码验证
    $('.yzm-num').on('blur', function () {
        if ($(this).val() != $('.random-yzm').html()) {
            $('.yzm-wrap-2').html('验证码不正确');
            $('.yzm-wrap-2').css({ 'color': 'red' });
            yzmlock = false;
        } else {
            $('.yzm-wrap-2').html('验证码正确');
            $('.yzm-wrap-2').css({ 'color': 'green' });
            yzmlock = true;
        }
    });
    // 密码验证
    $('.password-num').on('input', function () {
        if ($(this).val().length >= 6 && $(this).val().length <= 12) {
            var regnum = /[0-9]+/g;  //数字
            var regA = /[A-Z]+/g;  //大写字母
            var rega = /[a-z]+/g;  //小写字母
            var other = /[\W\_]+/g;  //其他字符
            var count = 0;//计算种类
            if (regnum.test($(this).val())) {
                count++;
            }
            if (regA.test($(this).val())) {
                count++;
            }
            if (rega.test($(this).val())) {
                count++;
            }
            if (other.test($(this).val())) {
                count++;
            }
            switch (count) {
                case 1:
                    $('.password-wrap-2').html('弱');
                    $('.password-wrap-2').css({ 'color': 'red' });
                    passlock = false;
                    break;
                case 2:
                case 3:
                    $('.password-wrap-2').html('中');
                    $('.password-wrap-2').css({ 'color': 'orange' });
                    passlock = true;
                    break;
                case 4:
                    $('.password-wrap-2').html('强');
                    $('.password-wrap-2').css({ 'color': 'green' });
                    passlock = true;
                    break;
            }

        }
        else {
            $('.password-wrap-2').html('密码格式不正确');
            $('.password-wrap-2').css({ 'color': 'red' });
            passlock = false;
        }
    })
    //密码
    $('.password-num').on('blur', function () {
        if ($(this).val() !== '') {
            if (passlock) {
                $('.password-wrap-2').html('密码格式正确');
                $('.password-wrap-').css({ 'color': 'green' });
            } else {
                $('.password-wrap-2').html('密码格式不正确');
                $('.password-wrap-2').css({ 'color': 'green' });
            }

        } else {
            $('.password-wrap-2').html('密码不能为空');
            $('.password-wrap-2').css({ 'color': 'red' });
            passlock = false;
        }
    });
    // 确认密码
    $('.comfirm-num').on('blur', function () {
        if (($(this).val() != $('.password-num').val())) {
            $('.comfirm-2').html('两次密码不一致');
            $('.comfirm-2').css({ 'color': 'red' });
            passlock2 = false;
        } else {
            $('.comfirm-2').html('两次密码一致');
            $('.comfirm-2').css({ 'color': 'green' });
            passlock2 = true;
        }
    });
    //提交
    $('.submit').on('click',function(){
        if($('.mobile').val()==''){
            $('.p2').html('手机号码格不能为空');
            $('.p2').css({ 'color': 'red' });
            tellock = false;
        }
        if($('.yzm-num').val()==''){
            $('.yzm-wrap-2').html('验证码不正确');
            $('.yzm-wrap-2').css({ 'color': 'red' });
            yzmlock = false;
        }
        if($('.password-num').val()==''){
            $('.password-wrap-2').html('密码不能为空');
            $('.password-wrap-2').css({ 'color': 'red' });
            passlock = false;
        }
        if($('.comfirm-num').val()==''){
            $('.comfirm-2').html('两次密码不一致');
            $('.comfirm-2').css({ 'color': 'red' });
            passlock2 = false;
        }
        if($('.word').is(':checked')){
            readlock = true;
        }else{
            readlock = false;
        }
        if(!tellock||!yzmlock||!passlock||!passlock2||!readlock){
            return false;
        }
        
    })
    

}();