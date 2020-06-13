const {
  greeting,
  greeting2,
  groceries
} = require("./app");

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

// Matcher: not.toContain()

describe("not.toContain(element)", () => {
  test("the grocery list does not contain cherries", () => {
    expect(groceries).not.toContain("cherries");
  });
});

// Matcher: toHaveLength()

describe("toHaveLength()", () => {
  test("the grocery list contains 14 items", () => {
    expect(groceries).toHaveLength(14);
  });
});

// Matcher: not.toHaveLength()

describe("not.toHaveLength()", () => {
  test("the grocery list does not contain 20 items", () => {
    expect(groceries).not.toHaveLength(20);
  });
});
