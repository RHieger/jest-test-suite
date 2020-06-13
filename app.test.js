const { greeting, greeting2, groceries } = require("./app");

// Matcher: toBe()

describe("toBe(value)", () => {
  test("returned message is Hello, World", () => {
    expect(greeting()).toBe("Hello, World!");
  });
});

// Matcher: not.toBe()

describe("not.toBe(value)", () => {
  test("returned message is not Hello, World!", () => {
    expect(greeting2()).not.toBe("Hello, World!");
  });
});

// Matcher: toContain()

describe("toContain(element)", () => {
  test("the grocery list contains oatmeal", () => {
    expect(groceries).toContain("oatmeal");
  });
});
