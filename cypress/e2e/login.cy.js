/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe("login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display login page correctly", () => {
    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="password"]').should("be.visible");
    cy.get("button")
      .contains(/^Masuk$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it("should display alert when password is empty", () => {
    cy.get("input[placeholder='Email']").type("testuser@gmail.com");

    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it("should display alert when username and password are wrong", () => {
    cy.get("input[placeholder='Email']").type("wronguser@gmail.com");
    cy.get("input[placeholder='password']").type("wrongpassword");

    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("email or password is wrong");
    });
  });

  it("should display homepage when email dan password are correct", () => {
    cy.get("input[placeholder='Email']").type("roshanhan@gmail.com");
    cy.get("input[placeholder='password']").type("DicodingOkeBGT");

    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.contains("Masuk").click();

    cy.url().should("not.include", "/login");
  });
});
