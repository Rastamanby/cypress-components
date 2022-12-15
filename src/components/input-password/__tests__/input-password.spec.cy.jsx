import App from "../../../App"

it('validity check password 1', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abc').should('have.value', 'abc');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 2', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abcABC').should('have.value', 'abcABC');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 3', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
})

it('button hide/show', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').parent().parent().parent().contains('.form-control__addons').contains('button').click();
  cy.get('[data-test-id=input-password]').should('have.attr', 'type', 'text');
});

