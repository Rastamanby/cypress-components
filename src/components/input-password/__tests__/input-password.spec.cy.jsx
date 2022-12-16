import App from "../../../App"

it('validity check password 1', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abc').should('have.value', 'abc');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 2', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abcdefg').should('have.value', 'abcdefg');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 3', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('ABCDEFG').should('have.value', 'ABCDEFG');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 4', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('1234567').should('have.value', '1234567');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 5', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('aAB12').should('have.value', 'aAB12');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 6', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abcABC').should('have.value', 'abcABC');
  cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})

it('validity check password 7', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
  cy.get('span').should('not.contain.text', 'Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
})



