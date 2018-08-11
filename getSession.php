<?php
    session_start();  
    foreach($_SESSION as $key => $val){
        $arr[] = $val;
    }
    echo json_encode($arr);
?>