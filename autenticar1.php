<?php
    session_start();

    $bd = ["Matheus" => "12345", "Mayara" => "54321"];
    $usr1 = $_POST['usr1'];
    $pass1 = $_POST['pass1'];
    $users = [ $usr1 => $pass1 ];

    autenticar($bd, $users);

    function autenticar($bd, $users){
        $aux = 0;
        foreach($users as $key => $value){
            foreach($bd as $usr => $pass){
                if($key == $usr && $value == $pass){
                    $_SESSION['usr'.$aux] = $key;
                    $aux++;
                }
            }
        }
        if($aux == 1){
            header("location:velhaVSCPU.html");
        }else{
            session_destroy();
            echo "Revise suas credenciais de login!";
            header("refresh: 4; URL=login1.html");
        }
    }
?>
