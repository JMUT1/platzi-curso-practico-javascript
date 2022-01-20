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

  switch (cuponValue) {
    case cupons[0]:
      descuento = 5;
      break;
    case cupons[1]:
      descuento = 10;
      break;
    case cupons[2]:
      descuento = 15;
      break;
  }

  const precioConDescuento = calcularPrecioconDescuento(pricesValue, descuento);
  const resultP = document.getElementById("resultP");
  resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}
