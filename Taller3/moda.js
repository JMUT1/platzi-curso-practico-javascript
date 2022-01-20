// El elemento que mas se repite en la lista en un listado // puede existir mas de una moda, no tiene que ser en solo valor

const lista = [1,2,2,3,2,1,4,4,2,];

const listaCount = {};

// Lo que nos ayuda el metodo .map aqui fue generar un objeto, siendo la const lista donde sacamos el valor y metiendo en Lista Count las veces que se repite
lista.map(
    function (elemento){
        if (listaCount [elemento]){
            listaCount [elemento] += 1;
        } else{
            listaCount [elemento] = 1;
        }
    }
);

// Object entries convierte el objeto que le pasemos a un array
const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB){
        return elementoA [1] - elementoB [1];
    }
);

const moda = lista [lista.length - 1];