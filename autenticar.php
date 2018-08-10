<?php
    session_start();
    $bd = ["Matheus" => "12345", "Mayara" => "54321"];
    $usr1 = $_POST['usr1'];
    $pass1 = $_POST['pass1'];
    $usr2 = $_POST['usr2'];
    $pass2 = $_POST['pass2'];
    $users = [ $usr1 => $pass1, $usr2 => $pass2 ];

    autenticar($bd, $users);

    function autenticar($bd, $users){
        $aux = 0;
        foreach($users as $key => $value){
            foreach($bd as $usr => $pass){
                if($key == $usr && $value == $pass){
                    $_SESSION[$aux] = $key;
                    $aux++;
                }
            }
        }
        if($aux == 2){
            header("location:velha.html");
        }else{
            session_destroy();
            echo "Revise suas credenciais de login!";
            header("refresh: 4; URL=index.html");
        }
    }
?>