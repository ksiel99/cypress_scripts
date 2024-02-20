describe('encontrando_webelements', () =>{

    it('ejemplos_webelements', () => {
        cy.visit('https://www.google.com.mx/')
        cy.contains('.pHiOh', 'Sobre Google')
        cy.contains('.pHiOh', 'Publicidad')
        cy.contains('.L3eUgb', 'Google').contains('Preferencias')
        cy.contains('.ayzqOc', 'Preferencias')
        cy.contains('Buscar con Google').get('.gNO89b')

    })
    

})