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
  cy.get('[data-test-id=input-email]').type('123@123.123').should('have.value', '123@123.123');
  cy.get('span').contains('Неверный формат email');
})

it('validity check email 4', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('abc.abc').should('have.value', 'abc.abc');
  cy.get('span').contains('Неверный формат email');
})

it('validity check email 5', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('123@123.abc').should('have.value', '123@123.abc')
  cy.get('span').should('not.contain.text', 'Неверный формат email');
})

it('validity check email 6', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-email]').type('abc@abc.abc').should('have.value', 'abc@abc.abc')
  cy.get('span').should('not.contain.text', 'Неверный формат email');;
})
