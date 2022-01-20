function calcularMediaAritmetica(lista) {

    const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumalista / lista.length;
  
    return promedioLista;
  }

const lista = [4000000, 500, 200, 100,];

lista.sort ((a,b) => a - b);

const mitadlista = parseInt(lista.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar (lista.length)){
    const elemento1 = lista [mitadlista - 1];
    const elemento2 = lista [mitadlista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista [mitadlista];
}
