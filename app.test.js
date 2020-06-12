describe("toBe(value)", () => {
  test("returned message is Hello, World", () => {
    expect(greeting().toBe("Hello, World!"));
  });
});
