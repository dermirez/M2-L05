// calcular el total de una factura con un solo ítem
// calcular el total de una factura con varios ítem
// Manejar correctamente una lista vacía de ítems

// [{name: "Producto A", price: 10, quantity: 2}]

const { calcularTotal } = require("../index");

describe("Function CalcularTotal", () => {
  it("Calculate the invoice if it contains only one item", () => {
    expect(
      calcularTotal([{ name: "Producto A", price: 10, quantity: 2 }])
    ).toEqual(20);
  });

  it("Calculate the total amount if invoice contains multiple items", () => {
    expect(
      calcularTotal([
      { name: "Producto A", price: 10, quantity: 2 },
      { name: "Producto B", price: 20, quantity: 3 },
      { name: "Producto C", price: 30, quantity: 4 }
    ])).toEqual(10 * 2 + 20 * 3 + 30 * 4);
  });

  it("Should return 'Factura Inválida' if array is empty", () => {
    expect(() => calcularTotal([])).toThrowError("Factura Inválida")
  });
});
