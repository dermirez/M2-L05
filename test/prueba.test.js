const { calcularTotal } = require("../index");

// I want to make sure that when calcularTotal is executed, the cb function is invoked as well.
const mockGetItems = jest.fn(() => {
  return [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 5, quantity: 3 },
  ];
});

describe("calcularTotal function", () => {
  it("The function 'getItems' should be called, at least once, when calcularTotal is invoked", () => {
    calcularTotal(mockGetItems);
    expect(mockGetItems).toHaveBeenCalled();
  });
});
