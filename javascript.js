function RealizarOperacion(){
    let resultado;
    let pAModificar=document.getElementById("resultado")
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let operacion=document.getElementById("operacion")

    if(operacion.value=="sumar"){
        resultado=numero1 + numero2;
    }else if(operacion.value=="restar"){
        resultado=numero1-numero2;
    }
    else if(operacion.value=="multiplicar"){
        resultado=(numero1*numero2);
    }
    else if(operacion.value=="dividir"){
        resultado=numero1/numero2;
    }
    pAModificar.innerHTML=resultado;
}