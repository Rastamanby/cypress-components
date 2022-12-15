import App from "../../../App"

it('validity check email 1', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-login]').type('1').should('have.value', '1');
  cy.get('span').contains('Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не более 15 символов');
})

it('validity check email 2', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-login]').type('a234567890123456').should('have.value', 'a234567890123456');
  cy.get('span').contains('Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не более 15 символов');
})

it('validity check email 3', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-login]').type('a2').should('have.value', 'a2');
  cy.get('span').should('not.contain.text', 'Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не более 15 символов');
})

it('validity check email 4', () => {
  cy.mount(<App />);
  cy.get('[data-test-id=input-login]').type('a23456789012345').should('have.value', 'a23456789012345');
  cy.get('span').should('not.contain.text', 'Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не более 15 символов');
})

