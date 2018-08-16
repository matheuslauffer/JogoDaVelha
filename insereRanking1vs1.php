<?php
    session_start();

    $vencedor = $_POST['ganhador'];
    insereRanking($vencedor);
    ordenaRanking();
    function insereRanking($vencedor){
      $aux = 0;
      $vitorias = 0;
      $i = 0;
      $file = fopen("ranking1vs1", "a+");
      $conteudo = "";
      while(!feof($file)){
        $linha = fgets($file, 1024);
        $parametros = explode(":",$linha);
        if($parametros[0] == $vencedor){
          $vitorias = intval($parametros[1]) + 1;
          $linha = str_replace($linha, $linha, $parametros[0].":".$vitorias.PHP_EOL);
          $aux = 1;
        }
        $i++;
        $conteudo.=$linha;
      }
      if($aux == 0){
        fwrite($file,$vencedor.":1".PHP_EOL);
      }else{
        rewind($file);
        ftruncate($file,0);
        fwrite($file,$conteudo);
      }
      fclose($file);
    }

    function ordenaRanking(){
      $ranking = [];
      $aux;
      $i = 0;
      $file = fopen("ranking1vs1", "r");
      while(!feof($file)){
        $linha = fgets($file, 1024);
        $ranking[$i] = $linha;
        $i++;
      }
      fclose($file);
      for($j = 0; $j < $i-1; $j++){
        for($k = $j; $k < $i-1; $k++){
            $parametros1 = explode(":",$ranking[$j]);
            $parametros2 = explode(":", $ranking[$k]);
            if($parametros2[1]>$parametros1[1]){
              $aux = $ranking[$j];
              $ranking[$j] = $ranking[$k];
              $ranking[$k] = $aux;
            }
        }
      }
      mostraRanking($ranking);
    }
    function mostraRanking($ranking){
      for($i = 0; $i < count($ranking); $i++){
        echo $ranking[$i]."<br />";
      }
    }
?>
