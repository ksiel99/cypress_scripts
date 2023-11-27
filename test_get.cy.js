describe('usando_get', () => {
    
    it.only('validando_boton_buscar_con_google', () => {
        cy.visit('https://www.google.com.mx/')
        cy.get('.gNO89b').should('be.enabled')
    })

    it('encontrando_barra_de_busqueda', () => {
        cy.visit('https://www.google.com.mx/')
        cy.get('.RNNXgb')
    })

})