
// Triangulo Isoceles tiene sus lados iguales y base diferente
// Partimos el triangulo a la mitad
// Usamos teorema de pitagorase

// a = ^ c2 - b-2
// altura es igual a raiz cuadrada de lado potencia de 2 menos base potencia de 2

function altura (ladoA,ladoB,base){
    if (ladoA === ladoB && ladoA != base){
        alert ("Tenemos un Triangulo Isoceles");
        const altura = Math.sqrt (ladoA**2 - base**2)
        const alturaDecimales = altura.toFixed(3)
        return alturaDecimales
    } else {
        alert("No lo se")
    }
}
altura(6,6,4)