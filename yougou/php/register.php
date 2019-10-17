<?php

include "conn.php";//引入数据库连接文件
if(isset($_POST['mobile'])){//获取手机号
    $phonenum=@$_POST['mobile'];//取值
    $result=$conn->query("select * from register where tell='$phonenum'");//如果能够找到记录，手机号存在
    if($result->fetch_assoc()){//如果$result->fetch_assoc()有值，返回true,否则就是false;
        echo true;
    }else{
        echo false;
    }
}

//将表单的值接收，放入数据库。
if(isset($_POST['submit'])){//点击了注册按钮s
    $phonenum=$_POST['mobile'];
    $pass=sha1($_POST['password']);
    $conn->query("insert register values(null,'$phonenum','$pass',NOW())");
    header('location:http://10.31.155.64/javascript-1909/yougou/src/login.html');//php的跳转
    
}