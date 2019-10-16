<?php
include "conn.php";
if(isset($_GET['id'])){
    $sid=$_GET['id'];
    $result=$conn->query("select * from data where sid=$sid");
    echo json_encode($result->fetch_assoc());
}