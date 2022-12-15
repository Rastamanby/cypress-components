import App from "../../../App"

it('test button hide/show in password field', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password] ~ button').click();
  cy.get('span').contains('Неверный формат email');
})

