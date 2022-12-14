import App from './App'

describe('<Stepper>', () => {
    for (let i = 0; i < 100; i++) {
        it(`render ${i}`, () => {
            cy.mount(<App />);
            cy.get('.input').type('1111');
        })
    }
})