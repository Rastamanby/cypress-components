import { ButtonTest } from './button-test'

describe('Button', () => {
    it('Active button', () => {
        cy.mount(<ButtonTest isValid={false}/>);
        cy.get('.button').should('be.disabled')
    });
    it('Inactive button', () => {
        cy.mount(<ButtonTest isValid={true}/>);
        cy.get('.button').should('be.enabled')
    });
})