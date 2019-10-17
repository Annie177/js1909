<?php
include "conn.php";//连接数据库
if(isset($_POST['mobile']) && isset($_POST['password'])){
    $phonenum=$_POST['mobile'];
    $pass=($_POST['password']);
    // echo($phonenum);
    echo($pass);
    $result=$conn->query("select * from register where tell='$phonenum' and password='$pass'");
    if($result->fetch_assoc()){
        echo true;//用户名和密码存在
    }else{
        echo false;
    }

}else{
    exit('非法操作');
}