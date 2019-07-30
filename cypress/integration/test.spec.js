describe("First Test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

describe("Visit app - local", () => {
  it("visits my app", () => {
    cy.visit("http://localhost:3000");
  });
});
