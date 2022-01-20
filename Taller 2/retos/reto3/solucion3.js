// Convertiremos los arrays de string a arrays de objetos
const coupons = [
  {
    name: "Regalo",
    discount: 15,
  },
  {
    name: "Amigos",
    discount: 20,
  },
  {
    name: "Pareja",
    discount: 25,
  },
];

// funcion que realizar la matematica para calcular el descuento
function calcularPrecioConDescuento(precio, descuento){
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

  return precioConDescuento;
}

// funcion que ejecuta al picar en el boton de HTML
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
 
  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  // FUNCION QUE VALIDA SI EL NOMBRE ES EL MISMO QUE PONE EL USUARIO EN EL CUPON
  const isCouponValueValid = function (coupon) {
   return coupon.name === couponValue;
};
  // Validar con el .find si el valor que ingreso el usuario se encuentra en el array que tenemos nosotros
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
} 
