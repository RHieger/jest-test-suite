const {
  greeting,
  greeting2,
  groceries,
  secondsPerDay,
  millisecondsPerDay,
  millisecondsPerYear,
  people,
  can1,
  can2,
  can3,
  can4,
  printMessage,
  printMessage2
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
    });
});

// Matcher: not.toBeLessThanOrEqual()

describe("not.toBeLessThanOrEqual()", () => {
  test(`total milliseconds per year are not less than or
      equal to 87,400,000`, () => {
    expect(millisecondsPerYear()).not
    .toBeLessThanOrEqual(87_400_000);
  });
});

// Matcher: toContainEqual(item)

describe("toContainEqual(item)", () => {
  test("name is Jennifer James, age is 35 and sex is female", () => {
    const myPerson = { name: "Jennifer James", age: 35, sex: "female" };
    expect(people).toContainEqual(myPerson);
  });
});


// Matcher: not.toContainEqual(item)

describe("not.toContainEqual(item)", () => {
  test(`name is not Robert Roth, age is not 52 and sex
      is not male`, () => {
    const myPerson = { name: "Jenna Smith", age: 22, sex: "female" };
    expect(people).not.toContainEqual(myPerson);
  });
});


// Matcher: toEqual()/not.toEqual()

describe("canned legumes", () => {
  test("can1 and can2 have the same ingredients and ounces per can", () => {
    expect(can2).toEqual(can1);
  });
  test("can3 and can4 have different ingredients and ounces per can", () => {
    expect(can4).not.toEqual(can3);
  });
});

// Matcher toBeNull()/not.toBeNull()

describe("Am I null?", () => {
  test("printMessage() returns null", () => {
     expect(printMessage()).toBeNull();
  });
  test("printMessage2() does not return null", () => {
    expect(printMessage2()).not.toBeNull();
  });
});
