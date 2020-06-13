const {
  greeting,
  greeting2,
  groceries,
  secondsPerDay,
  millisecondsPerDay,
  millisecondsPerYear
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

// Matcher: toBeGreaterThan()

describe("toBeGreaterThan()", () => {
  test("total seconds per day are greater than 1,440", () => {
    expect(secondsPerDay()).toBeGreaterThan(1_440);
  });
});

// Matcher: not.toBeGreaterThan()

describe("not.toBeGreaterThan()", () => {
  test("total seconds per day are not greater than 86,400",
    () => {
      expect(secondsPerDay()).not.toBeGreaterThan(86_400);
    });
});

// Matcher: toBeGreaterThanOrEqual()

describe("tobeGreaterThanOrEqual()", () => {
  test("total seconds per day are greater than or equal to 86,400",
    () => {
      expect(secondsPerDay()).toBeGreaterThanOrEqual(86_400);
    });
});

// Matcher: not.toBeGreaterThanOrEqual()

describe("not.toBeGreaterThanOrEqual()", () => {
  test("total milliseconds per day are not greater than 87,400,000",
    () => {
      expect(millisecondsPerDay()).not
      .toBeGreaterThanOrEqual(87_400_000);
    });
});

// Matcher: toBeLessThanOrEqual()

describe("toBeLessthanOrEqual()", () => {
  test("total milliseconds per year are less than or equal to 31,557,600,000",
    () => {
      expect(millisecondsPerYear()).toBeLessThanOrEqual(31_557_600_000);
    })
});
