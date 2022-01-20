// Con los booleanos y los modulos buscamos saber su nuestra lista es par o inpar
// funciones HELPERS O UTILS--no son parte de la logica pero se necesita para los calculos
function esPar(numerito){
    return (numerito % 2 === 0);
}


// Esta funcion lo que hace es crear un nuevo array unicamente con los salarios del array COLOMBIA
// Calculando la mediana general
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

//   Generamos la funcion que nos va devolver la mediana
// CALCULADORA DE MEDIANAS
function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);

// invocamos nuestra funcion con booleanos, si la lista es par nos arroja dos elementos, por ello tenemos que analizar dos datos

    if (esPar(lista.length)){
        const personitaMidad1 = lista[mitad - 1];
        const personitaMidad2 = lista [mitad];

// Luego invocamos la funcion que hicimos de media aritmetica para poder saber el promedio entre ambos datos
        const mediana = calcularMediaAritmetica([personitaMidad1, personitaMidad2]);
        return mediana;
// Si la lista es impar, es menos tema unicamente invocamos la funcion que devuelve la mediana que la hicimos codigo arriba
    } else {
        const personitaMidad = lista[mitad];
        return personitaMidad;
    }
}

// Luego queremos tener la lista en orden, le pasamos el SORT para acomodar nueva lista traida con map
const salariosColSorted = salariosCol.sort(
    function(salaryA, salariyB){
        return salaryA - salariyB;
    }
);



// Funcion que te trae la media Aritmetica // Promedio
function calcularMediaAritmetica(lista) {

// Le pides que sume todos los valores de los elementos de una lista esto con el reduce
    const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
// Del total de la lista hecha con el reduce lo dividimos por la longitud de la misma lista para que te de el promedio
    const promedioLista = sumalista / lista.length;
  
    return promedioLista;
  }



// Invocas para que en consola te arroje el resultado de la mediana

const medianaGeneralCol = medianaSalarios (salariosColSorted)


// MEDIANA DEL TOP 10%
const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount);

const medianaTop10Col = medianaSalarios (salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
