const sumar = (a, b) => {
  if (typeof a != "number" || typeof b != "number") return null;
  const suma = a + b;
  return suma;
};

const calcularTotal = (items) => {
  let total = 0;

  if (!items.length) {
    throw Error("Factura Inválida");
  }

  for (let item of items) {
    total += item.quantity * item.price;
  }

  return total;
};

module.exports = { sumar, calcularTotal };
