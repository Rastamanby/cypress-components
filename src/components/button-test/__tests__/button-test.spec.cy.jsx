import { ButtonTest } from "../button-test"


it('has button type submit', () => {
  cy.mount(<ButtonTest
    isValid={true}
  />);
  cy.get(('[data-test-id="button-submit"]')).should('have.attr', 'type', 'submit');
})

it('disabled button when the data is not valid', () => {
  cy.mount(<ButtonTest
    isValid={false}
  />);
  cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
})

it('not disabled button when the data is valid', () => {
  cy.mount(<ButtonTest
    isValid={true}
  />);
  cy.get(('[data-test-id="button-submit"]')).should('be.not.disabled');
})