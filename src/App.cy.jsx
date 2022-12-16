import { mount } from "cypress/react18";
import App from "./App";

describe("App", () => {
  it.only("Check form", () => {
    mount(<App />);
    cy.get('[data-test-id="button-submit"]').should("be.disabled");
    cy.get("[data-test-id=input-login]").type("abc123");

    cy.get("[data-test-id=input-tel]").type("aaa");
    cy.get("span").should("contain.text", "Неверный формат телефона");
    cy.get("[data-test-id=input-tel]").clear().type("+79991231212");
    cy.get("span").should("not.contain.text", "Неверный формат телефона");

    cy.get("[data-test-id=input-email]").type("abc");
    cy.get("span").should("contain.text", "Неверный формат email");
    cy.get("[data-test-id=input-email]").clear().type("abc@ab.ru");
    cy.get("span").should("not.contain.text", "Неверный формат email");

    cy.get("[data-test-id=input-password]").type("aaaaaa");
    cy.get("span").should(
      "contain.text",
      "Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру"
    );
    cy.get("[data-test-id=input-password]").clear().type("Aaaaaa1");
    cy.get("span").should(
      "not.contain.text",
      "Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру"
    );
    cy.get("[data-test-id=input-password-repeat]").type("abcABC123");
    cy.get("span").should("contain.text", "Пароли не совпадают");
    cy.get("[data-test-id=input-password-repeat]").clear().type("Aaaaaa1");
    cy.get("span").should("not.contain.text", "Пароли не совпадают");

    cy.get('[data-test-id="button-submit"]').should("be.enabled");
    cy.get("form").submit();
  });
});
