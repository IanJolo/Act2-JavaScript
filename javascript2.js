let numero1 = '';  
let numero2 = '';
let operacion = '';
let resultado = document.getElementById("resultado");  
let apoyo;
function AgregarNumero(numero) {
    if (operacion === '') {
        numero1 += numero;
        resultado.innerHTML = numero1;  
    } else {
        numero2 += numero;
        resultado.innerHTML = numero2;  
    }
}

function SeleccionarOperacion(operacionn) {
    if (numero1 !== '') {  
        operacion = operacionn;  
        resultado.innerHTML = '';  
    }
}

function RealizarOperacion() {
    let num1 = parseInt(numero1);  
    let num2 = parseInt(numero2);
    let resultadoo;

    if (operacion === 'sumar') {
        resultadoo = num1 + num2;
    } else if (operacion === 'restar') {
        resultadoo = num1 - num2;
    } else if (operacion === 'multiplicar') {
        resultadoo = num1 * num2;
    } else {
        resultadoo = num1 / num2;
    }

    resultado.innerHTML = resultadoo;  
    apoyo = resultadoo.toString();   
    numero1='';
    numero2 = '';  
    operacion = ''; 
}
function MostrarNumero(){
    resultado.innerHTML=apoyo;
   AgregarNumero(apoyo);
}

function BorrarDigito() {
    if (operacion === '') {
        numero1 = numero1.slice(0, -1); 
        resultado.innerHTML = numero1; 
    } else {
        numero2 = numero2.slice(0, -1); 
        resultado.innerHTML = numero2;
    }
}
