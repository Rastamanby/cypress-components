import App from "../../../App"

it('validity check email 1', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('abc').should('have.value', 'abc');
  cy.get('span').contains('Неверный формат email');
})

it('validity check email 2', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('abc@abc').should('have.value', 'abc@abc');
  cy.get('span').contains('Неверный формат email');
})

it('validity check email 3', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('abc@abc.abc').should('have.value', 'abc@abc.abc');
})
