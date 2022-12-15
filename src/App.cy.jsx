import App from './App'

describe('App', () => {
    it('Render button', () => {
        cy.mount(<App />);
        cy.get('[data-test-id=input-email]').type('1111');
    })
});