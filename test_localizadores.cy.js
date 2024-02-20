/// <reference types="cypress" />

describe('localizadores', () => {
    

    it('tipos_localizadores', () => {
        cy.visit("www.amazon.com.mx")
        
        //tag name
        cy.get('img')

        //id
        cy.get('#nav-logo-sprites')

        //class value
        cy.get('.nav-logo-link')

        //Attribute
        cy.get('[widget]')
        //cambio de prueba



    })
})