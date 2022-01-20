
// Funcion del Cuadrado-----------------------------------------------

function perimetroCuadrado (lado)
{
    return lado * 4; 
} 
function areaCuadrado (lado){
    return lado * lado;
}
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);    
}

// Funcion del Triangulo ----------------------------------------------

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("inputLadoA");
    const ladoB = document.getElementById("inputLadoB");
    const base = document.getElementById ("inputBase");

    const data = perimetroTriangulo(parseFloat(ladoA.value), parseFloat(ladoB.value), parseFloat(base.value));
    alert (data);
}
function calcularAreaTriangulo(){
    const base = document.getElementById ("inputBase");
    const altura = document.getElementById ("inputAltura");

    const datosArea = areaTriangulo(parseFloat(base.value), parseFloat (altura.value));
    alert(datosArea);
}

// Funcion del Circulo ----------------------------------------------

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2; 
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}

function obtenerDiametroCirculo(){
    const radioUsuario = document.getElementById("radioParametro");

    const resultadoDiametro = diametroCirculo(parseFloat(radioUsuario.value));
    alert(resultadoDiametro);
}

function obtenerPerimetroCirculo(){
    const radioUsuario = document.getElementById("radioParametro");
    const resultadoPerimetroCirculo = perimetroCirculo(radioUsuario.value);

    alert(resultadoPerimetroCirculo);
}
function Ý(){
    const radioUsuario = document.getElementById("radioParametro");

    const resultadoArea = areaCirculo(parseFloat(radioUsuario.value));
    alert(resultadoArea);
}