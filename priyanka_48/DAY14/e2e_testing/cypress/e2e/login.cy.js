describe("Login Flow - E2E Test", () => {
  it("logs in successfully with name, email and password", () => {
    cy.visit("http://localhost:5173");

    cy.get('input[name="name"]').type("Priyanka");
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("123456");

    cy.get('button[type="submit"]').click();

    cy.contains("Welcome, Priyanka").should("be.visible");
  });
});
