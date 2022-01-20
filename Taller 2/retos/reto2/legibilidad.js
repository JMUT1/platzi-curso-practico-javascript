const cupons = ["regalo", "nombre", "usuario"];

function calcularPrecioconDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const pricesValue =  parseFloat(inputPrice.value);

  const inputCupon = document.getElementById("inputCupon");
  const cuponValue = inputCupon.value ;

  let descuento;
//   Error First con array.includes, nos va permitir validar si un elemento ha sido almacenado en el array

    if (!cupons.includes(cuponValue)){
        alert ("El cupón " + cuponValue + " no existe")
    } else if (cuponValue === "regalo"){
        descuento = 10;
    } else if (cuponValue === "nombre"){
        descuento = 15;
    } else if (cuponValue === "usuario"){
        descuento = 20;
    }

  const precioConDescuento = calcularPrecioconDescuento(pricesValue, descuento);
  const resultP = document.getElementById("resultP");
  resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}
