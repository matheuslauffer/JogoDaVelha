var vez = 0;
var ganhador = '';

var casa = document.getElementsByClassName("casa");
Array.from(casa).forEach(function(element){
    element.addEventListener("click", function(){
        var simbol = element.innerHTML;
        if(simbol == '' || simbol == null){
            if(vez == 0){
                element.innerHTML = "O";
            }
            verificaTabuleiro();
            vezDaCPU();
            verificaTabuleiro();
        }
    });
});

function vezDaCPU(){
  do{
    var i = 0;
    var casaSorteada = Math.floor(Math.random() * (9 - 1) + 1);
    console.log(casaSorteada)
    var casa = document.getElementById("casa"+casaSorteada);
    console.log(casa.innerHTML);
    if(casa.innerHTML == '' || casa.innerHTML == null){
      casa.innerHTML = "X";
      i = 1;
    }
  }while(i == 0);
}

function verificaTabuleiro(){
 if(verificaResultado(1,2,3) || verificaResultado(4,5,6) || verificaResultado(7,8,9) ||
    verificaResultado(1,4,7) || verificaResultado(2,5,8) || verificaResultado(3,6,9) ||
    verificaResultado(1,5,9) || verificaResultado(3,5,7)){
        var xhr = new XMLHttpRequest();
        xhr.open("POST","getSession.php",true);
        xhr.send();
        var resp;
        if(ganhador == 0){
          xhr.onreadystatechange = function(){
              if (xhr.readyState < 4)
                  console.log('A carregar...');
              else if (xhr.readyState === 4) {
                  if (xhr.status == 200 && xhr.status < 300){
                      resp = JSON.parse(xhr.responseText);
                      var nomeGanhador = ganhador == 0 ? resp[0] : resp[1];
                      alert("Jogador "+nomeGanhador+" venceu");
                      var vencedor = document.getElementById("ganhador");
                      vencedor.value = nomeGanhador;
                      document.form.submit();
                  }
              }
          }
        }else {
          alert("CPU VENCEU!");
        }
    }
}

function verificaResultado(c1, c2, c3){
    var casa1 = document.getElementById("casa"+c1);
    var casa2 = document.getElementById("casa"+c2);
    var casa3 = document.getElementById("casa"+c3);
    var val1 = casa1.innerHTML;
    var val2 = casa2.innerHTML;
    var val3 = casa3.innerHTML;
    if((val1 == val2)&&(val1 == val3) && (val1 != '' && val1 != null)){
        if(val1 == "O"){
            ganhador = 0;
        }else{
            ganhador = 1;
        }
        return true;
    }
    return false;
}
