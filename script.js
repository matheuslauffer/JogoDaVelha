var vez = 1;
var ganhdor = '';

var casa = document.getElementsByClassName("casa");
Array.from(casa).forEach(function(element){
    element.addEventListener("click", function(){
        var simbol = element.innerHTML;
        if(simbol == '' || simbol == null){
            if(vez == 1){
                element.innerHTML = "O";
                vez = 2;
            }else{
                element.innerHTML = "X";
                vez = 1;
            }
            verificaTabuleiro();
        }
    });
});

function verificaTabuleiro(){
 if(verificaResultado(1,2,3) || verificaResultado(4,5,6) || verificaResultado(7,8,9) || 
    verificaResultado(1,4,7) || verificaResultado(2,5,8) || verificaResultado(3,6,9) || 
    verificaResultado(1,5,9) || verificaResultado(3,5,7)){
        var vencedor = document.getElementById("ganhador");
        vencedor.value = ganhador;
        alert("Jogador "+ganhador+" venceu");
        document.form.submit();
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
            ganhador = 1;
        }else{
            ganhador = 2;
        }
        return true;
    }
    return false;
}