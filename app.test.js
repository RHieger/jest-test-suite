const { greeting, groceries } = require("./app");

describe("toBe(value)", () => {
  test("returned message is Hello, World", () => {
    expect(greeting()).toBe("Hello, World!");
  });
});

describe("toContain(element)", () => {
  test("the grocery list contains oatmeal", () => {
    expect(groceries).toContain("oatmeal");
  });
});