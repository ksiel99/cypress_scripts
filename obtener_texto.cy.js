/// <reference types="cypress" />
describe ('obtener_texto', () =>{

    it('ejemplo_obtener_texto', () =>{
        cy.visit('https://www.amazon.com.mx/')
        cy.get('[for="twotabsearchtextbox"]').should('contain', 'Buscar Amazon.com.mx')

        cy.get('[for="twotabsearchtextbox"]').then (label=>{
            const labelText = label.text()
            expect(labelText).to.equal('Buscar Amazon')
            cy.wrap(labelText).should('contain','Buscar Amazon.com.')

        })
    })
})