/// <reference types="cypress" />

//funcionalidads
describe('Buscar dispositivos', () => {

  //cenarios de testes
  /*it('Buscar dispositivos', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.restful-api.dev/objects' 
      
    })
      .then((response) => {
        console.log('Minha resposta: ' , response)
      })
  })*/

    it('Buscar dispositivos especifico', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects?id=1' 
      
      })
        .then((response) => {
          expect(response.status).to.equal(200)
        })
       

    })

    it('Buscar dispositivos inesistente', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects/jkjkjljlkjlkjlk',
        failOnStatusCode: false
      
      })
        .then((response) => {
          expect(response.status).to.equal(404)
          expect(response.body.error).to.equal('Oject with id=jkjkjljlkjlkjlk was not found.')
        })
       

    })



})