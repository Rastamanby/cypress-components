import App from './App'

describe('App', () => {
  it('checking for valid data entry', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-email]').type('abc@abc.abc').should('have.value', 'abc@abc.abc');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get(('[data-test-id="button-submit"]')).should('be.not.disabled');
    cy.get(("form")).submit();
  })

  it('checking for valid data entry without email', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get(('[data-test-id="button-submit"]')).should('be.not.disabled');
    cy.get(("form")).submit();
  })

  it('checking for valid data, email for not valid', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-email]').type('abc@ab').should('have.value', 'abc@ab');
    cy.get('span').contains('Неверный формат email');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
  })

  it('checking for valid data, login for not valid', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('1').should('have.value', '1');
    cy.get('span').contains('Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не более 15 символов');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
  })

  it('checking for valid data, telephone for not valid', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+23').should('have.value', '+23');
    cy.get('span').contains('Неверный формат телефона');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
  })

  it('checking for valid data, password for not valid', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-password]').type('abc').should('have.value', 'abc');
    cy.get('span').contains('Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру');
    cy.get('[data-test-id=input-password-repeat]').type('abc').should('have.value', 'abc');
    cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
  })

  it('checking for valid data, passwords do not match', () => {
    cy.mount(<App />);
    cy.get('[data-test-id=input-login]').type('abc123').should('have.value', 'abc123');
    cy.get('[data-test-id=input-tel]').type('+79261234567').should('have.value', '+79261234567');
    cy.get('[data-test-id=input-password]').type('abcABC123').should('have.value', 'abcABC123');
    cy.get('[data-test-id=input-password-repeat]').type('abc').should('have.value', 'abc');
    cy.get('span').contains('Пароли не совпадают');
    cy.get(('[data-test-id="button-submit"]')).should('be.disabled');
  })
});

