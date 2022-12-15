import App from "../../../App"

it('validity check telephone 1', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-tel]').type('abcdefghi').should('have.value', 'abcdefghi');
  cy.get('span').contains('Неверный формат телефона');
})

it('validity check telephone 2', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-tel]').type('+7926123').should('have.value', '+7926123');
  cy.get('span').contains('Неверный формат телефона');
})

it('validity check telephone 3', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-tel]').type('+792612345673322').should('have.value', '+792612345673322');
  cy.get('span').contains('Неверный формат телефона');
})

it('validity check telephone 4', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
})



